import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import todoService from "../../Service/todoService";

function TodoEdit({ setEditTodo, editTodoValue, getTodos }) {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        onSubmit: async (values, { resetForm }) => {
            editTodoValue.title = values.title;
            editTodoValue.description = values.description;
            const result = await todoService.updateTodo(editTodoValue);
            getTodos();
            if (result === true) {
                alert("Başarılı");
            } else {
                alert("İşlem gerçekleştirilemedi.")
            }
        },
    });
    useEffect(() => {
        formik.setValues({ ...editTodoValue })
    }, [editTodoValue])
    return (
        <div className='w-96 bg-slate-100 shadow-xl p-5 rounded-xl z-50 absolute border border-spacing-10 border-gray-950'>
            <p className='text-xl my-2'>Todo Düzenleme</p>
            <form onSubmit={formik.handleSubmit} className="w-full">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Başlık
                </label>
                <input
                    id="title"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
                {formik.errors.title ? formik.errors.password : null}
                <label
                    htmlFor="passwordConfirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Açıklama
                </label>
                <input
                    id="description"
                    name="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                />
                {formik.errors.description ? formik.errors.description : null}
                <div className='w-full flex justify-between'>
                    <button className='cursor-pointer mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit'>
                        Değiştir
                    </button>
                    <div onClick={() => setEditTodo(false)} className='mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                        Kapat
                    </div>
                </div>

            </form>
        </div>
    )
}

export default TodoEdit