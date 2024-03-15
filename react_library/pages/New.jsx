import { register_user } from '@/services';
import Link from 'next/link';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Avatar } from './components/logo.js';
import Ton from './components/boton.jsx';
export default function Register() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const res = await register_user(formData);
        if (res.success) {
            toast.success(res.message);
        }
        else {
            toast.error(res.message);
        }
    };

    return (
        <>
            <section className="bg-indigo-700 text-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-indigo-700 md:text-2xl dark:text-white">
                               NEW BOOK
                            </h1>
                            <div className="flex justify-center items-center">
      <Avatar />
      
    </div>
      
                            <form onSubmit={handleSubmit} className=" space-y-4 md:space-y-6" action="#">
                                <div className='text-left'>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white"> TitUlo</label>
                                    <input onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" name="name" id="name" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abdullah Moiz" required="" />
                                </div>
                                <div className='text-left'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white"> Autor</label>
                                    <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div className='text-left'>
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-indigo-700 dark:text-white">Genero</label>
    <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-indigo-50 border border-indigo-300 text-indigo-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
</div>

<Ton buttonText="Ingresar" buttonColor="black" hoverColor="orange-500" />


                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}
