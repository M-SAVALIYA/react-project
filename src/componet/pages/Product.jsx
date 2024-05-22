import React from "react";
import { Link } from "react-router-dom";
import { H1 } from "./atoms/Atom";

let product = () => {
    let products = [
        {
            id: 1,
            images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&s",
            productName: "samsung",
            price: 20,
            desc: "this is first product",
        },
        {
            id: 2,
            images: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
            productName: "Refrigerators",
            price: 10990,
            desc: "Haier 165L 1-Star Direct Cool Single Door Refrigerator (2024 Model, HED-171RS-P, Red Mono)",
        },
        {
            id: 3,
            images: "https://images-eu.ssl-images-amazon.com/images/I/61-zRoFrfqL._AC_UL675_SR675,480_.jpg",
            productName: "tata",
            price: 220,
            desc: "Tata Salt, 1kg",
        },
        {
            id: 4,
            images: "https://images-eu.ssl-images-amazon.com/images/I/71t9JRry+3L._AC_UL675_SR675,480_.jpg",
            productName: "Cetaphil",
            price: 343,
            desc: "Cetaphil Face Wash Gentle Skin Cleanser for Dry to Normal, Sensitive Skin, 125 ml Hydrating Face Wash with Niacinamide, Vitamin B5",
        },
        {
            id: 5,
            images: "https://m.media-amazon.com/images/I/51NSC2qvOxL._SY879_.jpg",
            productName: "Lymio Men Cargo",
            price: 649,
            desc: "Lymio Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men (Cargo-01-04)",
        },
        {
            id: 6,
            images: "https://images-eu.ssl-images-amazon.com/images/I/81dsWgzXLrL._AC_UL675_SR675,480_.jpg",
            productName: "SOFTSPUN",
            price: 269,
            desc: "SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thick Lint & Streak-Free Multipurpose Cloths - Automotive Microfibre Towels for Car Bike Cleaning Polishing Washing & Detailing.…",
        },
        {
            id: 7,
            images: "https://images-eu.ssl-images-amazon.com/images/I/712U09cEseL._AC_UL675_SR675,480_.jpg",
            productName: "Menstrual Cup",
            price: 265,
            desc: "Sirona Reusable Menstrual Cup for Women | Medium Size with Pouch | Ultra Soft, Odour & Rash Free|100% Medical Grade Silicone|No Leakage|Protection for Up to 8-10 Hours | US FDA Registered,Pack of 1",
        },
        {
            id: 8,
            images: "https://images-eu.ssl-images-amazon.com/images/I/61piNi70giL._AC_UL675_SR675,480_.jpg",
            productName: "Trolley Bags",
            price: 1799,
            desc: "Safari Polypropylene Pentagon Hardside Small Size Cabin Luggage Speed_Wheel 8 Wheel Suitcase Trolley Bags for Travel Black Color 55Cm",
        },
        {
            id: 9,
            images: "https://images-eu.ssl-images-amazon.com/images/I/51vkiaANfeL._AC_UL330_SR330,330_.jpg",
            productName: "Cover iPhone",
            price: 289,
            desc: "TheGiftKart Ultra-Hybrid Crystal Clear Back Cover Case for iPhone 15 Plus | Camera & Screen Protection Bumps | Shockproof Design | Hard Back Cover Case for iPhone 15 Plus (PC & TPU, Transparent))",
        },
        {
            id: 10,
            images: "https://images-eu.ssl-images-amazon.com/images/I/412p7g7An5L._AC_UL330_SR330,330_.jpg",
            productName: "Lymio Men Cargo",
            price: 99,
            desc: "BLAXSTOC Mini Type-C Fan & Portable Mini USB Dragon Fan with 2 Leaf Portable Cooling Fan Flexible Cooler Connect with Laptop, Smartphone, Powerbank, USB Adapter & Mobile with OTG-Multicolour",
        },
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
        {
            id: 16,
            images: "https://images-eu.ssl-images-amazon.com/images/I/61zroMjd9FL._AC_UL330_SR330,330_.jpg",
            productName: "STRIFF Mpad Mouse Mat",
            price: 99,
            desc: "STRIFF Mpad Mouse Mat 230X190X3mm Gaming Mouse Pad, Non-Slip Rubber Base, Waterproof Surface, Premium-Textured, Compatible with Laser and Optical Mice(Universe Black)",
        },
        {
            id: 17,
            images: "https://images-eu.ssl-images-amazon.com/images/I/619iLvdciLL._AC_UL675_SR675,480_.jpg",
            productName: "DOCTOR EXTRA SOFT ",
            price: 899,
            desc: "DOCTOR EXTRA SOFT Men's Classic Casual Sports Clogs/Sandals with Adjustable Back Strap for Adult | Comfortable & Lightweight| Stylish & Anti-Skid| Waterproof & Everyday Use Mules for Gents/Boys D-513",
        },
        {
            id: 18,
            images: "https://images-eu.ssl-images-amazon.com/images/I/61okssN3Y6L._AC_UL675_SR675,480_.jpg",
            productName: "Rellon Industries Study Table",
            price: 599,
            desc: "Rellon Industries Study Table for Students Bed Table for Study Foldable Laptop Table Portable & Lightweight Mini Table Bed Reading Table,Laptop Stands, Laptop Desk (A1)",
        },
        {
            id: 19,
            images: "https://images-eu.ssl-images-amazon.com/images/I/414FMWNS6jL._AC_UL675_SR675,480_.jpg",
            productName: "USB C to Lightning Cable",
            price: 698,
            desc: "USB C to Lightning Cable 1M [Apple MFi Certified] iPhone Fast Charger Cable USB-C Power Delivery Charging Cord for iPhone 14/13/12/12 PRO Max/12 Mini/11/11PRO/XS/Max/XR/X/8/8Plus/iPad pack of 1",
        },
        {
            id: 20,
            images: "https://images-eu.ssl-images-amazon.com/images/I/51mTLlbYa0L._AC_UL675_SR675,480_.jpg",
            productName: "Drone",
            price: 2399,
            desc: "Heattack-Foldable-Drone-With-Camera-For-Adults-1080P-HD-Drones-Toys-Auto-Return-One-Touch-Take-off-and-Landing (PO12)",
        },
        {
            id: 21,
            images: "https://images-eu.ssl-images-amazon.com/images/I/61VI+sDx5KL._AC_UL330_SR330,330_.jpg",
            productName: "LAPSTER",
            price: 99,
            desc: "LS LAPSTER Quality Assured Universal Silicone 15.6 Keyboard Protector Skin|| Keyboard Dust Cover|| Keyboard Skin for 15.6 Keyguard| (3.93 x 11.81 x 0.39 inches)",
        },
        {
            id: 22,
            images: "https://m.media-amazon.com/images/I/61lHUazMTMS._AC_SY350_.jpg",
            productName: "Mouse",
            price: 1999,
            desc: "Perixx [Hardware Update] Perixx PERIMICE-713N, Wireless Ergonomic Vertical Mouse -Nano Receiver -1000/1500/2000 DPI -On/Off Power Switch - Natural Ergonomic Vertical Design - Recommended with RSI User",
        },
        {
            id: 23,
            images: "https://m.media-amazon.com/images/I/61d3Ec9Vo9L._AC_SY175_.jpg",
            productName: "Dzazner HD Printe",
            price: 259,
            desc: "Dzazner HD Printed Vinyl No Bubble Full Panel Laptop Skin Upto 15.6 inches for Hare Krishna Sky Blue",
        },
        {
            id: 24,
            images: "https://m.media-amazon.com/images/I/71dDugyst9L._AC_SY200_.jpg",
            productName: "Wall Clock ",
            price: 649,
            desc: "Ingo creation Round Shape Acrylic Sleek Numeric Silent and Sweep Wall Clock for Living Room Home Bedroom & Office Wall Decoration (Transparent, 12 Inch) Analog",
        },
        {
            id: 25,
            images: "https://m.media-amazon.com/images/I/51YQcpqaqFL._AC_UY327_FMwebp_QL65_.jpg",
            productName: "AC",
            price: 31990,
            desc: "Voltas 1.5 ton 3 Star, Inverter Split AC (Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2024 Model, 183V Vectra CAW, White)",
        },



    ];

    return (
        <div className="row">
            {products.map((val, index) => {
                return (
                    <>
                        <div class="col-md-4 col-sm-6">
                            <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                                <div class="inner">
                                </div></a>
                                <div class="card-body text-center">
                                    <img src={val.images} alt="" style={{ width: " 18rem", height: "18rem", marginTop: "5px" }} />
                                    <h4 style={{ padding: "10px" }}>{val.price}</h4>
                                    {/* <h4 class="card-title">{val.productName}</h4> */}
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
export default product;