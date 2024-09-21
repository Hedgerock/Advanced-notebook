import { useRemoveNotificationElement } from "../hooks";
import { NotificationBoxTimer } from "./NotificationBoxTimer";
import { SpanTag } from "./SpanTag";
import { NotificationBox, NotificationTextBox } from "../hoc";
import { NotificationBoxButton } from "./NotificationBoxButton";
import { notificationType } from "./data";

export const NotificationContainerMain = ({ data }) => {
    const { id, text, title, type } = data;
    const { element, action } = type
    const { curPercent } = useRemoveNotificationElement({ data })
    const { introduction, end } = notificationType[element][action]

    return (
        <NotificationBox data={data}>

          <NotificationTextBox>

            <SpanTag>{ introduction } { title }:</SpanTag>
            <SpanTag>{ text }</SpanTag>
            <SpanTag>{ end }</SpanTag>

          </NotificationTextBox>

          <NotificationBoxButton id={ id } />

          <NotificationBoxTimer curPercent = { curPercent }/>

        </NotificationBox>
    );
};
