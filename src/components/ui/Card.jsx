import './Card.css';

export const Card = ({
    children,
    className = '',
    gradient = false,
    glow = false,
    onClick
}) => {
    const classes = [
        'card',
        gradient ? 'card--gradient' : '',
        glow ? 'card--glow' : '',
        onClick ? 'card--clickable' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} onClick={onClick}>
            {children}
        </div>
    );
};
