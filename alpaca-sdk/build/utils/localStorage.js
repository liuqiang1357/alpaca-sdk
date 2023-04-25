import { detect } from 'detect-browser';
const reg = {};
export function setWithExpiry(key, value, ttl) {
    const now = new Date();
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    const result = detect();
    if (result && result.type === 'browser')
        localStorage.setItem(key, JSON.stringify(item));
    else {
        reg[key] = JSON.stringify(item);
    }
}
export function getWithExpiry(key) {
    const result = detect();
    if (result && result.type === 'browser') {
        const itemStr = localStorage.getItem(key);
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null;
        }
        const item = JSON.parse(itemStr);
        const now = new Date();
        // compare the expiry time of the item with the current time
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key);
            return null;
        }
        return item.value;
    }
    else {
        const itemStr = reg[key];
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null;
        }
        const item = JSON.parse(itemStr);
        const now = new Date();
        // compare the expiry time of the item with the current time
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            reg[key] = undefined;
            return null;
        }
        return item.value;
    }
}
export function shouldComponentBeHidden(comoponentName) {
    const key = `${comoponentName}.hidden`;
    const strValue = localStorage.getItem(key);
    // check whether the key has value and the value is 'true' or not
    if (!strValue || strValue !== true.toString())
        return false;
    return true;
}
export function setVisibilityPersistently(comoponentName, hidden) {
    const key = `${comoponentName}.hidden`;
    localStorage.setItem(key, hidden.toString());
}
