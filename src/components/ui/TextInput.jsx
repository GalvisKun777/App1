import './TextInput.css';

export const TextInput = ({
    value,
    onChange,
    placeholder = '',
    type = 'text',
    error = '',
    label = '',
    className = ''
}) => {
    return (
        <div className={`text-input ${className}`}>
            {label && <label className="text-input__label">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`text-input__field ${error ? 'text-input__field--error' : ''}`}
            />
            {error && <span className="text-input__error">{error}</span>}
        </div>
    );
};
