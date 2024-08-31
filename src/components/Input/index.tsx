type InputProps = {
    onType: string;
    onId: string;
    onName: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onValue: string;
    onPlaceholder: string;
    autoFocus?: boolean;
}

function Input({ onType, onId, onName, onChange, onValue, onPlaceholder, autoFocus }: InputProps) {
    return (
        <input
            type={ onType }
            id={ onId }
            name={ onName }
            onChange={ onChange }
            value={ onValue }
            placeholder={ onPlaceholder }
            className="input_style"
            autoFocus={autoFocus}
        />
    )
}

export default Input;