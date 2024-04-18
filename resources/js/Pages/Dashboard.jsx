import AdminLayout from "@/Layouts/AdminLayout";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head} from "@inertiajs/react";
import "../../css/sb-admin-2.css";

export default function Dashboard({auth}) {
    let roleContent = null;

    switch (auth.user.roles.name) {
        case 'user':
            roleContent = (
                <div>
                    <h2>Welcome, Role User!</h2>
                    {/* Tambahkan konten khusus untuk role A di sini */}
                </div>
            );
            break;
        case 'admin':
            roleContent = (
                <div>
                    <h2>Welcome, Role Admin!</h2>
                    {/* Tambahkan konten khusus untuk role B di sini */}
                </div>
            );
            break;
        case 'petugas':
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
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {roleContent}
                </div>
            </div>
        </AdminLayout>
    );
}
