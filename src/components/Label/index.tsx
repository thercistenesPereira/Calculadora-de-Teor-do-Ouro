type Props = {
    onTitle: string;
    onHtmlFor: string;
}

function Label({ onTitle, onHtmlFor }: Props) {
    return (
        <label htmlFor={ onHtmlFor } className="label_style">{ onTitle }</label>
    );
}

export default Label;