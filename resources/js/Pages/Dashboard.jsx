import AdminLayout from "@/Layouts/AdminLayout";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from "@inertiajs/react";
import "../../css/sb-admin-2.css";

export default function Dashboard({ auth }) {
    const { userCount } = usePage().props;
    let roleContent = null;
    

    switch (auth.user.roles.name) {
        case "user":
            roleContent = (
                <div>
                    <h2>Welcome, Role User!</h2>
                    {/* Tambahkan konten khusus untuk role A di sini */}
                    
                </div>
            );
            break;
        case "admin":
            roleContent = (
                <div>
                    <h2>Welcome, Role Admin!</h2>
                    {/* Tambahkan konten khusus untuk role B di sini */}
                    <div>
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <div className="absolute rounded-md bg-red-600 p-3">
                                        <svg
                                            className="h-6 w-6 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 truncate text-sm font-medium text-gray-300">
                                        Total User
                                    </p>
                                </dt>
                                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray-100">
                                         {userCount}
                                    </p>
                                   
                                    <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                        <div className="text-sm">
                                            <a
                                                href="/user"
                                                className="font-medium text-orange-400 hover:text-red-500"
                                            >
                                                View all
                                                <span className="sr-only">
                                                    {" "}
                                                    Total Subscribers stats
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                            <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <div className="absolute rounded-md bg-orange-500 p-3">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 truncate text-sm font-medium text-gray-300">
                                        Total Laporan
                                    </p>
                                </dt>
                                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray-100">
                                        58.16%
                                    </p>
                                    <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            {" "}
                                            Increased by{" "}
                                        </span>
                                        5.4%
                                    </p>
                                    <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                        <div className="text-sm">
                                            <a
                                                href="#"
                                                className="font-medium text-yellow-600 hover:text-orange-500"
                                            >
                                                View all
                                                <span className="sr-only">
                                                    {" "}
                                                    Avg. Open Rate stats
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                            <div className="relative overflow-hidden rounded-lg bg-gray-600 px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6">
                                <dt>
                                    <div className="absolute rounded-md bg-blue-500 p-3">
                                        <svg
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ml-16 truncate text-sm font-medium text-gray-300">
                                        Avg. Click Rate
                                    </p>
                                </dt>
                                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray-100">
                                        24.57%
                                    </p>
                                    <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="sr-only">
                                            {" "}
                                            Decreased by{" "}
                                        </span>
                                        3.2%
                                    </p>
                                    <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                        <div className="text-sm">
                                            <a
                                                href="#"
                                                className="font-medium text-cyan-600 hover:text-green-500"
                                            >
                                                View all
                                                <span className="sr-only">
                                                    {" "}
                                                    Avg. Click Rate stats
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="shadow-lg rounded-lg overflow-hidden">
                        <div className="py-3 px-5 bg-gray-50">Bar chart</div>
                        <canvas className="p-10" id="chartBar" />
                    </div>
                    <section className="py-1 bg-blueGray-50">
                        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                                <div className="rounded-t mb-0 px-4 py-3 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                            <h3 className="font-semibold text-base text-blueGray-700">
                                                Page Visits
                                            </h3>
                                        </div>
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                See all
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center bg-transparent w-full border-collapse ">
                                        <thead>
                                            <tr>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Page name
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Visitors
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Unique users
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Bounce rate
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                                    /argon/
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                                    4,569
                                                </td>
                                                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    340
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                                                    46,53%
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                    /argon/index.html
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    3,985
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    319
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-down text-orange-500 mr-4" />
                                                    46,53%
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                    /argon/charts.html
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    3,513
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    294
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-down text-orange-500 mr-4" />
                                                    36,49%
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                    /argon/tables.html
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    2,050
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    147
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-up text-emerald-500 mr-4" />
                                                    50,87%
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                                    /argon/profile.html
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    1,795
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    190
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <i className="fas fa-arrow-down text-red-500 mr-4" />
                                                    46,53%
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
            break;
        case "petugas":
            roleContent = (
                <div>
                    <h2>Welcome, Role Petugas!</h2>
                    {/* Tambahkan konten khusus untuk role C di sini */}
                </div>
            );
            break;
        default:
            roleContent = (
                <div>
                    <h2>Unauthorized Access</h2>
                    <p>You don't have permission to access this page.</p>
                </div>
            );
    }
    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-500 leading-tight"></h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {roleContent}
                </div>
            </div>
        </AdminLayout>
    );
}
