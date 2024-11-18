export const useGetActions = ({ data, modificator, childId }) => {
    const initChangeParentAndChild = ({ parent, newValue, currentFunction }) => {
        return parent.id === data.id
            ? currentFunction({ parent, newValue })
            : parent
    }
    
    const initChangeCountValue = ({ parent, newValue }) => {
        return {...parent, count: {...parent.count, value: newValue }, notation: {...parent.notation, value: parent.notation.value
            .map(val => {
                return {...val, count: {...val.count, derivative:newValue * val.count.value}}
            })} 
        }
    }

    const initChangeCountValueForChild = ({ parent, newValue }) => {
        return {...parent, notation: {...parent.notation, value: parent.notation.value
            .map(val => {
                return val.id === childId
                    ? {...val, count: {...val.count, value: newValue, derivative: newValue * data.count.value}}
                    : val
                }
            )}
        }
    }

    const changeValue = ({ currentData, newValue, key }) => {
        return currentData.map(el => !modificator 
            ? initChangeParentAndChild({ 
                parent: el, 
                newValue, 
                currentFunction: actions[key].parent 
            }) 
            : initChangeParentAndChild({ 
                parent: el, 
                newValue, 
                currentFunction: actions[key].child
            })
        )
    }

    const initChangeStatus = ({ parent, newValue }) => {
        return {...parent, count: {...parent.count, status: newValue, value: 1}, notation: {...parent.notation, value: parent.notation.value
            .map(val => {
                return {...val, count: {...val.count, status: newValue, value: 1, derivative: 1 }}
            })}
        }
    }

    const initChangeChildStatus = ({ parent, newValue }) => {
        return {...parent, notation: {...parent.notation, value: parent.notation.value
            .map(val => {
                return val.id === childId
                    ? {...val, count: {...val.count, status: newValue, value: 1, derivative: parent.count.value * 1}}
                    : val
                }
            )}
        }
    }

    const actions = {
        changeCount: {
            parent: initChangeCountValue,
            child: initChangeCountValueForChild
        },
        changeStatus: {
            parent: initChangeStatus,
            child: initChangeChildStatus
        }
    }

    return { actions, changeValue }
}