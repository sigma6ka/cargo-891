import React from "react";
import MainBlock from "../components/main/main-block/MainBlock";
import ProductCateg from "./../components/main/product-categories/ProductCateg";
import TypeDelivery from "./../components/main/type-delivery/TypeDelivery";
import ProcessWork from "./../components/main/procces-work/ProcessWork";
import Advantages from "./../components/main/advantages/Advantages";
import AboutUs from "./../components/main/about-us/AboutUs";
import ReviewsSlider from "./../components/main/reviews/ReviewsSlider";
import FeedBack from "./../components/main/feedback/FeedBack";
import Faq from "../components/main/faq/Faq";

function MainPage() {
    return (
        <main className="page">
            <MainBlock/>
            <ProductCateg/>
            <TypeDelivery/>
            <ProcessWork/>
            <Advantages/>
            <AboutUs/>
            <Faq/>
            <ReviewsSlider/>
            <FeedBack/>
        </main>
    )
}

export default MainPage;