import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import "./index.css"


function App() {
  const [city ,setcity] = useState("lakhimpur")
  const [data,setdata] = useState("")

  const getWeatherinfo = ()=> {
     axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17de51b2b6fb8b98a05912ba0faf98e6`)
     .then((response) => {
      setdata(response.data)
     });
  }
  useEffect ( () =>{
    getWeatherinfo();
  },[])
  const cityHandler = (event)  =>{
    setcity(event.target.value)
  }
  const searchHandler = () =>{
    getWeatherinfo()
    setcity("")
  }
  const keyHandler =(event) =>{
    if(event.key == "Enter") {
      getWeatherinfo();
      setcity("")
    }
  }
  return (
    <div className="col-md-12 ">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
      <div className="d-grid gap-3 col-4 mt-4 center">
          <input type="text" className="form-control" value={city} onChange={cityHandler} onKeyPress={keyHandler} />
          <button className="btn  btn-primary" type="button" onClick={searchHandler} >Search</button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded weatherResultBox">
          <img className="weatherIcon" src="http://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="weatherIcon" />
          <h5 className="weatherCity">{data && data.name}</h5>
          <h5 className="weatherTemp">{data && (data.main.temp-273).toFixed(2)}°C</h5>
        </div>
      </div>
     
    </div>
  );
}

export default App;
