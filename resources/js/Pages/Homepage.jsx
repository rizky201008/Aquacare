import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import BlogItem from "@/Components/BlogItem.jsx";

const Homepage = () => {
    const { blogs } = usePage().props;

    const menus = [
        { name: "Home", link: "#home" },
        { name: "Fitur", link: "#features" },
        { name: "Blogs", link: "#blogs" },
        { name: "Login", link: route("login") },
        { name: "Register", link: route("register") },
    ];
    return (
        <div>
            {/* Header */}
            <header className="bg-blue-900 text-white p-4 navbar">
                <div className="container mx-auto flex justify-between items-center">
                    <a href={"/"} className="text-2xl font-bold">
                        Aquacare
                    </a>
                    <nav>
                        <ul className="flex space-x-4 menu menu-horizontal">
                            {menus.map((menu, index) => (
                                <li key={index}>
                                    <a
                                        href={menu.link}
                                        className="hover:underline"
                                    >
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="bg-cover bg-center h-screen"
                style={{
                    backgroundImage:
                        "url(https://dindik.jatimprov.go.id/assets/images/bg/bg_main2.jpg)",
                }}
            >
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Welcome to Aquacare
                        </h1>
                        <p className="mt-4 text-xl">
                            Providing quality water services to the city of
                            Surabaya
                        </p>
                        <button className="mt-8 btn btn-primary">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-16 px-3 bg-gray-100 text-black"
            >
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center">
                        Fitur Utama
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white hover:bg-sky-400 cursor-default shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold">
                                Laporan Kualitas Air
                            </h3>
                            <p className="mt-2">
                                Laporkan kualitas air di lokasi anda dan
                                dapatkan bantuan dari petugas
                            </p>
                        </div>
                        <div className="p-6 bg-white hover:bg-sky-400 cursor-default shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold">24/7 Support</h3>
                            <p className="mt-2">
                                Admin dan petugas sedia setiap saat memberikan
                                bantuan 24 jam /7 hari
                            </p>
                        </div>
                        <div className="p-6 bg-white hover:bg-sky-400 cursor-default shadow-lg rounded-lg">
                            <h3 className="text-xl font-bold">
                                Lihat Artikel Air
                            </h3>
                            <p className="mt-2">
                                Kami menyajikan artikel tentang kebersihan air
                                dan informasi menarik lainnya
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Section */}
            <section id="blogs" className="py-16 px-3 bg-blue-900">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white">
                        Daftar Artikel
                    </h2>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
                        {blogs.map((blog, index) => (
                            <div key={index}>
                                <BlogItem
                                    blogItem={blog}
                                    buttons={
                                        <button className="btn btn-primary">
                                            Detail
                                        </button>
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Aquacare. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
