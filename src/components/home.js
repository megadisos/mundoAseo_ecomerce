import React, {useState} from 'react'
import Header from './home/header'
import Menu from './home/menu'
import Slide from './home/slides'
import Category from './home/category'
import Brands from './home/brands'
import Featured from './home/featured'
import Bseller from './home/bseller'
import Footer from './home/footer'
function Home(props){
    return(
        <div>
            <div className="container-fluid">
            <Header />
        </div>
        <div className="container cat">
            <Menu />
        </div>
        <div className="container-fluid">
            <Slide />
        </div>
        <div className="container">
            <Category />
            <Brands/>
            <Featured />
            <Bseller />
        </div>
        <div className="container-fluid">
            <Footer />
        </div>
        </div>
    )
}
export default Home