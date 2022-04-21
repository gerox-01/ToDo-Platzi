import React from 'react';
import { MdDone, MdDelete } from "react-icons/md";

function TodoItem(props) {
  return (
    <li className="flex justify-between items-center m-1 p-1 w-full border border-blue-400 rounded-md">
      <div className="bg-blue-300 w-fit h-fit rounded-md p-0.5 hover:bg-green-800">
        <span className="cursor-pointer hover:text-white"><MdDone /></span>
      </div>
      <p>{props.text}</p>
      <div className="bg-transparent w-fit h-fit rounded-md p-0.5 hover:bg-red-800">
        <span className="cursor-pointer hover:text-white"><MdDelete /></span>
      </div>
    </li>
  );
}

export { TodoItem };