import './Button.css';

export const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    fullWidth = false,
    className = ''
}) => {
    const classes = [
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        fullWidth ? 'btn--full' : '',
        disabled ? 'btn--disabled' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
