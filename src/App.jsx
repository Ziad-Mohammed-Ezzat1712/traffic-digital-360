
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import WhoAreWe from './Components/WhoAreWe/WhoAreWe'
import Layout from './Components/Layout/Layout'
import ContactUs from './Components/ContactUs/ContactUs'
import ServicesSection from './Components/ServicesSection/ServicesSection'
import { LanguageProvider } from './Context/LanguageContext'
// import Portfolio from './Components/Portfolio/Portfolio'






let x = createBrowserRouter([
  {path : "" , element : <Layout/> , children:[

    {index: true , element : <Home />},
  {path : "about" , element : <WhoAreWe />},
  {path : "conectus" , element : <ContactUs />},
  {path : "services" , element : <ServicesSection />},
  // {path : "portfolio" , element : <Portfolio />},


  ]    },
  
])

function App() {
 

  return <>
  <LanguageProvider>
   <RouterProvider router={x}></RouterProvider>
   </LanguageProvider>
  </>
}

export default App