import { useState } from "react"
import './App.css';
import findBestLinkStation from './components/LinkStationFinder.js'

function App() {
  const [position, setPosition] = useState({x: "", y: ""});
  const [result, setResult] = useState(null);

  const handleChange=(e) => {
    setPosition({...position, [e.target.name]: e.target.value
    })
  }
  const handleSubmit=() => {
    if(position.x == "" || position.y == "" ) {
      return alert("please enter valid position of x and y")
    }
    let data = findBestLinkStation(
      parseInt(position.x),
      parseInt(position.y)
    );
    setResult(data);
  };

  console.log(position)
  return (
    <div className="container p-5">
      <h3 className= "text-center">Find Nearest LinkStation</h3>
      <input type="number" onChange={handleChange} placeholder="enter x" className="form-control col-12 m-3" name="x" />
      <input type="number" onChange={handleChange} placeholder="enter y" className="form-control col-12 m-3" name="y" />
      <button type="button" onClick={handleSubmit} className= "btn btn-primary ms-3">Find LinkSation</button>
      <br />
      <br />
      <p>Result : {result} </p>
    </div>
  );
}

export default App;
