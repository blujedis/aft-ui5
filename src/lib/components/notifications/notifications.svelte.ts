/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ThemeColor } from '$lib/theme/types.js';
import type { Component, Snippet } from 'svelte';

export type NotificationState = 'active' | 'locked' | 'unlocked';

export type NotificationPosition = | 'top'
  | 'bottom'
  | 'top-right'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-left';

interface NotificationBase {
  dismissible?: boolean;
  duration?: number; // set 0 for static until dismissed.
  group: string;
  theme?: ThemeColor;
}

export interface NotificationOptions extends NotificationBase {
  position?: NotificationPosition;
  state?: NotificationState;
}

export type NotificationProps = {
  content?: string | Component | Snippet;
  dismissible?: boolean;
  duration?: number; // set 0 for static until dismissed.
  group: string;
  title?: string;
} & NotificationBase;

export type NotificationInternalProps = NotificationProps & { readonly key: string; readonly position: NotificationPosition };

export interface NotificationGroup {
  options: Required<NotificationOptions>;
  notifications: NotificationInternalProps[];
}

export type NotificationStore = Record<string, NotificationGroup>;

export interface NotificationApi {
  getItems: () => NotificationInternalProps[];
  add: (notification: Omit<NotificationProps, 'group'>) => NotificationInternalProps;
  remove: (key: string) => NotificationInternalProps[];
  activate: () => void;
  lock: () => void;
  unlock: () => void;
}

const defaults: NotificationOptions = {
  dismissible: true,
  duration: 4000, // set 0 for static until dismissed.
  group: 'default',
  position: 'top-right' as NotificationPosition,
  theme: 'info'
};

const store = $state({}) as NotificationStore;

///// Helpers /////

function uniqid(radix = 16) {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(radix);
}

function getState(group: string): NotificationState | null {
  return store[group].options.state || null;
}

function setState(group: string, state: NotificationState) {
  if (!store[group]) throw new Error(`Could NOT set state for unknown group ${group}`);
  store[group].options.state = state;
}

///// API /////

// function getGroup(group = 'default') {
//   return store[group] || null;
// }

function getItems(group = 'default') {
  return store[group]?.notifications || [];
}

function add(notification: NotificationProps) {

  const n = { ...store[notification.group].options, ...notification, key: uniqid() } as NotificationInternalProps;

  store[n.group].notifications = n.position.startsWith('bottom')
    ? [...store[n.group].notifications, n]
    : [n, ...store[n.group].notifications];

  let timeoutid: any;

  const createTimeout = () => {
    timeoutid = setTimeout(() => {
      clearTimeout(timeoutid);
      const state = getState(n.group);
      if (state === 'locked') {
        createTimeout();
      } else if (state === 'unlocked') {
        activate(n.group);
        createTimeout();
      } else {
        remove(n.group, n.key);
      }
    }, n.duration);
  };

  if (n.duration) createTimeout();

  return n;

}

function remove(group: string, key: string) {
  return store[group].notifications = store[group].notifications.filter(n => n.key !== key);
}

function activate(group = 'default') {
  setState(group, 'active');
}

function lock(group = 'default') {
  setState(group, 'locked');
}

function unlock(group = 'default') {
  setState(group, 'unlocked');
}

function initNotifier(group: string): NotificationApi;
function initNotifier(options: NotificationOptions): NotificationApi;
function initNotifier(optionsOrGroup: string | NotificationOptions): NotificationApi {

  let _options = { ...defaults } as Required<NotificationOptions>;

  // normalize our options
  if (typeof optionsOrGroup !== 'string')
    _options = { ..._options, ...optionsOrGroup };
  else
    _options.group = optionsOrGroup;

  // if no group then create the group with options.
  if (!store[_options.group])
    store[_options.group] = { options: _options, notifications: [] };

  return {
    getItems: () => getItems(_options.group),
    add: (notification: Omit<NotificationProps, 'group'>) => {
      return add({ ...notification, group: _options.group });
    },
    remove: (key: string) => remove(_options.group, key),
    activate: () => activate(_options.group),
    lock: () => lock(_options.group),
    unlock: () => unlock(_options.group),
  };

}

const getNotifier = (group?: string) => initNotifier(group || 'default');

export {
  initNotifier,
  getNotifier,
  getItems,
  add,
  remove,
  activate,
  lock,
  unlock
};