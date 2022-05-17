// import logo from './logo.svg';
import './App.css';
import { Button } from "./Components/Button";
import { Links } from "./Components/Links";
import { Logo } from "./Components/Logo";
import "./styles/links.css"

function App() {
  const sta={
    display:"flex",
    justifyContent:"space-around",
    background:"black",
    width:"90%",
    margin:"auto",
    borderRadius:"5px"
  },
  sti={
    background:"lightgray",
    padding:"20px"
  }
  const so={
  display:"flex",
  

  }

 const title=[
   "Links",
   "Produts",
   "shooping"

 ]


  return (
    <>
    <div style={sti}>
    <div style={sta}>
    <Logo/>
    
      {title.map((items)=>{
       return <Links titles={items}/>
      })}
  
    <Links/>
    <Button/>
    </div>
    </div>
  </>
  );
}

export default App;
