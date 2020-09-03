import React,{useState}from 'react';
import Sidebar from './componenets/Sidebar/sidebar'
import Header from './componenets/header'
import Discount from './componenets/discount'
import Slider from './componenets/slide_img/Slider'
import Banner from './componenets/banner/banner'
import Product from './componenets/product/productContainer'
import Product_hot from './componenets/product_hot';
import Slider_feedback from './componenets/slide_feedback/Slider'
import Footer from './componenets/footer/footerContainer'
import ButtonTop from './componenets/btnTop'


function App() {
  const [toggleSideBar, setToggleSidebar] = useState(false)
  return (
    <div className="App">
        <Sidebar onCloseSideBar={()=>setToggleSidebar(false)} ></Sidebar>
        <div className={`main ${toggleSideBar ? 'ToggleSidebar' :''}`}>
        <Header onOpenSideBar={()=>setToggleSidebar(true)}></Header>
        <Discount></Discount>
        <Slider></Slider>
        <Banner></Banner>
        <Product/>
        <Product_hot></Product_hot>
        <Slider_feedback></Slider_feedback>
        <Footer/>
        <ButtonTop/>
        </div> 
    </div>
  );
}

export default App;
