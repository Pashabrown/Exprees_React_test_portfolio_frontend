import "./App.css";

// components
import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"


import Footer from "./components/Footer"

// pages
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import About from "./pages/About"


function App() {

  const URL = "https://portfolio-test-albert-brown.herokuapp.com/";

  return (
    
    <div className="App">
        <div style={{ 
      backgroundImage: `url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-pd-sasi-03.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=cec9b4798fd70605e2a95fa61259c5db")` 
    }}>
      
      <div>

       <div>
         
         <h1><b>Albert Brown</b></h1>
       
      <h2><i>Jr. Software Engineer</i></h2>
     
      
      <Header/>
        
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Switch>
      </div>
         </div> 
      
    <Footer />
    </div>
    </div>
  );
}

export default App;
