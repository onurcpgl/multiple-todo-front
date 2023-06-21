import React, { useEffect, useState } from "react";
import userService from "../../Service/userService";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../Redux/Reducers/Auth/AuthReducer";
import todoService from "../../Service/todoService";
import TodoAdd from "../../Components/Profile/TodoAdd";
import TodoList from "../../Components/Profile/TodoList";
function Profile() {
  const [loading, setLoading] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [user, setUser] = useState();
  const [addModal, setAddModal] = useState(false);
  const [myTodo, setMyTodo] = useState("");
  const userData = useSelector(selectCurrentUser);

  useEffect(() => {
    setLoading(true);
    if (userData) {
      (async () => {
        const result = await userService.getProfile();
        setUser(result);

        getTodos();
      })();
    }
  }, []);
  const getTodos = async () => {
    const todos = await todoService.getUserTodos();
    setMyTodo(todos);
    if (todos) {
      setLoading(false);
    }
  }
  return (
    !loading && (
      <>
        <TodoAdd
          addModal={addModal}
          setAddModal={setAddModal}
          setMyTodo={setMyTodo}
          myTodo={myTodo}
          getTodos={getTodos}
        />
        <div className="flex justify-between w-full mt-6 gap-10">
          <div className="w-full max-w-sm h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1">
            <div className="flex justify-end px-4 pt-4 relative">
              <button
                onClick={() => setProfileModal(!profileModal)}
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdown"
                className={
                  profileModal
                    ? "z-10 absolute top-14  text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    : "z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                }
              >
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <a
                      href={`/profile-edit/${user?.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Export Data
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {user?.firstName} {user?.lastName}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add friend
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Message
                </a>
              </div>
            </div>
          </div>

          <TodoList
            myTodo={myTodo}
            addModal={addModal}
            setAddModal={setAddModal}
            setMyTodo={setMyTodo}
          />
        </div>
      </>
    )
  );
}

export default Profile;
