import { useState } from "react";
import './App.css';
import Pic from "./Components/Pic"
import Intro from "./Components/Intro"
import Buttons from "./Components/Buttons"
import Likes from './Components/Likes';
import Icons from './Components/Icons';
import Display from "./Components/Display"

function App() {
 
  const [text, setText] = useState('My Name is Raynell');

  const handleName = () => {
    setText("My Name is Raynell")
  }

  const handleSkills = () => {
    setText("I am a Frontend Developer")
  }

  

  return (
    <div className="App">
      
    <main>
        <div class="container">
          <Pic/>

          <Intro  />

          < Display message={text} />


          <Buttons clickHandler={handleName} name={"Name"} />
          <Buttons clickHandler={handleSkills} name={"Skills"} />

            <Likes/>

            <Icons/>

          

          </div>
    </main>
    </div>

  );
}

export default App;
