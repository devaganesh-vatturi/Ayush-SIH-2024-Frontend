import React, { useState } from "react";
import '../styles/PrintList.css';

 function PrintList(props){
   
    const render=()=>{
        if(props.usertype==="farmer"){
            return (props.cropname.replace(/^./, str => str.toUpperCase()));
        }else{
            return(props.email);
        }
    }
  return (
        <>
             {/* <div className="d1" style={{border:"1px solid black"}}>
               <div className="d2" style={{display:"grid",gridTemplateColumns:"300px 1fr"}}> 
                  <div> 
                  <p style={{ cursor: "pointer", color: "blue", textDecoration: "underline",display:"inline-block"}}>{props.name1}</p>
                  </div>
                  <div style={{textAlign:"end"}}> 
                  <p style={{display:"inline-block"}}>{props.Email1}</p>
                  </div>
                  </div>
                <div className="d3" style={{display:"grid",gridTemplateColumns:"300px 1fr"}}> 
                   <div> 
                  <p >{props.phone1}</p>
                  </div>
                 
                  <div style={{textAlign:"end"}}>
                  <p>{props.district1}</p>
                  </div>
                </div>
             </div> */}

<div className="card">
    <div className="card-row">
        <div>
            <p className="name-link">{props.name1}</p>
        </div>
        <div className="text-end">
            <p className="inline-block">{render()}</p>
        </div>
    </div>
    <div className="card-row">
        <div>
            <p>{props.phone1}</p>
        </div>
        <div className="text-end">
            <p>{props.district1}</p>
        </div>
    </div>
</div>

        </>
       
       );
};

export default  PrintList;