export const todoFormInterface = ({ id, content, notation }) => {

    return {
        id: id, 
        content, 
        notation
    }
    
}

export const initialNotation = {
    status: false, 
    value: [{ id: 1, text: '', isActive: false }] 
}