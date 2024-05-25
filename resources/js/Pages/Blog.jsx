import AdminLayout from "@/Layouts/AdminLayout";

import {Head, usePage, Link, useForm, router} from "@inertiajs/react";
import "../../css/sb-admin-2.css";
import {useState} from "react";

export default function Blog() {
    const {flash, errors, blogs} = usePage().props;
    const [formState, setFormState] = useState("create")
    const [selectedId, setSelectedId] = useState(null)
    const {data, setData, post} = useForm({
        title: "",
        content: "",
        image: ""
    });

    const handleFileChange = (e) => {
        console.log(e.target.files);
        setData("image", e.target.files[0]);
    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setData(name, value);
        console.log(data)
    };

    const reset = () => {
        setData({
            title: "",
            content: "",
            image: null
        });
    }

    const handleCreateApi = (e) => {
        e.preventDefault();
        router.post(route('blogs.create-post'), data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleUpdateApi = (e) => {
        console.log(Object.assign(data, {'id': selectedId}))
        e.preventDefault();
        router.post(route('blogs.update-post'), Object.assign(data, {'id': selectedId}), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AdminLayout>
            <>
                {/* component */}
                <main className=" mb-4 flex flex-wrap justify-center items-center dark:bg-slate-200">
                    {flash.message && (
                        <div role="alert" className="alert alert-success">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span>{flash.message}</span>
                        </div>
                    )}
                    <div className="w-full bg-slate-300 dark:text-gray-900">
                        <form className=" w-full p-4 rounded shadow-md" onSubmit={
                            (formState === "create") ? handleCreateApi : handleUpdateApi
                        } method="post">
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Gambar Artikel
                                </label>
                                <input
                                    type="file"
                                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="masukkan mas"
                                    onChange={handleFileChange}
                                    required={formState === "create"}
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.image}
                                </p>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Judul Artikel
                                </label>
                                <input
                                    className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Masukkan Judul"
                                    required
                                    defaultValue={data.title}
                                    onChange={handleInputChange}
                                />
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.title}
                                </p>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-800 dark:text-gray-300 mb-2"
                                >
                                    Isi Artikel
                                </label>
                                <textarea
                                    className="textarea w-full bg-white"
                                    name="content"
                                    placeholder={"Isi artikel"}
                                    defaultValue={data.content}
                                    onChange={handleInputChange}
                                >
                                </textarea>
                                <p className="text-red-500 text-sm mt-2">
                                    {errors.content}
                                </p>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type={"submit"}
                                    className="py-2 px-4 bg-blue-800 text-white rounded-sm hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800"
                                >
                                    {(formState === "create") ? "Tambah Artikel" : "Ubah Artikel"} →
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </>
            <>
                <div className="relative pt-2 lg:pt-2 min-h-screen">
                    <div className="bg-cover w-full flex justify-center items-center">
                        <div className="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
                            <div
                                className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                                <div
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                                    {blogs.map((blog, i) => (
                                        <div className="card card-compact w-96 bg-base-100 shadow-xl" key={i}>
                                            <figure>
                                                <img
                                                    src={blog.image_url}
                                                    alt={"okeok"}/>
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    {blog.title}
                                                </h2>
                                                <p>
                                                    {blog.content}
                                                </p>
                                                <div className="card-actions justify-end">
                                                    <button className="btn btn-warning" onClick={(e) => {
                                                        setFormState("edit")
                                                        setData({
                                                            title: blog.title,
                                                            content: blog.content
                                                        })
                                                        setSelectedId(blog.id)
                                                    }}>
                                                        Edit
                                                    </button>
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
