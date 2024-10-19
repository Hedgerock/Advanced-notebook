import { ButtonIcon } from "../../../../../../ButtonIcon"
import { NotationsElementButton } from "./NotationsElement"



export const BoxButtons = ({ data }) => {

    return (
        data.map(el => (
            <NotationsElementButton
                func = { el.func } 
                modificatior= { el.modificator }
                title = { el.title }
                key={ el.id }
            >
                <ButtonIcon value = { el.icon } />
            </NotationsElementButton>
        ))
    )

}