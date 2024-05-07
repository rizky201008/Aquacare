import AdminLayout from "@/Layouts/AdminLayout";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from "@inertiajs/react";
import "../../css/sb-admin-2.css";

export default function Dashboard({ auth }) {
    const { userCount } = usePage().props;
    

    
    return (
        <AdminLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-500 leading-tight"></h2>
            }
        >
            <Head title="Dashboard"/>

            
        </AdminLayout>
    );
}
