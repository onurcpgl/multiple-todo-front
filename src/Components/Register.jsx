import React, { useState } from 'react'
import { useFormik } from "formik";
import userService from "../Service/userService";

import registerBackground from '../Assets/Register/registerbg.webp'
import { useNavigate } from 'react-router-dom';
function Register() {
    const [loading, setLoading] = useState();
    const [alert, setAlert] = useState({ response: null, message: "null" });
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            mail: "",
            password: "",

        },
        onSubmit: async (values, { resetForm }) => {
            const result = await userService.createUser(values);

            if (result) {
                resetForm();
                setAlert(result);
            }
        },
    });
    const closeAlert = () => {
        setAlert({ response: null, message: "null" })
        if (alert.response === 200) {
            navigate('/login')
        }
    }
    return (
        <>
            <img
                src={registerBackground}
                className="absolute z-20 h-screen w-full object-cover"
                alt="bg"
            />


            <div className=' w-full h-screen flex justify-center items-center flex-col relative z-50'>
                <section className="">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                        {alert.response === 200 && (
                            <div
                                className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 absolute z-50 bottom-0 flex justify-center items-center"
                                role="alert"
                            >
                                <span className="font-medium">{alert.message}</span>
                                <button type="button" className='w-8 h-8 hover:rounded-2xl ml-5 hover:border-2 hover:border-neutral-900' onClick={closeAlert}>
                                    <svg className='text-black text-2xl' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        )}
                        {alert.response === 409 && (
                            <div
                                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 absolute z-50 bottom-0  flex justify-center items-center"
                                role="alert"
                            >
                                <span className="font-medium">Hata:</span> {alert.message}
                                <button type="button" className='w-8 h-8 hover:rounded-2xl ml-5 hover:border-2 hover:border-neutral-900' onClick={closeAlert}>
                                    <svg className='text-black text-2xl' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        )}
                        {alert.response === 400 && (
                            <div
                                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 absolute z-50 bottom-0  flex justify-center items-center"
                                role="alert"
                            >
                                <span className="font-medium">Hata:</span> hatalıs {alert.message}
                                <button type="button" className='w-8 h-8 hover:rounded-2xl ml-5 hover:border-2 hover:border-neutral-900' onClick={closeAlert}>
                                    <svg className='text-black text-2xl' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                        )}
                        <div className="w-[350px] max-md:w-[250px] bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">

                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Hesap oluştur
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            İsim
                                        </label>
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.firstName}
                                            name="firstName"
                                            type="input"
                                            id="firstName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Onur"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Soyisim
                                        </label>
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.lastName}
                                            name="lastName"
                                            type="input"
                                            id="lastName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Çöpoğlu"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            E-mail adresi
                                        </label>
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.mail}
                                            name="mail"
                                            type="email"
                                            id="mail"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="mytodo@apptodo.org"
                                            required
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Şifreniz
                                        </label>
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            name="password"
                                            type="password"
                                            id="password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                    </div>


                                    {loading ? (
                                        <button
                                            disabled
                                            type="button"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                role="status"
                                                className="inline w-4 h-4 mr-3 text-white animate-spin"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="#E5E7EB"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            Loading...
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Submit
                                        </button>
                                    )}
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Hesabınız var mı? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Giriş yap</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Register