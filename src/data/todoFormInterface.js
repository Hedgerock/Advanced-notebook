export const todoFormInterface = ({ id, content, notation }) => {

    return {
        id: id, 
        content, 
        notation,
        count: { status: false, value: 1 }
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