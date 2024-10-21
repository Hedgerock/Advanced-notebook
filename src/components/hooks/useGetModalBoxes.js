import { useTodoContext } from "./useTodoContext"

export const useGetModalBoxes = () => {
    const { isNotEmpty, allNotations, buttonIcons, setModal, setIsSearchByNote } = useTodoContext();
    const { notation, deletedList } = buttonIcons;

    const deletedListModalHandler = () => {
        setModal(prev => !prev);
    }

    const notationListHandler = () => {
        setIsSearchByNote(prev => !prev)
    }

    const modals = [
        {
            id: 1,
            title: 'Recently deleted todos',
            buttonValue: deletedList,
            buttonFunc: deletedListModalHandler,
            condition: !!isNotEmpty
        },
        {
            id: 2,
            title: 'Search by notations',
            buttonValue: notation,
            buttonFunc: notationListHandler,
            condition: !!allNotations.length
        }
    ]

    return { modals };
}