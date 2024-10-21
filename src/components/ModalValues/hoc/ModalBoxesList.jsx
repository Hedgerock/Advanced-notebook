
import { useGetModalBoxes } from '../../hooks';
import { ModalBoxesProvider } from './ModalBoxesProvider';

export const ModalBoxesList = ({ children }) => {
    const { modals } = useGetModalBoxes();

    return modals.map(el => (
        el.condition &&
            <ModalBoxesProvider key = { el.id } data = { el }>
                { children }
            </ModalBoxesProvider>
    ))
}