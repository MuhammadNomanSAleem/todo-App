import React, { useRef, useState } from "react";
import Todo from "./Todo";

function Form() {
  const inputText = useRef();

  const [data, setData] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();
    data.unshift({ todo: inputText.current.value });
    setData([...data]);
    inputText.current.value = "";
  };

  console.log(data);

  const deleteTodo = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };

  const editTodo = (index, val) => {
    data.splice(index, 1, {
      todo: val,
    });
    setData([...data]);
  };

  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={submitForm}>
          <input
            className="border border-gray-300 rounded-md px-4 py-2 mr-2"
            type="text"
            placeholder="Enter todo"
            required
            ref={inputText}
            
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      {data.length === 0 ? (
        <h2 className="text-center flex justify-center items-center text-5xl font-bold
      mt-10">
          No Todo Added Yet.
        </h2>
      ) : (
        data.map((item, index) => {
          return (
            <Todo
              key={index}
              todo={item.todo}
              deleteTodo={deleteTodo}
              index={index}
              editTodo={editTodo}
            />
          );
        })
      )}
    </>
  );
}

export default Form;
