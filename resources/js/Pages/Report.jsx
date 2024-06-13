import AdminLayout from "@/Layouts/AdminLayout";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import Popup from "reactjs-popup";
import "leaflet/dist/leaflet.css";
import MapFunction from "@/functions/MapFunction";
import { FiAlertCircle } from "react-icons/fi";
export default function Report({ auth }) {
    const role = auth.user.roles.name;
    const status = [
        "pending",
        "approved",
        "rejected",
        "completed",
        "onprogress",
    ];
    const { flash, errors, reports } = usePage().props;
    const [selectedStatus, setSelectedStatus] = useState("pending");
    const [lng, setLng] = useState(0.0);
    const [lat, setLat] = useState(0.0);
    const { data, setData, reset, put } = useForm({
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
    let showPopup = false;

    const storeReport = (e) => {
        e.preventDefault();
        const newData = { ...data, long: lng, lat: lat };
        router.post("/report", newData, {
            onSuccess: () => {
                showPopup = false
                reset();
            },
        });
    };

    const updateReport = async (id) => {
        router.put(
            `/report/${id}`,
            { status: selectedStatus },
            {
                onSuccess: () => {
                    reset();
                    setSelectedStatus("pending");
                },
            }
        );
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
    }, []);

    if (role === "user") {
        popup = (
            <>
                <button className="btn btn-warning"
                        onClick={() => {
                            showPopup = true
                            document.getElementById('create_report_modal').showModal()
                        }}>Buat Laporan
                </button>
                <dialog id={'create_report_modal'} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg w-full text-center">Buat Laporan</h3>
                        <div className='w-full flex flex-wrap text-start'>
                            <form
                                className="py-4 w-full"
                                onSubmit={storeReport}
                            >
                                <div className="grid gap-2 mb-4 grid-cols-4">
                                    <div className="col-span-2 w-full">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm  text-black"
                                        >
                                            Rasa
                                        </label>
                                        <select
                                            className="select select-bordered bg-none text-black w-full max-w-xs"
                                            onSelect={(e) =>
                                                setData("rasa", e.target.value)
                                            }
                                            required={true}
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
                                    <div className="col-span-2 w-full">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm  text-black"
                                        >
                                            Suhu
                                        </label>
                                        <select
                                            className="select select-bordered bg-none text-black w-full max-w-xs"
                                            onSelect={(e) =>
                                                setData("suhu", e.target.value)
                                            }
                                            required={true}
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
                                    <div className="col-span-2 w-full">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm  text-black"
                                        >
                                            Kekentalan
                                        </label>
                                        <select
                                            className="select select-bordered bg-none text-black w-full max-w-xs"
                                            onSelect={(e) =>
                                                setData("kekentalan", e.target.value)
                                            }
                                            required={true}
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
                                    <div className="col-span-2 w-full">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm  text-black"
                                        >
                                            Warna
                                        </label>
                                        <select
                                            className="select select-bordered bg-none text-black w-full max-w-xs"
                                            onSelect={(e) =>
                                                setData("warna", e.target.value)
                                            }
                                            required={true}
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
                                    <div className="col-span-2 w-full">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm  text-black"
                                        >
                                            Bau
                                        </label>
                                        <select
                                            className="select select-bordered bg-none text-black w-full max-w-xs"
                                            onSelect={(e) => setData("bau", e.target.value)}
                                            required={true}
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
                                    <div className="col-span-2 w-full">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm  text-black"
                                        >
                                            Keasaman
                                        </label>
                                        <select
                                            className="select select-bordered bg-none text-black w-full max-w-xs"
                                            onSelect={(e) => {
                                                setData("keasaman", e.target.value);
                                            }}
                                            required={true}
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
                                            className="block mb-2 text-sm  text-black"
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
                                            required={true}
                                        />
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors.detail}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="text-black inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {
                                        if (!showPopup) {
                                            document.getElementById('create_report_modal').close()
                                        }
                                    }}
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
                        </div>
                    </div>
                </dialog>
            </>
        );
    }
    return (
        <AdminLayout>
            <Head>
                <title>Daftar Laporan</title>
            </Head>
            <div className="rounded-t py-3 ">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-base text-gray-900">
                            Daftar Laporan
                        </h3>
                        {flash.message && (
                            <div
                                className="flex items-center p-2 text-sm text-midnight rounded-lg  text-green-500"
                                role="alert"
                            >
                                <svg
                                    className="flex-shrink-0 inline w-4 h-4 me-2"
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
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-primary text-black'>
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
                                <tr key={i}>
                                    <td className="">{i}</td>
                                    <td className="">{report.rasa}</td>
                                    <td className="">{report.suhu}</td>
                                    <td className="">{report.kekentalan}</td>
                                    <td className="">{report.warna}</td>
                                    <td className="">{report.bau}</td>
                                    <td className="">{report.keasaman}</td>
                                    <td className="">{report.detail}</td>

                                    <td className="badge  badge-outline my-6">
                                        {report.status}
                                    </td>

                                    {role === "admin" && (
                                        <td className="px-6 py-4">
                                            <button
                                                className="btn bg-yellow-500"
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
                                                    <select className="select select-bordered text-black w-full mb-3"
                                                            onChange={(e) => {
                                                                setSelectedStatus(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                            value={
                                                                selectedStatus
                                                            }
                                                        >
                                                            {status &&
                                                                status.map(
                                                                    (
                                                                        status,
                                                                        i
                                                                    ) => (
                                                                        <option
                                                                            key={
                                                                                i
                                                                            }
                                                                        >
                                                                            {
                                                                                status
                                                                            }
                                                                        </option>
                                                                    )
                                                                )}
                                                        </select>
                                                        <button
                                                            className="btn btn-warning w-full"
                                                            onClick={() => {
                                                                document
                                                                    .getElementById(
                                                                        "update_modal_" +
                                                                            report.id
                                                                    )
                                                                    .close();
                                                                updateReport(
                                                                    report.id
                                                                );
                                                            }}
                                                        >
                                                            Update
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
                                            className="btn bg-blue-300"
                                        >
                                            <FiAlertCircle size={20} />
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
