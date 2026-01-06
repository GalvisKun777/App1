import './Avatar.css';

export const Avatar = ({
    name,
    size = 'medium',
    active = false,
    onClick,
    className = ''
}) => {
    // Get initials from name
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    // Generate color based on name
    const getColorFromName = (name) => {
        const colors = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        ];

        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };

    const classes = [
        'avatar',
        `avatar--${size}`,
        active ? 'avatar--active' : '',
        onClick ? 'avatar--clickable' : '',
        className
    ].filter(Boolean).join(' ');

    const style = {
        background: getColorFromName(name)
    };

    return (
        <div
            className={classes}
            onClick={onClick}
            style={style}
        >
            <span className="avatar__initials">{getInitials(name)}</span>
            {active && <div className="avatar__pulse"></div>}
        </div>
    );
};
