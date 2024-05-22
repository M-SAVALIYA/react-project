import React from "react";
import { Link } from "react-router-dom";
import { H1 } from "./atoms/Atom";
// import { Link } from "react-router-dom";

let Home = () => {

    let product = [
        {
            id: 11,
            images: "https://m.media-amazon.com/images/I/51oTh6-K8KL._AC_UL480_FMwebp_QL65_.jpg",
            productName: "T-Shirts",
            price: 299,
            desc: "Oversized Baggy Fit Drop Shoulder Half Sleeves Round Neck Solid Pure",
        },
        {
            id: 12,
            images: "https://images-eu.ssl-images-amazon.com/images/I/51UhwaQXCpL._AC_UL675_SR675,480_.jpg",
            productName: "Oneplus Bullets Z2 Bluetooth",
            price: 1799,
            desc: "Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life, IP55 Dust and Water Resistant (Magico Black)",
        },
        {
            id: 13,
            images: "https://images-eu.ssl-images-amazon.com/images/I/819DWQLgjKL._AC_UL675_SR675,480_.jpg",
            productName: "Fire-Boltt Phoenix Ultra Luxury",
            price: 1749,
            desc: "Fire-Boltt Phoenix Ultra Luxury Stainless Steel, Bluetooth Calling Smartwatch, AI Voice Assistant, Metal Body with 120+ Sports Modes, SpO2, Heart Rate Monitoring (Gold)",
        },
        {
            id: 14,
            images: "https://images-eu.ssl-images-amazon.com/images/I/71nMx5PxibL._AC_UL675_SR675,480_.jpg",
            productName: "realme NARZO 70x 5G",
            price: 11999,
            desc: "realme NARZO 70x 5G (Ice Blue,4GB RAM, 128GB Storage| 120Hz Ultra Smooth Display | Dimensity 6100+ 6nm 5G | 50MP AI Camera | 45W Charger in The Box",
        },
        {
            id: 15,
            images: "https://images-eu.ssl-images-amazon.com/images/I/61vtLhO6fDL._AC_UL330_SR330,330_.jpg",
            productName: "Apple 20W USB-C Power Adapter ",
            price: 1699,
            desc: "Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
        },
    ]


    return (
        <div className="row">
            {product.map((val, index) => {
                return (
                    <>
                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                <div class="inner">
                                </div></a>
                                <div class="card-body text-center">
                                    <img src={val.images} alt="" style={{ width: " 18rem", height: "18rem", marginTop: "5px" }} />
                                    <h4 style={{ padding: "10px" }}>{val.price}</h4>
                                    <H1 content={val.productName}/>
                                    <Link class="text-muted" to={`/${val.id}`}><a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">View Products</a></Link>
                                </div>
                            </div>
                        </div>

                    </>
                );
            })}
        </div>
    );




}

export default Home;