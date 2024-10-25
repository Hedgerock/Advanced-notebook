export const checkFormForNotations = ({ form }) => {
    return form.some(val => val.contentValue.some(el => el.notation?.status))
}