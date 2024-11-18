import { useTodoFormItemContext } from "../../../hooks/useTodoForItemContext";

export const useGetParentAndChildClassName = () => {

    const { data } = useTodoFormItemContext();

    const isValueOpened = data.notation.status ? data.notation.value.every(el => el.text.length > 0) : true;
    const isElementReady = isValueOpened && data.content.length > 0;
    const isCountedAndLastElement = data.count.status && data.notation.value.length > 1;

    const parentClassName = `todo-form-input-box ${ isCountedAndLastElement ? 'todo-form-input-box_last-element' : '' }`;
    const childClassName =  `todo-form__input ${ isElementReady ? '' : 'todo-form__input_empty' }`;

    return { parentClassName, childClassName }
}