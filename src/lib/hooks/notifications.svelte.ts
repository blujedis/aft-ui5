/* eslint-disable @typescript-eslint/no-explicit-any */

export type NotificationState = 'active' | 'locked' | 'unlocked';

export type NotificationPosition = | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-right'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-left';

export interface NotificationProps {
  dismissible?: boolean;
  duration?: number; // set 0 for static until dismissed.
  group: string;
  max?: number;
  position?: NotificationPosition;
}

export interface NotificationStore {
  groups: Record<string, { state: NotificationState }>;
  notifications: (NotificationProps & { readonly key: string })[];
}

const defaults = {
  position: 'top-right' as NotificationPosition,
  dismissible: true,
  duration: 3500, // set 0 for static until dismissed.
  group: 'default',
  max: 0
};

const store = $state() as NotificationStore;

function uniqid(radix = 16) {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(radix);
}

function ensureGroup(group: string, state?: NotificationState) {
  store.groups[group] = store.groups[group] || {};
  if (state)
    store.groups[group].state = state;
}

function getState(group: string): NotificationState | null {
  if (!store.groups[group])
    return null;
  return store.groups[group].state;
}

function setState(group: string, state: NotificationState) {
  if (!store.groups[group]) throw new Error(`Could NOT set state for unknown group ${group}`);
  store.groups[group].state = state;
}

function get(group = 'default') {
  return store.notifications.filter(n => n.group === group);
}

function add(notification: NotificationProps) {
  const n = { ...defaults, ...notification, key: uniqid() } as NotificationProps & { key: string };

  ensureGroup(n.group);

  let timeoutid: any;

  const createTimeout = () => {
    timeoutid = setTimeout(() => {
      clearTimeout(timeoutid);
      const state = getState(n.group);
      if (state === 'locked') {
        createTimeout();
      } else if (state === 'unlocked') {
        setState(n.group, 'active');
        createTimeout();
      } else {
        remove(n.key);
      }
    }, notification.duration);
  };
  if (notification.duration) createTimeout();
}

function remove(key: string) {
  store.notifications = store.notifications.filter(n => n.key !== key);
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

export default {
  get,
  add,
  remove,
  activate,
  lock,
  unlock
};