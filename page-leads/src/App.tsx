import React from "react"
import Header from "./components/Header";
import Banner from "./components/Banner";
import Attractive from "./components/Attractive";
import About from "./components/Abouts";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/> 
     <Attractive/>
     <About/>
     <Services/>
    </div>
  )
}

export default App
