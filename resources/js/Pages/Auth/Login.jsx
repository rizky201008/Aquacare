import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/login", { email, password });
    };

    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>SB Admin 2 - Login</title>
            {/* Custom fonts for this template*/}
            <link
                href="vendor/fontawesome-free/css/all.min.css"
                rel="stylesheet"
                type="text/css"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                rel="stylesheet"
            />
            {/* Custom styles for this template*/}
            <link href="css/sb-admin-2.min.css" rel="stylesheet" />
            <div className="container">
                {/* Outer Row */}
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* Nested Row within Card Body */}
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">
                                                    Welcome Back!
                                                </h1>
                                            </div>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input
                                                        id="exampleInputEmail"
                                                        placeholder="Enter Email Address..."
                                                        className="form-control form-control-user"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        aria-describedby="emailHelp"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        value={password}
                                             onChange={(e) =>
                                                 setPassword(e.target.value)
                                         }
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="customCheck"
                                                        />
                                                        <label
                                                            className="custom-control-label"
                                                            htmlFor="customCheck"
                                                        >
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                                <button
                                            type="submit"
                                            className="btn btn-primary btn-user btn-block"
                                        >
                                            Login
                                        </button>
                                                <hr />
                                                <a
                                                    href="index.html"
                                                    className="btn btn-google btn-user btn-block"
                                                >
                                                    <i className="fab fa-google fa-fw" />{" "}
                                                    Login with Google
                                                </a>
                                                <a
                                                    href="index.html"
                                                    className="btn btn-facebook btn-user btn-block"
                                                >
                                                    <i className="fab fa-facebook-f fa-fw" />{" "}
                                                    Login with Facebook
                                                </a>
                                            </form>
                                            <hr />
                                            <div className="text-center">
                                                <a
                                                    className="small"
                                                    href="forgot-password.html"
                                                >
                                                    Forgot Password?
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <a
                                                    className="small"
                                                    href="/register"
                                                >
                                                    Create an Account!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bootstrap core JavaScript*/}
            {/* Core plugin JavaScript*/}
            {/* Custom scripts for all pages*/}
        </>

        // <div className="container mt-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8">
        //             <div className="card">
        //                 <div className="card-header">Login</div>

        //                 <div className="card-body m-4">
        //                     <form onSubmit={handleSubmit}>

        //                         <div className="form-group row mb-4">
        //                             <label
        //                                 htmlFor="email"
        //                                 className="col-md-4 col-form-label text-md-right"
        //                             >
        //                                 E-Mail Address
        //                             </label>

        //                             <div className="col-md-6">
        //                             <input
        //                             className="form-control"
        //                             type="email"
        //                             value={email}
        //                             onChange={(e) => setEmail(e.target.value)}
        //                             required
        //                         />
        //                             </div>
        //                         </div>

        //                         <div className="form-group row mb-4">
        //                             <label
        //                                 htmlFor="password"
        //                                 className="col-md-4 col-form-label text-md-right"
        //                             >
        //                                 Password
        //                             </label>

        //                             <div className="col-md-6">
        //                                 <input
        //                                 className="form-control"
        //                                     type="password"
        //                                     value={password}
        //                                     onChange={(e) =>
        //                                         setPassword(e.target.value)
        //                                     }
        //                                     required
        //                                 />
        //                             </div>
        //                         </div>

        //                         <div className="form-group row mb-0">
        //                             <div className="col-md-8 offset-md-4">
        //                                 <button
        //                                     type="submit"
        //                                     className="btn btn-primary"
        //                                 >
        //                                     Login
        //                                 </button>

        //                                 <a
        //                                     className="btn btn-link"
        //                                     href="/password/reset"
        //                                 >
        //                                     Forgot Your Password?
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className="container">
        //     <h1>Login</h1>
        //     <form onSubmit={handleSubmit}>
        //         <div className="form-group row">
        //
        //         </div>
        //         <div className="form-group row">
        //         <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

        //         </div>

        //         <button type="submit">Login</button>
        //     </form>
        // </div>
    );
};

export default Login;
