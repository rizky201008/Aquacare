import AdminLayout from "@/Layouts/AdminLayout";
import React, { useState } from "react";

import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { Flowbite } from "flowbite-react";
import Popup from "reactjs-popup";

export default function Report({ auth }) {
    const role = auth.user.roles.name;
    const status = ['pending', 'approved', 'rejected', 'completed', 'onprogress']
    const { flash, errors, reports } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const { data, setData, reset, put } = useForm({
        rasa: "",
        suhu: "",
        kekentalan: "",
        detail: "",
        user_id: "",
        status: "",
    });
    let popup = null;
    let action = null;
    const storeReport = (e) => {
        e.preventDefault();
        router.post("/report", data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    //function "updateticket"
    const updateReport = async (e) => {
        e.preventDefault();

        put(route("/report"));
    };

    if (role == "user") {
        popup = (
            <Popup
                modal
                trigger={
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Create
                    </button>
                }
            >
                <form
                    className="p-4 md:p-5 bg-slate-400 "
                    onSubmit={storeReport}
                >
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Rasa
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("rasa", e.target.value)
                                }
                                value={data.rasa}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.rasa}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Suhu
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("suhu", e.target.value)
                                }
                                value={data.suhu}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.suhu}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Kekentalan
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("kekentalan", e.target.value)
                                }
                                value={data.kekentalan}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.kekentalan}
                            </p>
                        </div>
                        <div className="col-span-4">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Detail Air
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("detail", e.target.value)
                                }
                                value={data.detail}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.detail}
                            </p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Add New Report
                    </button>
                </form>
            </Popup>
        );
    }
    if (role == "admin") {
        action = (
            <Popup
                modal
                trigger={
                    <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                        Edit
                    </button>
                }
            >
                <form
                    className="p-4 md:p-5 bg-slate-400 "
                    onSubmit={updateReport}
                >
                    <details className="dropdown">
                        <summary className="m-1 btn grid gap-4 grid-cols-2">
                            Status
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 col-span-1">
                        {status.map((report, i) => {
                            return (
                                    <li key={i}>
                                        <a >{report}</a>
                                    </li>      
                            );
                        })}
                        </ul>
                    </details>
                    {/* <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Rasa
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("rasa", e.target.value)
                                }
                                value={data.rasa}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.rasa}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Suhu
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("suhu", e.target.value)
                                }
                                value={data.suhu}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.suhu}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Kekentalan
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("kekentalan", e.target.value)
                                }
                                value={data.kekentalan}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.kekentalan}
                            </p>
                        </div>
                        <div className="col-span-4">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Detail Air
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("detail", e.target.value)
                                }
                                value={data.detail}
                            />
                            <p className="text-red-500 text-sm mt-2">
                                {errors.detail}
                            </p>
                        </div>
                    </div> */}
                    <button
                        type="submit"
                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="me-1 -ms-1 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Update New Report
                    </button>
                </form>
            </Popup>
        );
    }
    return (
        <AdminLayout>
            <div className="rounded-t mb-0 px-4 py-3 border-0 mt-20">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-blueGray-700">
                            Daftar Laporan
                        </h3>
                        {flash.message && (
                            <div
                                className="flex items-center p-4 mb-4 text-sm text-midnight rounded-lg  dark:text-green-500"
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
                    </div>

                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        {popup}
                        {/* <button
                            onClick={openModal}
                            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                            Buka Modal
                        </button> */}
                    </div>
                </div>
            </div>
            <div></div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50 text-center">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Rasa
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Suhu
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Kekentalan
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Detail Air
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Action
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            />
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {reports.map((report, i) => {
                            return (
                                <tr className="hover:bg-gray-50">
                                    <td className="px-6 py-4">{report.rasa}</td>
                                    <td className="px-6 py-4">{report.suhu}</td>
                                    <td className="px-6 py-4">
                                        {report.kekentalan}
                                    </td>
                                    <td className="px-6 py-4">
                                        {report.detail}
                                    </td>
                                    <td className="px-6 py-4">
                                        {report.status}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-4">
                                            {/* <Link
                                                x-data="{ tooltip: 'Edite' }"
                                                href={`/report/${report.id}`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-6 w-6"
                                                    x-tooltip="tooltip"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                                    />
                                                </svg>
                                            </Link> */}
                                            {action}
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
