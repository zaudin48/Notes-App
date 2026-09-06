import  { useState , useEffect } from "react";
import Notes from "./pages/notes";
import axios from "axios";
const App = () => {
  
const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([{ _id: "1", title: "hello", description: "world" }]);
  useEffect(() => {
    axios.get("http://localhost:5000/notes").then((res) => {
      setNotes(res.data.notes);
    });
    
  },[])
  
  const formsubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
     await axios.post("http://localhost:5000/create-note", {
      title: formData.get("title"),
      description: formData.get("description"),
    }).then((res)=>{
      setNotes([...notes,res.data.note])
    })
    setTitle("");
    setDescription("");

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
          type="text" required name="title"
          placeholder="Enter Notes heading"
          className="border-2 border-yellow-500 p-2 rounded-md outline-none hover:border-orange-400 focus:border-yellow-20 w-full"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
        />
         {/* second input */}
        <textarea
          placeholder="add your note" required name="description"
          className="border-2 border-yellow-500 p-2 h-40 rounded-md outline-none hover:border-orange-400 focus:border-yellow-200 w-full"
          value={description}
          onChange={(e)=>{
            setDescription(e.target.value);
          }}
       
       />
  
        <button
          type="submit"
          className="bg-yellow-500 p-2 rounded-md hover:bg-yellow-600 transition-all duration-200 active:scale-95 w-full"
        >
          Add Note
        </button>
      </form>

      <Notes notes={notes} setNotes={setNotes}/>

    </div>
  );
};

export default App;