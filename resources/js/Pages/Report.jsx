import AdminLayout from "@/Layouts/AdminLayout";
import React, {useState} from "react";

import {Head, Link, router, useForm, usePage} from "@inertiajs/react";
import {Flowbite} from "flowbite-react";
import Popup from "reactjs-popup";

export default function Report({auth}) {
    const role = auth.user.roles.name;
    const status = ['pending', 'approved', 'rejected', 'completed', 'onprogress']
    const {flash, errors, reports} = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Pilih Status");
    const {data, setData, reset, put} = useForm({
        rasa: "",
        suhu: "",
        kekentalan: "",
        detail: "",
        user_id: "",
        status: ""
    });

    let popup = null;
    const storeReport = (e) => {
        e.preventDefault();
        router.post("/report", data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const updateStatus = (status) => {
        setSelectedStatus(status);
    }
    const updateReport = async (e, id) => {
        e.preventDefault();
        console.log(id)
        router.put(`/report/${id}`, data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    if (role === "user") {
        popup = (
            <Popup
                modal
                trigger={
                    <button
                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ms-10 ease-linear transition-all duration-150">
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
    return (
        <AdminLayout>
             <aside
                    id="logo-sidebar"
                    className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full  border-r border-blue-600 sm:translate-x-0 bg-blue-600"
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 pb-4 overflow-y-auto">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a
                                    href="/dashboard"
                                    className="flex items-center p-2 text-bermuda rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path
                                            d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                        <path
                                            d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                    </svg>
                                    <span className="ms-3">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/report"
                                    className="flex items-center p-2 text-bermuda rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Laporan
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/feedback"
                                    className="flex items-center p-2 text-bermuda rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                    >
                                        <path
                                            d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                            Feedback
                                        </span>
                                </a>
                            </li>


                            <li>
                                <a
                                    href="/user"
                                    className="flex items-center p-2 text-bermuda rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 18"
                                    >
                                        <path
                                            d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Users
                                    </span>
                                </a>
                            </li>

                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="flex items-center p-2 text-bermuda rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 18 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                        />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Log Out
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
             </aside>
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
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
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
                        />
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {reports.map((report, i) => {
                        return (
                            <tr className="hover:bg-gray-50" key={i}>
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
                                        {role === "admin" && (
                                            <Popup
                                                modal
                                                trigger={
                                                    <button
                                                        className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                                                        Edit
                                                    </button>
                                                }
                                            >
                                                <form
                                                    className="p-4 md:p-5 bg-slate-400 "
                                                    onSubmit={(e) => updateReport(e, report.id)}
                                                >
                                                    <select onChange={
                                                        (e) => {
                                                            updateStatus(e.target.value)
                                                            setData("status", e.target.value)
                                                        }
                                                    } className="select w-full max-w-xs">
                                                        <option>{selectedStatus}</option>
                                                        {status && status.map((status, i) => {
                                                            return (
                                                                <option key={i}>{status}</option>
                                                            )
                                                        })}
                                                    </select>

                                                    <button className="btn w-full" type={"submit"}>Button</button>
                                                </form>
                                            </Popup>
                                        )}
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
