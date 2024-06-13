import { Link, usePage } from "@inertiajs/react";
import React from "react";
import Dropdown from "@/Components/Dropdown";


const AdminLayout = ({ children, header }) => {
    const { component } = usePage();
    const { auth } = usePage().props;
    let sidebarItems = null;
    switch (auth.user.roles.name) {
        case "user":
            sidebarItems = (
                <aside
                    id="logo-sidebar"
                    className="fixed top-0 left-0 z-40 w-64 h-screen pt-4 transition-transform -translate-x-full  border-r border-blue-600 sm:translate-x-0 bg-blue-600"
                    aria-label="Sidebar"
                >
                    <div className="h-min-screen px-3 pb-4 overflow-y-auto">
                        <h1 className="mx-3 mb-4 text-white font-bold text-4xl ">
                            Aquacare
                        </h1>

                        <ul className="space-y-2 font-medium">
                            <li>
                                <a
                                    href="/dashboard"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ms-3 text-slate-100 hover:text-gray-900">
                                        Dashboard
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/report"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Laporan
                                    </span>
                                </a>
                            </li>

                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
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
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Log Out
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            );
            break;
        case "admin":
            sidebarItems = (
                <aside
                    id="logo-sidebar"
                    className="fixed top-0 left-0 z-40 w-64 h-screen pt-4 transition-transform -translate-x-full  border-r border-blue-600 sm:translate-x-0 bg-blue-600"
                    aria-label="Sidebar"
                >
                    <div className="h-min-screen">
                        <h1 className="mx-3 mb-4 text-white text-4xl font-bold">
                            Aquacare
                        </h1>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a
                                    href="/dashboard"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100   group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ms-3 text-slate-100 hover:text-gray-900">
                                        Dashboard
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/report"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Laporan
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Artikel
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/user"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 18"
                                    >
                                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Users
                                    </span>
                                </a>
                            </li>

                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
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
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Log Out
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            );
            break;
        case "petugas":
            sidebarItems = (
                <aside
                    id="logo-sidebar"
                    className="fixed top-0 left-0 z-40 w-64 h-screen pt-4 transition-transform -translate-x-full  border-r border-blue-600 sm:translate-x-0 bg-blue-600"
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 pb-4 overflow-y-auto">
                        <h1 className="mx-3 mb-4 text-white font-bold text-4xl ">
                            Aquacare
                        </h1>

                        <ul className="space-y-2 font-medium">
                            <li>
                                <a
                                    href="/dashboard"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ms-3 text-slate-100 hover:text-gray-900">
                                        Dashboard
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/report"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 18"
                                    >
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Laporan
                                    </span>
                                </a>
                            </li>

                            <li>
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="flex items-center p-2 text-bermuda rounded-lg :text-white hover:bg-gray-100 :hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-slate-100 transition duration-75 :text-gray-400 group-hover:text-gray-900 :group-hover:text-white"
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
                                    <span className="flex-1 ms-3 whitespace-nowrap text-slate-100 hover:text-gray-900">
                                        Log Out
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
            );
            break;
        default:
            sidebarItems = (
                <div>
                    <h2>Unauthorized Access</h2>
                    <p>You don't have permission to access this page.</p>
                </div>
            );
    }
    return (
        <>
            <div className="min-h-screen bg-gray-300">
                <nav className=" border-gray-200  :border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <div className="navbar-start">
                                    <div className="dropdown">
                                        <div
                                            tabIndex={0}
                                            role="button"
                                            className="btn btn-ghost btn-circle"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h7"
                                                />
                                            </svg>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                        >
                                            <li>
                                                <a>Homepage</a>
                                            </li>
                                            <li>
                                                <a>Portfolio</a>
                                            </li>
                                            <li>
                                                <a>About</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <a
                                    href="/dashboard"
                                    className="flex ms-2 md:me-24"
                                >
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-950">
                                        Aquacare
                                    </span>
                                </a>
                            </div>
                            <div className="hidden sm:flex sm:items-center sm:ms-6">
                                <div className="ms-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md dropdown dropdown-end me-4">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700  hover:text-gray-900 focus:outline-none transition ease-in-out duration-150 me-2"
                                                >
                                                    <span className="px-2">
                                                        {auth.user.name}
                                                    </span>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <main className="">
                    <div className="sm:ml-64 text-black min-h-screen p-3" data-theme="light">{children}</div>
                </main>

                <div className="ml-64">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <aside>{sidebarItems}</aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
