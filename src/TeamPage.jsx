import React from 'react'
import Header from './components/TeamPageCom/Header'
import Footer from './components/HomePageCom/Footer'
import Team from './components/TeamPageCom/Team'
import Hero from './components/TeamPageCom/Hero'
import Call from './components/TeamPageCom/Call'

function TeamPage() {
    return (
        <div>
            <Header />
            <Hero />
            <Team />
            <Call />
            <Footer />
        </div>
    )
}

export default TeamPage