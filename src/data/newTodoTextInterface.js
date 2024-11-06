export const newTodoTextInterface = ({ id, status, text, order, deleted, notation, count }) => {

    return { 
        id, 
        status, 
        text,
        count, 
        order, 
        deleted, 
        notation
    }
}