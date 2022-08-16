import React from 'react';
import ReactDOM from 'react-dom';


const App: React.FC = () => {
    return (
        <div>
            <p>Hello Laravel + React!!</p>
        </div>
    )
}

const container = document.getElementById('app') as HTMLInputElement;
const root = ReactDOM.createRoot(container);
root.render(<App />);