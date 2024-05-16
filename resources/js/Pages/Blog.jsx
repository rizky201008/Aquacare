import AdminLayout from "@/Layouts/AdminLayout";

import { Head, usePage, Link, useForm, router } from "@inertiajs/react";
import "../../css/sb-admin-2.css";
import { useState } from "react";
import axios from "axios";

export default function Blog() {
    const { flash, errors, blogs } = usePage().props;
    console.log(blogs);

    const { data, setData, post } = useForm({
        title: "",
        content: "",
        image: "",
    });

    const handleFileChange = (e) => {
        console.log(e.target.files);
        setData("image", e.target.files[0]);
    };
    const handleInputChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleApi = (e) => {
        e.preventDefault();
        router.post(route('blogs.post'), data, {
            onSuccess: () => {
                reset();
            },
        });
    };
    // const storeInfo = (e) => {
    //     e.preventDefault();
    //     router.post("/blogs/create", data, {
    //         onSuccess: () => {
    //             reset();
    //         },
    //     });
    // };

    return (
        <AdminLayout>
            <>
                {/* component */}
                <main className=" mb-4 flex justify-center items-center dark:bg-slate-200">
                    {/* <div className="mb-4">
                        <input
                            type="file"
                            className="file-input bg-slate-200 w-full max-w-xs"
                            onChange={handleImage}
                        />
                        <button onClick={handleApi}>submit</button>
                    </div> */}
                    {flash.message && (
                        <div
                            className="flex items-center p-4 mb-4 text-sm text-midnight rounded-lg  dark:text-green"
                            role="alert"
                        >
                            <svg
                                className="flex-shrink-0 inline w-4 h-4 me-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>
                                <span className="font-medium">
                                    Success alert!
                                </span>{" "}
                                {flash.message}
                            </div>
                        </div>
                    )}
                    <div className="max-w-7xl bg-slate-300 dark:text-gray-900">
                        <form className=" w-full p-4 rounded shadow-md" onSubmit={handleApi} method="post">
                            <div class="mb-4">
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Gambar Artikel
                                </label>
                                <input
                                    type="file"
                                    class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="masukkan mas"
                                    onChange={handleFileChange}
                                    required
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.image}
                                </p>
                            </div>
                            <div class="mb-4">
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Judul Artikel
                                </label>
                                <input
                                    class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    type="text"
                                    name="title"
                                    placeholder="Masukkan Judul"
                                    value={data.title}
                                    onChange={handleInputChange}
                                    required
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.title}
                                </p>
                            </div>
                            <div class="mb-4">
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Deskripsi Artikel
                                </label>
                                <textarea
                                    className="textarea w-full bg-white"
                                    placeholder="Bio"
                                    name="content"
                                    value={data.content}
                                    onChange={handleInputChange}
                                ></textarea>
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.content}
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type={"submit"}
                                    className="py-2 px-4 bg-blue-800 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
                                >
                                    Tambah Artikel →
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </>
            <>
                {/* component */}
                <div className="relative pt-2 lg:pt-2 min-h-screen">
                    <div className="bg-cover w-full flex justify-center items-center">
                        <div className="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
                            <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                                    {blogs.map((blog, i) => (
                                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                            <figure>
                                                <img
                                                    // src={blog.image_url}
                                                    // alt={blog.slug}

                                                    src={blog.image_url}
                                                />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {blog.title}
                                                </h2>
                                                <p>
                                                   {blog.content}
                                                </p>
                                                <div className="card-actions justify-end">
                                                    <button className="btn btn-primary">
                                                        Detail
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </AdminLayout>
    );
}
