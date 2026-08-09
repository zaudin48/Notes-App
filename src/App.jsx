import  { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);
  const formsubmit = (e) => {
    e.preventDefault();
  
    const newNote = [...notes];
    newNote.push({ title, details });
    setNotes(newNote);
    setTitle("");
    setDetails("");

  };
   
const deleteNote =(idx)=>{
  const newNote = [...notes];
  newNote.splice(idx,1)
  setNotes(newNote)
}
 

  return (
    <div className="h-full min-h-screen  bg-black text-white p-4 lg:flex">
   
      {/* Form */}
      <form
        onSubmit={formsubmit}
        className="flex flex-col gap-3 items-start p-8 lg:w-1/3 "
      ><h1 className="text-xl font-bold">Add Notes</h1>

      {/*first input*/}
        <input
          type="text" required
          placeholder="Enter Notes heading"
          className="border-2 border-yellow-500 p-2 rounded-md outline-none hover:border-orange-400 focus:border-yellow-20 w-full"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />
         {/* second input */}
        <textarea
          placeholder="add your note" required
          className="border-2 border-yellow-500 p-2 h-40 rounded-md outline-none hover:border-orange-400 focus:border-yellow-200 w-full"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value);
          }}
       
       />
  
        <button
          type="submit"
          className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-600 transition-all duration-200 active:scale-95 w-full"
        >
          Add Note
        </button>
      </form>

      {/* Notes */}
  {    <div className="w-full  lg:w-2/3 p-8">
        <h1 className="text-xl font-bold">Recent Notes</h1>
         <div className="flex h-screen gap-4 flex-wrap overflow-y-auto p-4 ">
         {notes.map(function(elem,idx){

          return (
              <div key={idx} className="border-2 border-yellow-500 rounded-md bg-white/10 p-4 h-50 w-40 hover:border-orange-400 flex flex-col items-start pb-4 text-wrap  justify-between relative">
                <div className="overflow-y-scroll">
                <h1 className="text-xl font-bold leading-tight">{elem.title}</h1>
                <p className="text-gray-300 mt-3 text-wrap leading-tight font-medium">{elem.details}</p>
                </div>
                <button 
                className="bg-red-500 hover:bg-red-400 text-white py-1 rounded w-full transition-all duration-200 active:scale-95 "
                onClick={()=>{
                  deleteNote(idx)
                }}
                >delete
                </button>
               </div>
          )
         })}
         </div>

      </div>}

    </div>
  );
};

export default App;