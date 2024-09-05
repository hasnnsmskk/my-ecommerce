import React from 'react'
import Header from '../components/HomePageCom/Header'
import TopBar from '../components/HomePageCom/TopBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CategorySection from '../components/HomePageCom/CategorySection'
import Carousel2 from '../components/HomePageCom/Carousel2'
import HorizontalCard from '../components/HomePageCom/HorizontalCard'
import FeaturedPosts from '../components/HomePageCom/FeaturedPosts'
import Footer from '../components/HomePageCom/Footer'
import Carousel1 from '../components/HomePageCom/Carousel1';
import CategoryList from '../components/HomePageCom/CategoryList';
function HomePage() {
    return (
        <div>
            <TopBar />
            <Header />
            <Carousel1 />
            <CategorySection />
            <CategoryList />
            <Carousel2 />
            <HorizontalCard />
            <FeaturedPosts />
            <Footer />
        </div>
    )
}

export default HomePage