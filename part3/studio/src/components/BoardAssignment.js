import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label:"Select a board",
                     value: "Select a board"},
                  {label:"End of Unit Ideas",
                     value: "End of Unit Ideas"},
                  {label:"End of Summer Party",
                     value: "End of Summer Party"},
                   {label:"Cold Drinks",
                     value: "Cold Drinks"}
                  ];

   const [boardName, setName]= useState('no boards yet!');

   const handleChange = (event) => {
      if(event.target.value != "Select a board"){
         setName (event.target.value) 
      }
     // setName (event.target.value)
   }
   
   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((props) => (
            <option value={props.value}>{props.label}</option>
         ))
         
         }
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}