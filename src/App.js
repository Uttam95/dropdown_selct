import "./styles.css";
import react, {useState} from 'react';

export default function App() {
  const [data,setData] = useState([
    {name:"MICROSOFT" , age:14},
    {name:"GOOGLE" , age:15},
    {name:"ADOBE" , age:16},

  ])

  const [selectuser, setSelecteduser] = useState("")
  return (
    <div className="App">
      <select onChange = {(event)=>setSelecteduser(event.target.value)}>
        {data && data.length>0 
          && data.map((dat) =>{
            return <option>{dat.name}</option>
          })
        }
      </select>
      {selectuser && <label> {selectuser} </label>}
    </div>
  );
}
