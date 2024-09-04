export const enterEvent = (event, value, func) => {
    if (event.key === 'Enter' && value) {
        func();
    }
};