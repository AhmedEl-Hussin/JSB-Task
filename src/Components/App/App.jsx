import { Component } from "react";
import Home from "../Home/Home.jsx";
import About from "../About/About.jsx";
import Services from "../Services/Services.jsx";
import Testymonials from "../Testymonials/Testymonials.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";


export default class App extends Component{


  state ={

  }

  render(){

    return(
      <>

        <Home/>
        <About/>
        <Services/>
        <Testymonials/>
        <Contact/>
        <Footer/>
      </>
    )
  }

}