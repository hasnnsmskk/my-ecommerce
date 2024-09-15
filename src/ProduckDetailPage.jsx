import React from 'react'
import TopBar from './components/ShopPageCom/TopBar'
import CategoryList from './components/ProductPage/CategoryList'
import MobileClient from './components/ShopPageCom/MobileClient'
import Footer from './components/ShopPageCom/Footer'
import ProductDetail from './components/ProductPage/ProductDetail'
import Detail from './components/ProductPage/Detail'

function ProduckDetailPage() {
    return (
        <div>
            <TopBar />
            <ProductDetail />
            <Detail />
            <CategoryList />
            <MobileClient />
            <Footer />
        </div>
    )
}

export default ProduckDetailPage