/* eslint-disable @typescript-eslint/no-explicit-any */
const defaults = {
    dismissible: true,
    duration: 4000, // set 0 for static until dismissed.
    group: 'default',
    position: 'top-right',
    theme: 'info'
};
const store = $state({});
///// Helpers /////
function uniqid(radix = 16) {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(radix);
}
function getState(group) {
    return store[group].options.state || null;
}
function setState(group, state) {
    if (!store[group])
        throw new Error(`Could NOT set state for unknown group ${group}`);
    store[group].options.state = state;
}
///// API /////
// function getGroup(group = 'default') {
//   return store[group] || null;
// }
function getItems(group = 'default') {
    return store[group]?.notifications || [];
}
function add(notification) {
    const n = { ...store[notification.group].options, ...notification, key: uniqid() };
    store[n.group].notifications = n.position.startsWith('bottom')
        ? [...store[n.group].notifications, n]
        : [n, ...store[n.group].notifications];
    let timeoutid;
    const createTimeout = () => {
        timeoutid = setTimeout(() => {
            clearTimeout(timeoutid);
            const state = getState(n.group);
            if (state === 'locked') {
                createTimeout();
            }
            else if (state === 'unlocked') {
                activate(n.group);
                createTimeout();
            }
            else {
                remove(n.group, n.key);
            }
        }, n.duration);
    };
    if (n.duration)
        createTimeout();
    return n;
}
function remove(group, key) {
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
function initNotifier(optionsOrGroup) {
    let _options = { ...defaults };
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
        add: (notification) => {
            return add({ ...notification, group: _options.group });
        },
        remove: (key) => remove(_options.group, key),
        activate: () => activate(_options.group),
        lock: () => lock(_options.group),
        unlock: () => unlock(_options.group),
    };
}
const getNotifier = (group) => initNotifier(group || 'default');
export { initNotifier, getNotifier, getItems, add, remove, activate, lock, unlock };
