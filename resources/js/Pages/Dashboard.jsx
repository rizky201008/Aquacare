import AdminLayout from "@/Layouts/AdminLayout";
import { Head, usePage } from "@inertiajs/react";
import "../../css/sb-admin-2.css";
import MarkerKu from "../Components/MarkerKu.jsx";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Dashboard({ auth }) {
    const { reportsCount, approvedReportsCount, pendingReportsCount, reports } =
        usePage().props;
    let user = auth.user;
    let roleContent;

    switch (user.roles.name) {
        case "admin":
            roleContent = (
                <>
                    <div className="h-min-screen">
                        <div className="stats shadow w-full bg-white">
                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                                        <line
                                            x1="4"
                                            y1="22"
                                            x2="4"
                                            y2="15"
                                        ></line>
                                    </svg>
                                </div>
                                <div className="stat-title text-black">
                                    Total Laporan
                                </div>
                                <div className="stat-value text-secondary">
                                    {reportsCount}
                                </div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                </div>
                                <div className="stat-title text-black">
                                    Laporan Disetujui
                                </div>
                                <div className="stat-value text-primary">
                                    {approvedReportsCount}
                                </div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-secondary">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <div className="stat-title text-black">
                                    Laporan Pending
                                </div>
                                <div className="stat-value text-error">
                                    {pendingReportsCount}
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="py-1 bg-blueGray-50">
                        <div className="w-full mb-12 xl:mb-0 mx-auto mt-24">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                                <MapContainer
                                    center={[-6.17525, 106.82705]}
                                    zoom={4}
                                    scrollWheelZoom={true}
                                    style={{ height: "500px", width: "100%" }}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {reports.map((report) => (
                                        <MarkerKu
                                            key={report.id}
                                            position={{
                                                lat: report.lat,
                                                lng: report.long,
                                            }}
                                            popup={`#${report.id} by ${report.user.name}`}
                                        />
                                    ))}
                                </MapContainer>
                            </div>
                        </div>
                    </section>
                </>
            );
            break;

        case "petugas":
            roleContent = (
                <div >
                    <section
                        className="bg-cover bg-center py-32 w-full"
                        style={{
                            backgroundImage:
                                "url(https://cdn.pixabay.com/photo/2016/09/21/14/46/faucet-1684902_640.jpg)",
                        }}
                    >
                        <div className="container mx-auto text-left text-white">
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <h1 className="text-5xl  font-medium mb-6">
                                        Welcome {auth.user.name}
                                    </h1>
                                    <p className="text-xl mb-12">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nam viverra euismod
                                        odio, gravida pellentesque urna varius
                                        vitae.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-1">
                        <div className="w-full mb-12 xl:mb-0 mx-auto mt-24">
                            <div
                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                                <MapContainer
                                    center={[-6.17525, 106.82705]}
                                    zoom={4}
                                    scrollWheelZoom={true}
                                    style={{height: "500px", width: "100%"}}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    {reports.map((report) => (
                                        <MarkerKu
                                            key={report.id}
                                            position={{
                                                lat: report.lat,
                                                lng: report.long,
                                            }}
                                            popup={`#${report.id} by ${report.user.name}`}
                                        />
                                    ))}
                                </MapContainer>
                            </div>
                        </div>
                    </section>
                </div>
            );
            break;

        case "user":
            roleContent = (
                <div className="h-min-screen bg-gray-50 flex items-center">
                    <section
                        className="bg-cover bg-center py-32 w-full"
                        style={{
                            backgroundImage:
                                "url(https://cdn.pixabay.com/photo/2016/11/13/12/22/woman-1820868_640.jpg)",
                        }}
                    >
                        <div className="container mx-auto text-left text-white">
                            <div className="flex items-center">
                                <div className="w-1/2">
                                    <h1 className="text-5xl font-medium mb-6">
                                        Welcome {auth.user.name}
                                    </h1>
                                    <p className="text-xl mb-12">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nam viverra euismod
                                        odio, gravida pellentesque urna varius
                                        vitae.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
            break;
        default:
            roleContent = (
                <div>
                <h1>Dashboard</h1>
                </div>
            );
            break;
    }

    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div>{roleContent}</div>
        </AdminLayout>
    );
}
