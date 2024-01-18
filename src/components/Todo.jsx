import React, { useRef, useState } from "react";

function Todo({ todo, deleteTodo, editTodo, index }) {
  const inputValue = useRef();
  const [showModal, setShowModal] = useState(true);

  const hideTodo = () => {
    setShowModal(false);
  };

  const showTodo = () => {
    setShowModal(true);
    const val = inputValue.current.value;
    editTodo(index, val);
  };

  return showModal ? (
    <div className="flex justify-between items-center ml-[430px] rounded-md mt-5 bg-white h-fit w-[400px] p-3">
      <div>
        <p>{todo}</p>
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => {
            hideTodo();
          }}
        >
          Edit
        </button>

        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="bg-white w-fit h-fit p-4 rounded-md ml-[430px] mt-3">
      <input
        className="border border-black mr-3 p-1 w-[300px]"
        placeholder="Edit Todo"
        type="text"
        ref={inputValue}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={showTodo}
      >
        Save
      </button>
    </div>
  );
}

export default Todo;
