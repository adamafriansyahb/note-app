import React, { useState } from 'react';

function CreateArea(props) {
    
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNode(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
    }
    
    return (
        <div>
            <form>
                <input name="title" value={note.title} placeholder="Title" onChange={handleChange} />
                <textarea name="content" value={note.content} placeholder="Take a note..." onChange={handleChange} cols="30"></textarea>
                <button onClick={submitNode}>+</button>
            </form>
        </div>
    );
}

export default CreateArea;