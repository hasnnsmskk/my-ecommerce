import React from 'react';
import Header from './components/HomePageCom/Header'
import StatsSection from './components/AboutUsPageCom/StatsSection';
import VideoSection from './components/AboutUsPageCom/VideoSection';
import TeamSection from './components/AboutUsPageCom/TeamSection';
import CompaniesSection from './components/AboutUsPageCom/CompaniesSection';
import WorkWithUsSection from './components/AboutUsPageCom/WorkWithUsSection';
import Footer from './components/HomePageCom/Footer';

const AboutUsSection = () => {
    return (
        <div>
            <Header />
            <StatsSection />
            <VideoSection />
            <TeamSection />
            <CompaniesSection />
            <WorkWithUsSection />
            <Footer />
        </div>
    );
};

export default AboutUsSection;
