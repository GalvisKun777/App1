import './MainLayout.css';

export const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            <div className="main-layout__container">
                {children}
            </div>
        </div>
    );
};
