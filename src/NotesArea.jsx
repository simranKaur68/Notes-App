import NoteItem from './NoteItem.jsx'

function NotesArea({notes, onDelete}){
    return(
        <div className="note-area">
            {notes.map((note)=>
               <NoteItem key={note.id} note={note} onDelete={onDelete} />
            )}
        </div>
    );
}

export default NotesArea;