import React, {Component} from 'react';
import './App.css';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

const app= new Clarifai.app({
  apiKey:'efe6ae9d41b946f8bcbf110f9114e030'
});

const particlesOptions = {
  
        background: {
         
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value:500,
            density: {
              enable: true,
              value_area: 300,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
      
      }
    
  


class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }

  onInputChange = (event) =>{
    console.log(event.target.value);
  }

  onButtonSubmit= () =>{
    console.log('Click');  
  app.models.predict(
    "efe6ae9d41b946f8bcbf110f9114e030",
    // URL
    "https://samples.clarifai.com/metro-north.jpg"
)
.then (function(response) {
    // do something with responseconsole.log(response);
    },
    function(err) {"// there was an error"   }
);
  }
  render() {
  return (
    <div className="App">
        <Particles className='particles'
         params={particlesOptions} />
      <Navigation />
      <Logo /> 
      <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      {/* <FaceRecognition />} */}
    </div>
  );
}

}

export default App;
