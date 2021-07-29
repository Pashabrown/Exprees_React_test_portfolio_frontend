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
      <div>
       <div>
         <h1>Albert Brown</h1>
         </div> 
       
      <h2>Jr. Software Engineer</h2>
      
      <Header classname="lavastyle"/>
        
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
      <Footer />
      
    </div>
  );
}

export default App;
