import React,{useState} from 'react'

import '../App.css'



let emojidic={
"🍇" : "Grapes",
"🍈" : "Melon",
"🍉": "Watermelon",
"🍊": "Tangerine",
"🍋": "Lemon",
"🍌": "Banana",
"🍍": "Pineapple"
}






let array=Object.keys(emojidic)



export default function Header(){
  const [value,copyFunction]=useState(" ")

  let emojiFinder= (event)=>{
    let userIput= event.target.value;
    let finalValue= emojidic[userIput]
      copyFunction(finalValue)
   
}

function clickHandler(emoji){
  // console.log("emojiclicked"+emoji)
  let final=emojidic[emoji]
  copyFunction(final)
}


return(


<div className='nav'>
   <p style={{color:"orange",fontWeight:"bolder"}}>App Made in reactjs</p>
  <h1>Emoji Meaning finder</h1>
  <h3 style={{color:"orange"}}>Copy emoji and paste in input bar or Click on emoji to find the name of emoji</h3>
  <input onChange={emojiFinder} type="text" name="" id="" />
  <h3>Emoji we have in Database</h3>
   {
       array.map( (emoji)=>{
        return <span style={{cursor:"pointer",fontSize:"2rem"}} key={emoji} onClick={()=>clickHandler(emoji)}>{emoji}</span>
       })
   }
 <h3 style={{fontSize:"2rem",color:"orange"}}>{value}</h3>
 
  
   
   
  

</div>


)
}