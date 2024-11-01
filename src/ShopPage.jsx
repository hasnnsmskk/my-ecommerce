import React from 'react'
import Header from './components/HomePageCom/Header'
import Items from './components/ShopPageCom/Items'
import CategoryList from './components/ShopPageCom/CategoryList'
import MobileClient from './components/ShopPageCom/MobileClient'
import Footer from './components/ShopPageCom/Footer'

function ShopPage() {
    return (
        <div>
            <Header />
            <Items />
            <CategoryList />
            <MobileClient />
            <Footer />
        </div>
    )
}

export default ShopPage