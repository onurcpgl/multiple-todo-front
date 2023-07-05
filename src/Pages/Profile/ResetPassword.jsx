import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import userService from "../../Service/userService";


const validationSchema = Yup.object({
    password: Yup.string()
        .required("Zorunlu alan")
        .min(4, "Şifre en az 8 karakter olmalıdır"),
    passwordConfirm: Yup.string()
        .required("Zorunlu alan")
        .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor'),
});

function ResetPassword({ setPasswordModal }) {
    const formik = useFormik({
        initialValues: {
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            console.log(values)
            const result = await userService.changePassword(values);
            resetForm();
            alert(result.message);
        },
    });
    return (
        <div className='w-96 bg-slate-100 shadow-xl p-5 rounded-xl z-50 absolute border border-spacing-10 border-gray-950'>
            <p className='text-xl my-2'>Change Password</p>
            <form onSubmit={formik.handleSubmit} className="w-full">
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? formik.errors.password : null}
                <label
                    htmlFor="passwordConfirm"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password Confirm
                </label>
                <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirm}
                />
                {formik.errors.passwordConfirm ? formik.errors.passwordConfirm : null}
                <div className='w-full flex justify-between'>
                    <button className='cursor-pointer mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit'>
                        Değiştir
                    </button>
                    <div onClick={() => setPasswordModal(false)} className='mt-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
                        Kapat
                    </div>
                </div>

            </form>
        </div>


    )
}

export default ResetPassword