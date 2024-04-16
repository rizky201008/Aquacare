import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/register", {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
        });
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
            <title>SB Admin 2 - Register</title>
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
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">
                                            Create an Account!
                                        </h1>
                                    </div>
                                    <form
                                        className="user"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    className="form-control form-control-user"
                                                    id="exampleFirstName"
                                                    type="text"
                                                    placeholder="Name"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    required
                                                />
                                                
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    id="exampleLastName"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control form-control-user"
                                                id="exampleInputEmail"
                                                type="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                            />
                                            
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    type="password"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                                
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    className="form-control form-control-user"
                                                    id="exampleRepeatPassword"
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    value={passwordConfirmation}
                                                    onChange={(e) =>
                                                        setPasswordConfirmation(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <a
                                            href="dashboard"
                                            className="btn btn-primary btn-user btn-block"
                                        >
                                            Register Account
                                        </a>
                                        <hr />
                                        <a
                                            href="index.html"
                                            className="btn btn-google btn-user btn-block"
                                        >
                                            <i className="fab fa-google fa-fw" />{" "}
                                            Register with Google
                                        </a>
                                        <a
                                            href="index.html"
                                            className="btn btn-facebook btn-user btn-block"
                                        >
                                            <i className="fab fa-facebook-f fa-fw" />{" "}
                                            Register with Facebook
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
                                        <a className="small" href="dashboard">
                                            Already have an account? Login!
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
