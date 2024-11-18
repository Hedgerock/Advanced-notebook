export const todoFormInterface = ({ id, content, notation, count = { status: false, value: 1 } }) => {

    return {
        id: id, 
        content, 
        notation,
        count
    }
    
}

export const initialNotation = {
    status: false, 
    value: [{ 
        id: Date.now(), 
        text: '', 
        isActive: false, 
        count: { status: false, value: 1, derivative: 1 } 
    }],
}