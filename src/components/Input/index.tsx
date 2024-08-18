type InputProps = {
    onType: string;
    onId: string;
    onName: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValue: string;
    onPlaceholder: string;
}

function Input({ onType, onId, onName, onChange, onValue, onPlaceholder }: InputProps) {
    return (
        <input
            type={ onType }
            id={ onId }
            name={ onName }
            onChange={ onChange }
            value={ onValue }
            placeholder={ onPlaceholder }
        />
    )
}

export default Input;