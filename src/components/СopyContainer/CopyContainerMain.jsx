import { CopyBox, CopyTextBox } from "../hoc";
import { CopyBoxButton } from "./CopyBoxButton";
import './CopyContainer.css';
import { SpanTag } from "./SpanTag";

export const CopyContainerMain = ({ data }) => {
    const { id, text, title } = data

    return (
      <CopyBox>

        <CopyTextBox>

          <SpanTag>Text from { title }:</SpanTag>
          <SpanTag>{ text }</SpanTag>
          <SpanTag>has copied</SpanTag>

        </CopyTextBox>

        <CopyBoxButton id = { id }/>

      </CopyBox>
    )
}