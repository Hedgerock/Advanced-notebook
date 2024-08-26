export const uniqueId = (arr) => {
    const mostCoolId = arr.length ? arr.sort((a,b) => b.id - a.id)[0].id + 1 : 1;

    return mostCoolId
}