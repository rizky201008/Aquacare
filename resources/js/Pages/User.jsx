import AdminLayout from "@/Layouts/AdminLayout";

import React from "react";

import { Head, Link, router, useForm, usePage } from "@inertiajs/react";

export default function User() {
    const { data, users } = usePage().props;

    return (
        <AdminLayout>
            <div className="text-center text-gray-900 text-2xl font-bold py-4 mt-8">
                Daftar Pengguna
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table className="w-full text-sm text-center rtl:text-right text-gray-900">
                    <thead className="text-xs text-midnight uppercase bg-slate-200 font-bold">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                NAME
                            </th>

                            <th scope="col" className=" py-3">
                                EMAIL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => {
                            return (
                                <tr key={i} className="bg-slate-200">
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {user.id}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {user.name}
                                    </th>
                                    <th
                                        scope="row"
                                        className=" py-4  text-midnight font-medium whitespace-nowrap dark:text-black"
                                    >
                                        {user.email}
                                    </th>
                                    
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}