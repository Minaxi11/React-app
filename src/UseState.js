import './App.css';
import React, { useState } from 'react';
export default function UseState(props) {
    const [count, setCount] = useState(100);
    const [str, setStr] = useState('XYz');

    return (
        <div className="UseState">
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>You clicked {str} times</p>
            <button onClick={() => setStr('PQR')}>
               Change string
            </button>
            
        </div>
    );
}