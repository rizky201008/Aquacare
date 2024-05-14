import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


export default function Homepage(props) {
    const { blogs } = usePage().props;
    console.log(blogs);
    return (
        <div className=" min-h-screen  text-black text-2xl bg-white">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="m-auto max-w-6xl p-12">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                        <div className="md:text-5xl text-2xl uppercase font-black">
                            Awesome tool for your future team
                        </div>
                        <div className="text-xl mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </div>
                        <div className="my-5 h-16">
                            <div
                                className="shadow-md font-medium py-2 px-4 text-yellow-100
         cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48"
                            >
                                Join us now
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-end w-full md:w-1/2 -mt-5">
                        <div className="bg-dots">
                            <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                                <div className="text-2xl p-10 bg-white">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative pt-2 lg:pt-2 min-h-screen">
                <div className="bg-cover w-full flex justify-center items-center">
                    <div className="w-full bg-white p-5  bg-opacity-40 backdrop-filter backdrop-blur-lg">
                        <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                                {blogs.map((blog, i) => (
                                    <div key={i} className="card card-compact w-96 bg-white shadow-xl">
                                        <figure>
                                            <img
                                                // src={blog.image_url}
                                                // alt={blog.slug}

                                                src={`http://127.0.0.1:80001${blog.image_url}`}
                                            />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {blog.title}
                                            </h2>
                                            <p>{blog.content}</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">
                                                    Detail
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div> */}
            <>
                {/* component */}
                <footer className="relative bg-slate-200 pt-8 pb-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap text-left lg:text-left">
                            <div className="w-full lg:w-6/12 px-4">
                                <h4 className="text-3xl fonat-semibold text-blueGray-700">
                                    Let's keep in touch!
                                </h4>
                                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                    Find us on any of these platforms, we
                                    respond 1-2 business days.
                                </h5>
                                <div className="mt-6 lg:mb-0 mb-6">
                                    <FaTwitter />
                                    <FaFacebook />

                                    <FaGithubSquare />
                                </div>
                            </div>
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="flex flex-wrap items-top mb-6">
                                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                            Useful Links
                                        </span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://www.creative-tim.com/presentation?ref=njs-profile"
                                                >
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://blog.creative-tim.com?ref=njs-profile"
                                                >
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://www.github.com/creativetimofficial?ref=njs-profile"
                                                >
                                                    Github
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                                                >
                                                    Free Products
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4">
                                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                            Other Resources
                                        </span>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                                >
                                                    MIT License
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/terms?ref=njs-profile"
                                                >
                                                    Terms &amp; Conditions
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/privacy?ref=njs-profile"
                                                >
                                                    Privacy Policy
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/contact-us?ref=njs-profile"
                                                >
                                                    Contact Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-blueGray-300" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                <div className="text-sm text-blueGray-500 font-semibold py-1">
                                    Copyright ©{" "}
                                    <span id="get-current-year">2024</span>
                                    <a
                                        href="https://www.creative-tim.com?ref=njs-profile"
                                        className="text-blueGray-500 hover:text-blueGray-800"
                                    >
                                        <span></span> Aquacare
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        </div>
    );
}
