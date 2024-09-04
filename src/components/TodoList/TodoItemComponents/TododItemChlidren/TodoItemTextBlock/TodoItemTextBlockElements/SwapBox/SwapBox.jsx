
import { useGetSwapped, useTodoItemChildContext } from '../../../hooks';
import { SwapBoxButton } from './SwapBoxButton';
import './SwapBox.css';

export const SwapBox = () => {
    const { lastChildChildren, firstChildChildren } = useTodoItemChildContext();
    const { initMoveUp, initMoveDown } = useGetSwapped();

    return (
        <>
                { !firstChildChildren &&
                    <SwapBoxButton func = { initMoveUp } keyButton='up'>
                        <i className="fa-solid fa-angle-up"></i>
                    </SwapBoxButton>
                }
                { !lastChildChildren && 
                    <SwapBoxButton func = { initMoveDown } keyButton='down'>
                        <i className="fa-solid fa-angle-down"></i>
                    </SwapBoxButton>
                }
         </>
    )
}