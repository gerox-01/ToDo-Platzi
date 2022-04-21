import React from 'react';
import { BiCommentAdd } from "react-icons/bi";

function CreateTodoButton() {
  return (
    <button className="bg-blue-700 text-white font-semibold h-8 w-8 hover:bg-cyan-200 hover:text-black"><BiCommentAdd className="p-0 m-0 inline"/></button>
    );
}

export {CreateTodoButton};