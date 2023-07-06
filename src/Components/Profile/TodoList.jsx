import React from "react";
import todoService from "../../Service/todoService";
import { useNavigate } from "react-router-dom";

function TodoList({ myTodo, setAddModal, addModal, setMyTodo, getTodos, setEditTodo, setEditTodoValue }) {
  const navigate = useNavigate();
  const deleteTodoHandler = async (todoId) => {
    const response = await todoService.deleteTodo(todoId);
    const result = myTodo.filter((item) => {
      if (item.id !== todoId) {
        return item;
      }
    });
    setMyTodo(result);
  };
  const taskActionHandler = async (action, todo) => {
    todo.taskResultEnum = action;
    const result = await todoService.updateTodo(todo);
    if (result == true) {
      getTodos();
    }
  }
  const todoClassName = (value) => {
    switch (value) {
      case 0:
        return "w-full  py-4 px-6 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      case 1:
        return "w-full  py-4 px-6 flex items-center justify-between bg-green-100 border border-gray-200 rounded-lg shadow hover:bg-green-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      case 2:
        return "w-full  py-4 px-6 flex items-center justify-between bg-red-100 border border-gray-200 rounded-lg shadow hover:bg-red-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      default:
        return "w-full  py-4 px-6 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    }
  }
  const editHandler = (todo) => {
    setEditTodo(true);
    setEditTodoValue(todo);
  }
  return (
    <div className="w-3/4">
      <div className="flex justify-between">
        <p className="text-4xl font-semibold opacity-80">Todolar</p>
        <button
          onClick={() => setAddModal(!addModal)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Todo Ekle
        </button>
      </div>

      {myTodo &&
        myTodo?.map((todo, i) => (
          <div className="flex w-full mt-5" key={i}>
            <div className={todoClassName(todo.taskResultEnum)}>
              <div className="w-[90%] h-full">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                  {todo.title}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 h-full ">
                  {todo.description}
                </p>
              </div>

              <div className="flex flex-col items-center gap-5 w-[10%] ">
                <button
                  type="button"
                  onClick={() => taskActionHandler(1, todo)}
                  className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-700 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-3"
                  aria-label="Close"
                >
                  <span className="sr-only">Check</span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => taskActionHandler(2, todo)}
                  className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-border-2"
                  aria-label="Close"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => editHandler(todo)}
                  className="ml-auto -mx-1.5 -my-1.5 bg-orange-100  text-black rounded-lg focus:ring-2 focus:bg-orange-200 p-1.5 hover:bg-orange-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-700 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-border-2"
                  aria-label="Close"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                  </svg>
                </button>
                <button
                  type="button"

                  onClick={() => deleteTodoHandler(todo.id)}
                  className="ml-auto -mx-1.5 -my-1.5 bg-red-200 text-black rounded-lg focus:ring-2 focus:ring-red-600 p-1.5 hover:bg-red-300 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-700 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-border-2"
                  aria-label="Close"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

    </div>
  );
}

export default TodoList;
