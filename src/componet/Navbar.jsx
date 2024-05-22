import React from "react";
import { Link } from "react-router-dom";


let Navbar = () => {


    return (

        <header class="navbar navbar-expand-lg">
            <div class="container">
                <a href="index.html" class="navbar-brand">
                    <h1 style={{color: "white"}}>Amazon</h1>
                </a>
                <button class="navbar-toggler navbar-toggler-icon" data-bs-toggle="collapse"
                    data-bs-target="#menu"></button>
                <nav class="collapse navbar-collapse justify-content-end" id="menu">
                    <ul class="navbar-nav col-12 col-lg-8 text-capitalize">
                        <Link to={"/"} class="nav-item"><a href="javascript:void(0);" class="nav-link pe-5 text-light">Home</a></Link>
                        <Link to={"/about"} class="nav-item"><a href="javascript:void(0);" class="nav-link pe-5 text-light">About</a></Link>
                        <Link to={"/product"} class="nav-item"><a href="javascript:void(0);" class="nav-link pe-5 text-light">Product</a></Link>
                    </ul>
                    <button class="btn-1 text-capitalize">contact us</button>
                </nav>
            </div>
        </header>
    )

}

export default Navbar;