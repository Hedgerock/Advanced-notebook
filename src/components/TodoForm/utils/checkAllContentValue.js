export const checkAllContentValue = ({ data, key }) => {
    const res = {};

    key.forEach(item => {
        if (item === 'notation') {
            const filteredData = data.filter(val => val.notation.status)

            res[item] = filteredData
                .every(el => el.notation.value.every(val => val.text.length))
            return;
        }

        res[item] = data.every(el => el[item])
    })

    return !Object.values(res).every(el => el);
}