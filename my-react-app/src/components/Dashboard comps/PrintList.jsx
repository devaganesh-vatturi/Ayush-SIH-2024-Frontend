import React, { useState } from "react";

 function PrintList(props){
   
  
   

  return (
        <>
             <div className="d1" style={{border:"1px solid black"}}>
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
             </div>
        </>
       
       );
};

export default  PrintList;