
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Products from './components/Products'
import StatusSection from './components/StatusSection'
import Steps from './components/Steps'


const getProducts = async() => {
  const res = await fetch('/product.json')
  return res.json()
}

// function er bahire nicher ta likhle suspense use kora lage na
const productPromise = getProducts()

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <StatusSection></StatusSection>
    <Products productPromise={productPromise} ></Products>
    <Steps></Steps>
    
    
    </>
  )
}

export default App
