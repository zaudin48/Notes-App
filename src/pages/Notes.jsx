import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Notes = ({notes , setNotes}) => {
   
const deleteNote = async(id)=>{
  try{
    const response = await axios.delete(`http://localhost:5000/delete-note/${id}`);
    setNotes(notes.filter((note)=>note._id !== id));  
  }
  catch(err){
    console.log(err); 
  }
}
  return (

   <div className="w-full  lg:w-2/3 p-8">
        <h1 className="text-xl font-bold">Recent Notes</h1>
         <div className="flex h-screen gap-4 flex-wrap overflow-y-auto p-4 ">
         {notes.map(function(elem,idx){
            return (
              <div key={idx} className="border-2 border-yellow-500 rounded-md bg-white/10 p-4 h-50 w-40 hover:border-orange-400 flex flex-col items-start pb-4 text-wrap  justify-between relative">
                <div className="overflow-y-scroll">
                <h1 className="text-xl font-bold leading-tight">{elem.title}</h1>
                <p className="text-gray-300 mt-3 text-wrap leading-tight font-medium">{elem.description}</p>
                </div>
                <button 
                className="bg-red-500 hover:bg-red-400 text-white py-1 rounded w-full transition-all duration-200 active:scale-95 "
                onClick={()=>{
                  deleteNote(elem._id)
                }}
                >delete
                </button>
               </div>
          )
         })}
         </div>

      </div>

  )
}

export default Notes