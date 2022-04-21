import React from 'react';

function TodoSearch() {
    return (
        <>
        <input className="w-1/2 border-x-8 border-blue-700 ring-offset-2 rounded-md p-1 focus:ring-4" type="text" placeholder="Buscar..." />
        </>
    );
}

export {TodoSearch};