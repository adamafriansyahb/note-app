import React, {useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
// import myNotes from '../notes';
import CreateArea from './CreateArea';


// function theNotes(note) {
//     return (
//             <Note
//             key={note.key}
//             title={note.title}
//             content={note.content}
//             />
//     );
// }

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((note, index) => {
                return <Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onDelete={deleteNote}
                />;
            })}
            <Footer />
        </div>
    );
}

export default App;