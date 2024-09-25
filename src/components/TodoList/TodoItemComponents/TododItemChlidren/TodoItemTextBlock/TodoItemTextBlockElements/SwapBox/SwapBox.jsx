
import { useGetSwapped, useTodoItemChildContext } from '../../../hooks';
import { ButtonIcon } from '../../../../../../ButtonIcon';
import { SwapBoxButton } from './SwapBoxButton';
import './SwapBox.css';

export const SwapBox = () => {
    const { lastChildChildren, firstChildChildren, buttonIcons } = useTodoItemChildContext();
    const { up, down } = buttonIcons
    const { initMoveUp, initMoveDown } = useGetSwapped();

    return (
        <>
                { !firstChildChildren &&
                    <SwapBoxButton func = { initMoveUp } keyButton='up'>
                        <ButtonIcon  value={ up }/>
                    </SwapBoxButton>
                }
                { !lastChildChildren && 
                    <SwapBoxButton func = { initMoveDown } keyButton='down'>
                        <ButtonIcon  value={ down }/>
                    </SwapBoxButton>
                }
         </>
    )
}