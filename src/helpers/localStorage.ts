export const localStorageGet = function (key: string) {
    var value = localStorage.getItem(key);
    if (value) {
        try {
            value = JSON.parse(value);
        } catch (e) {
            console.error(e);
        }
    }

    return value;
};

// Set a key-value pair in localStorage
export const localStorageSet = function (key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
};

// Returns true if the key exists in the local storage
export const localStorageHas = function (key: string) {
    return !!localStorage.getItem(key);
};
