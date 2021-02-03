import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import myNotes from '../notes';
import CreateArea from './CreateArea';


function theNotes(note) {
    return (
            <Note
            key={note.key}
            title={note.title}
            content={note.content}
            />
    );
}

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map(note => {
                return <Note title={note.title} content={note.content} />;
            })}
            <Footer />
        </div>
    );
}

export default App;