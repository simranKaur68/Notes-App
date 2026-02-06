function NotesInput({ newNote, onInputChange, onAddNote }) {
    return (
        <div className="notes-input">
            <input type="text"
                name='title'
                value={newNote.title}
                onChange={onInputChange} 
                placeholder="Title"
             />

            <textarea name="content"
                value={newNote.content}
                onChange={onInputChange}
                placeholder="Type the note"
            ></textarea>

            <button className="add-note"
               onClick={onAddNote}
            >Add Note</button>
        </div>
    );
}

export default NotesInput;