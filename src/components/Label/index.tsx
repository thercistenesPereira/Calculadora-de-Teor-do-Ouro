type Props = {
    onTitle: string;
    onHtmlFor: string;
}

function Label({ onTitle, onHtmlFor }: Props) {
    return (
        <label htmlFor={ onHtmlFor }>{ onTitle }</label>
    );
}

export default Label;