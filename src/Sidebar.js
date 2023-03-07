import React from 'react'
function Sidebar({ notes, onAddNote, activeNoteId, setActiveNote }) {

    return <div className="app-sidebar">
        <h2>Emerald.</h2>
        <div className="app-sidebar-notes">
            <div className="app-sidebar-note-add" onClick={() => {
                onAddNote();
            }}>
                <p>+ Ajouter une page</p>
            </div>
            {notes.map((note) => (
                <div 
                    className={`app-sidebar-note ${note.id === activeNoteId && "active"}`}
                    onClick={() => setActiveNote(note.id)}>
                    <p>{note.title.slice(0, 15)}</p>
                </div>
            ))}
        </div>
    </div>;
}

export default Sidebar;