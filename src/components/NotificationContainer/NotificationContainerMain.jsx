import { useRemoveNotificationElement } from "../hooks";
import { NotificationBoxTimer } from "./NotificationBoxTimer";
import { DivTag } from "./DivTag";
import { NotificationBox, NotificationTextBox } from "../hoc";
import { NotificationBoxButton } from "./NotificationBoxButton";
import { notificationType } from "./data";
import React from "react";

export const NotificationContainerMain = ({ data }) => {
    const { id, text, title, type } = data;
    const { element, action } = type
    const { curPercent } = useRemoveNotificationElement({ data })
    const { introduction, end } = notificationType[element][action]

    return (
        <NotificationBox data={data}>

          <NotificationTextBox>

            <DivTag>{ introduction } { title }:</DivTag>
            <DivTag>
              { Array.isArray(text)
                ? text.map(el => (
                  <span key={ el.id }>{ el.text }</span>
                ))
                : text
              }
            </DivTag>
            <DivTag>{ end }</DivTag>

          </NotificationTextBox>

          <NotificationBoxButton id={ id } />

          <NotificationBoxTimer curPercent = { curPercent }/>

        </NotificationBox>
    );
};
