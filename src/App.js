import { useState } from "react"
import './App.css';
import { findBestLinkStation } from './components/LinkStationFinder'

/* function GetLinkedStationtoConnect(x, y) {
  let allLinkStation = [
      [0, 0, 10],
      [20, 20, 5],
      [10, 0, 12],
  ];

  let power = 0;
  let prefered_linkedStation_data = [];

  for (let i = 0; i < allLinkStation.length; i++) {
      let currentLinkStation = allLinkStation[i];
      let distance = Math.sqrt(
          Math.pow(currentLinkStation[0] - x, 2) +
          Math.pow(currentLinkStation[1] - y, 2)
      );
      
      if (distance > currentLinkStation[2]) {
          continue;
      } 
      else {
          let currrent_power = Math.pow(currentLinkStation[2] - distance, 2);
  
          if (currrent_power > power) {
              power = currrent_power;
              prefered_linkedStation_data = currentLinkStation;
          }
      }
  }
  
  if (power == 0) {
    return `No link station within reach for point ${x},${y}`;
  } 
  else {
    return `Best link station for point ${x},${y} is ${prefered_linkedStation_data[0]},${prefered_linkedStation_data[1]} with power ${power}`;
  }
  
};
*/

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
