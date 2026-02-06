function NoteItem({note, onDelete}){
    return(
        <div className="note-item">
            <div className="head-area">
                <h3 className={note.title === "No title" ? "default-title" : ""}>
                {note.title} 
            </h3>
            <span onClick={()=>onDelete(note.id)}>✖</span> 
            </div>
            <p>{note.content}</p>
        </div>
    );
}

export default NoteItem;