export const enterEvent = (event, value, func) => {

    if (event.key === 'Enter' && value.every(el => el.content)) {
        func();
    }
};