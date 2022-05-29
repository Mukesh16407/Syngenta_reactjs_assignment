import React,{useState} from 'react';
import './App.css';
import { ColorCircle } from './component/ColorCircle';
import { EmptyDiv } from './component/EmptyDiv';
import { InputBox } from './component/InputBox';

function App() {
  let circleData=[
    {
      color:"green",
      id:1
    },
    {
      color:"yellow",
      id:2
    },
    {
      color:"blue",
      id:3
    },
    {
      color:"red",
    id:4
  },
  {
    color:"brown",
    id:5
  }]

  const [shootedBalloon,setShootedBalloon]=useState([])

  const [data,setData]=useState(circleData)
    
  const [inputShoot,setInputShoot]=useState("");

  const sortingBalloons=(data)=>{
        data.sort((a,b)=>a.id-b.id)
  }

  sortingBalloons(data);

  const  handleShoot=async (id)=>{
   
      if(!id){
        alert("Not Enough Balloon ")
      }else{
        setShootedBalloon([...shootedBalloon,...data.splice(id-1,1)])
        setInputShoot('')
      }
  }

  const handleOnChange=(size)=>{
       
        if(size>data.length){
          alert("Balloons are not Enough")
        }else{
          setInputShoot(size)
        }
      }
  return (
    <>
     <div className='mainInputBox'>
      <input id='inp' maxLength="1" value={inputShoot} onChange={(e)=>{
         handleOnChange(e.target.value)
        
      }} />
     <button onClick={()=>{handleShoot(inputShoot)}}>shoot</button>
     </div>
   <div className="contener">
      <div style={{display:'flex',gap:'10px',alignitems:'center',
      border:"1px solid red", height:"200px",width:"600px", padding:"10px"}} >
        {shootedBalloon.map(baloon=>{
          return <div key={baloon.id} onClick={()=>{
           let indexOfTargetBaloon=shootedBalloon.indexOf(baloon)
          setData([...data,...shootedBalloon.splice(indexOfTargetBaloon,1)])
            
           }}>
          <ColorCircle color={baloon.color} /></div>
          })}
      </div>
       <div style={{margin:"-200px 900px", border:"1px solid green", width:"120px",padding:"10px"}}>
        {data.map(data=>{
          return <div key={data.id}>
            <ColorCircle  color={data.color}/>
          </div>
       })}
     </div>
  </div>
     </>
   
  );
}

export default App;
