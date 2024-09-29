export const enterEvent = (event, value, func) => {
    const checkVal = Array.isArray(value) ? value.every(el => el.content) : value

    if (event.key === 'Enter' && checkVal) {
        func();
    }
};