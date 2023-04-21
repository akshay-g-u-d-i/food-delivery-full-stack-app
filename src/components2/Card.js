import React from 'react'

export default function Card(props) {
  return (
    <div>
        <button onClick={()=> props.changeName(()=>{
            if (props.name === "akshay") return "sharath";
            return "akshay";
        })}>Change name</button>
    </div>
  )
}
