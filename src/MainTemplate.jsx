import React from 'react';

const MainTemplate = ({children}) => {
    return (
        <div>
            <h1>Aplikacja React z React Router</h1>
            {children}
        </div>
    )
};

export default MainTemplate;