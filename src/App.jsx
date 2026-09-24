
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Products from './components/Products'
import StatusSection from './components/StatusSection'
import Steps from './components/Steps'
import ViewPricing from './components/ViewPricing'



const getProducts = async () => {
  const res = await fetch('/product.json')
  return res.json()
}

// function er bahire nicher ta likhle suspense use kora lage na
const productPromise = getProducts()

function App() {

  const[isCart, setIsCart] = useState([])
    // console.log(isCart)





  return (
    <>
      <Navbar isCart={isCart} ></Navbar>
      <Banner></Banner>
      <StatusSection></StatusSection>
      <Products productPromise={productPromise} isCart={isCart} setIsCart={setIsCart} ></Products>

      <Steps></Steps>
      <Pricing></Pricing>
      <ViewPricing></ViewPricing>
      <Footer></Footer>
      


    </>
  )
}

export default App
