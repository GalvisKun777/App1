import './Header.css';

export const Header = ({ title, subtitle, onBack }) => {
    return (
        <header className="header">
            {onBack && (
                <button className="header__back" onClick={onBack}>
                    ← Volver
                </button>
            )}
            <h1 className="header__title">{title}</h1>
            {subtitle && <p className="header__subtitle">{subtitle}</p>}
        </header>
    );
};
