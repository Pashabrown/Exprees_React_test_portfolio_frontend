import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <hr></hr>
      
      <img src={about.headshot} width="" height="" alt=""/>
      <hr></hr>
      <h3>{about.email}</h3>
      <div>
      <column><h3><b>I am a Software engineer who started and ran my own business for 12 years.</b></h3><br></br> 
      <h3><b>I’m an exceptional communicator and project manager, with a natural ability to help a team execute goals.</b></h3><br></br> 
      <h3><b>I also have a background in Sales, and helped build a startup company in Life Sciences.</b></h3> </column>
    </div>
    </div>

  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  //Use a ternary to render one thing if we have the data from the api and something else if we don't
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;