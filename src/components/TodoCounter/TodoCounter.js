import React from 'react';
import './TodoCounter.css';

function TodoCounter(){
    return (
        <>
            <h2 className="font-semibold p-2 text-2xl text-blue-700">Completed <span className="animate-pulse">3</span> to <span className="animate-pulse">5</span></h2>
        </>
    );
}

//Exportamos las variables que se necesitan en verdad.
export {TodoCounter};