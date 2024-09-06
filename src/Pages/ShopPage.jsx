import React from 'react'
import TopBar from '../components/ShopPageCom/TopBar'
import Items from '../components/ShopPageCom/Items'
import CategoryList from '../components/ShopPageCom/CategoryList'
import MobileClient from '../components/ShopPageCom/MobileClient'
import Footer from '../components/ShopPageCom/Footer'

function ShopPage() {
    return (
        <div>
            <TopBar />
            <Items />
            <CategoryList />
            <MobileClient />
            <Footer />
        </div>
    )
}

export default ShopPage