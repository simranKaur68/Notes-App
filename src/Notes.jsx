import { useEffect, useState } from "react";
import NotesInput from './NotesInput.jsx';
import NotesArea from './NotesArea.jsx';

function Notes() {

   const [newNote, setNewNote] = useState({
      title: '',
      content: ''
   });

   const [notes, setNotes] = useState(()=>{
       const savedNotes = localStorage.getItem("notes");
       return savedNotes ? JSON.parse(savedNotes) : []
   });

   useEffect(()=>{
        localStorage.setItem("notes", JSON.stringify(notes));
   },[notes]);


   function handleInputChange(e) {
      const { name, value } = e.target;
      setNewNote(prevNote => (
         { ...prevNote, [name]: value }
      ))
   }

   function handleAddNote(){

      if(!newNote.title.trim() && !newNote.content.trim()) return;

      const noteAdd = {
        id: crypto.randomUUID(),
        title: newNote.title.trim() || "No title",
        content: newNote.content
      };

      setNotes(notes =>(
        [noteAdd, ...notes]
      ));

      setNewNote({
        title:'',
        content:''
      });
   }

   function handleDelete(id){
      const newNoteArray = notes.filter(note=> note.id !== id);
      setNotes(newNoteArray);
   }


   return (
      <div className="notes">
         <h1>MY NOTES</h1>

         <NotesInput
            newNote={newNote}
            onInputChange={handleInputChange}
            onAddNote={handleAddNote}
         />

         <NotesArea 
            notes={notes}
            onDelete={handleDelete}
         />
      </div>

   );
}

export default Notes;