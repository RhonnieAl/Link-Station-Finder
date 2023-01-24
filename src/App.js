import { useState } from "react"
import './App.css';
import findBestLinkStation from './components/LinkStationFinder.js'
// Import component script above from component folder

function App() {
  // useState hooks to handle state when re-rendering and updating DOM
  // Initial state of input fields is empty strings
  // Set the initial state of the Link Station result to null
  const [position, setPosition] = useState({x: "", y: ""});
  const [result, setResult] = useState(null);

  const handleChange=(e) => {
    // Update the variable "position" 
    setPosition({...position, [e.target.name]: e.target.value
    })
  }

  // Call findBestLinkStation component and run script when Button is clicked
  const handleSubmit=() => {
    // Catch error of empty fields with alert modal
    if(position.x == "" || position.y == "" ) {
      return alert("please enter valid position of x and y")
    }

    // Store result of the script in a variable "data"
    let data = findBestLinkStation(
      // Convert input strings to numbers
      parseInt(position.x),
      parseInt(position.y)
    );

    // Update variable "result" from null in useState
    setResult(data);
  };
  // To see if the inputs are updated
  // console.log(position)

  /* 
  Specify the attributes such as the column width, margin, 
  placeholder text, and input datatype as well as Button size and Events.
  */
  return (
    <div className="container p-5">
      <h3 className= "text-center">Find Nearest LinkStation</h3>
      <input type="number" onChange={handleChange} placeholder="Please enter x coordinate" className="form-control col-12 m-3" name="x" />
      <input type="number" onChange={handleChange} placeholder="Please enter y coordinate" className="form-control col-12 m-3" name="y" />
      <button type="button" onClick={handleSubmit} className= "btn btn-primary ms-3">Find Suitable LinkSation</button>
      <br />
      <br />
      <p>Result : {result} </p>
    </div>
  );
}

export default App;
