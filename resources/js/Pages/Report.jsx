import AdminLayout from "@/Layouts/AdminLayout";
import React, {useEffect, useState} from "react";

import {router, useForm, usePage} from "@inertiajs/react";
import Popup from "reactjs-popup";
import "leaflet/dist/leaflet.css";
import MapFunction from "@/functions/MapFunction";

export default function Report({auth}) {
    const role = auth.user.roles.name;
    const status = [
        "pending",
        "approved",
        "rejected",
        "completed",
        "onprogress",
    ];
    const {flash, errors, reports} = usePage().props;
    const [selectedStatus, setSelectedStatus] = useState("pending");
    const [lng, setLng] = useState(0.0);
    const [lat, setLat] = useState(0.0);
    const {data, setData, reset, put} = useForm({
        rasa: "Tawar",
        suhu: "Biasa",
        kekentalan: "Encer",
        bau: "Tidak Bau",
        warna: "Tidak Berwarna",
        keasaman: "Tidak Asam",
        detail: "",
        user_id: "",
        status: "",
    });

    const rasa = ["Tawar", "Asin", "Manis", "Pahit", "Asam"];
    const suhu = ["Dingin", "Biasa", "Hangat", "Panas"];
    const kekentalan = ["Encer", "Kental", "Sangat Kental"];
    const bau = ["Tidak Bau", "Sedikit Bau", "Sangat Bau"];
    const keasaman = ["Tidak Asam", "Sedikit Asam", "Sangat Asam"];
    const mapfunction = new MapFunction();

    let popup = null;

    const storeReport = (e) => {
        e.preventDefault();
        const newData = {...data, long: lng, lat: lat};
        router.post("/report", newData, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const updateReport = async (id) => {
        router.put(`/report/${id}`, {status: selectedStatus}, {
            onSuccess: () => {
                reset();
                setSelectedStatus("pending");
            },
        });
    };

    useEffect(() => {
        mapfunction.getLocationPermission().then((permissionGranted) => {
            if (permissionGranted) {
                mapfunction.getCurrentLngLat().then((lnglat) => {
                    setLng(lnglat.lng);
                    setLat(lnglat.lat);
                }).catch((error) => {
                    console.error("Error getting current location:", error);
                });
            }
        }).catch((error) => {
            console.error("Error getting location permission:", error);
        });
        ;
    }, []);

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
                    className="px-5 py-4 bg-slate-400 "
                    onSubmit={storeReport}
                >
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Rasa
                            </label>
                            <select
                                className="select select-bordered bg-none text-white w-full max-w-xs"
                                onSelect={(e) =>
                                    setData("rasa", e.target.value)
                                }
                            >
                                {rasa.map((rasa, index) => (
                                    <option key={index} value={rasa}>
                                        {rasa}
                                    </option>
                                ))}
                            </select>
                            <p className="text-red-500 text-sm mt-2">
                                {errors.rasa}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Suhu
                            </label>
                            <select
                                className="select select-bordered bg-none text-white w-full max-w-xs"
                                onSelect={(e) =>
                                    setData("suhu", e.target.value)
                                }
                            >
                                {suhu.map((suhu, index) => (
                                    <option key={index} value={suhu}>
                                        {suhu}
                                    </option>
                                ))}
                            </select>
                            <p className="text-red-500 text-sm mt-2">
                                {errors.suhu}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Kekentalan
                            </label>
                            <select
                                className="select select-bordered bg-none text-white w-full max-w-xs"
                                onSelect={(e) =>
                                    setData("kekentalan", e.target.value)
                                }
                            >
                                {kekentalan.map((kekentalan, index) => (
                                    <option key={index} value={kekentalan}>
                                        {kekentalan}
                                    </option>
                                ))}
                            </select>
                            <p className="text-red-500 text-sm mt-2">
                                {errors.kekentalan}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Warna
                            </label>
                            <select
                                className="select select-bordered bg-none text-white w-full max-w-xs"
                                onSelect={(e) =>
                                    setData("warna", e.target.value)
                                }
                            >
                                <option value="Tidak Berwarna">
                                    Tidak Berwarna
                                </option>
                                <option value="Sedikit Keruh">
                                    Sedikit Keruh
                                </option>
                                <option value="Sangat Keruh">
                                    Sangat Keruh
                                </option>
                            </select>
                            <p className="text-red-500 text-sm mt-2">
                                {errors.warna}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Bau
                            </label>
                            <select
                                className="select select-bordered bg-none text-white w-full max-w-xs"
                                onSelect={(e) => setData("bau", e.target.value)}
                            >
                                {bau.map((bau, index) => (
                                    <option key={index} value={bau}>
                                        {bau}
                                    </option>
                                ))}
                            </select>
                            <p className="text-red-500 text-sm mt-2">
                                {errors.bau}
                            </p>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Keasaman
                            </label>
                            <select
                                className="select select-bordered bg-none text-white w-full max-w-xs"
                                onSelect={(e) => {
                                    setData("keasaman", e.target.value);
                                }}
                            >
                                {keasaman.map((keasaman, index) => (
                                    <option key={index} value={keasaman}>
                                        {keasaman}
                                    </option>
                                ))}
                            </select>
                            <p className="text-red-500 text-sm mt-2">
                                {errors.keasaman}
                            </p>
                        </div>
                        <div className="col-span-4">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm  text-white"
                            >
                                Detail Air
                            </label>
                            <textarea
                                className="bg-sea border text-midnight border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 "
                                placeholder="enter ..."
                                onChange={(e) => {
                                    setData("detail", e.target.value);
                                }}
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
            <div className="rounded-t py-3 ">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-900">
                            Daftar Laporan
                        </h3>
                        {flash.message && (
                            <div role="alert" className="alert alert-success">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{flash.message}</span>
                            </div>
                        )}
                    </div>

                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        {popup}
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-primary text-white'>
                    <tr>
                        <th className="">No</th>
                        <th className="">Rasa</th>
                        <th className="">Suhu</th>
                        <th className="">Kekentalan</th>
                        <th className="">Warna</th>
                        <th className="">Bau</th>
                        <th className="">Keasaman</th>
                        <th className="">Detail Air</th>
                        <th className="">Status</th>
                        {role === "admin" && (
                            <th className="">Edit</th>
                        )}
                        <th className="">Detail</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.map((report, i) => {
                        return (
                            <tr
                                key={i}
                            >
                                <td className="">{i}</td>
                                <td className="">{report.rasa}</td>
                                <td className="">{report.suhu}</td>
                                <td className="">{report.kekentalan}</td>
                                <td className="">{report.warna}</td>
                                <td className="">{report.bau}</td>
                                <td className="">{report.keasaman}</td>
                                <td className="">{report.detail}</td>

                                <td className="badge  badge-outline my-16">
                                    {report.status}
                                </td>

                                {role === "admin" && (
                                    <td className="px-6 py-4">
                                        <button className="btn btn-warning"
                                                onClick={() => {
                                                    document.getElementById('update_modal_' + report.id).showModal()
                                                }}>Edit
                                            Status
                                        </button>
                                        <dialog id={'update_modal_' + report.id} className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button
                                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                                                    </button>
                                                </form>
                                                <h3 className="font-bold text-lg">Ubah Status Laporan</h3>
                                                <div className='w-full flex flex-wrap'>
                                                    <select className="select select-bordered w-full mb-3"
                                                            onChange={(e) => {
                                                                setSelectedStatus(e.target.value)
                                                            }} value={selectedStatus}>
                                                        {status && status.map((status, i) => (
                                                            <option key={i}>{status}</option>
                                                        ))}
                                                    </select>
                                                    <button className='btn btn-warning w-full'
                                                            onClick={() => {
                                                                document.getElementById('update_modal_' + report.id).close();
                                                                updateReport(report.id)
                                                            }}>Update
                                                    </button>
                                                </div>
                                            </div>
                                        </dialog>
                                    </td>
                                )}
                                <td>
                                    <button
                                        onClick={() =>
                                            router.get(
                                                "/report/" + report.id
                                            )
                                        }
                                        className="btn btn-secondary"
                                    >
                                        Lihat Detail
                                    </button>
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
