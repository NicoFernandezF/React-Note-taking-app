import { React, useState, useEffect } from "react";
import "../css/Note.css";
import Note from "./Note"
import CreateNote from "./CreateNote";
import { v4 as uuid } from "uuid";
function Notes() {

    const [notes, setNotes] = useState(() => {
        const storedNotes = JSON.parse(localStorage.getItem("Notes"));
        return storedNotes || [];
    });
    const [inputTextTitle, setInputTextTitle] = useState("");
    const [inputTextBody, setInputTextBody] = useState("");


    const textHandlerTitle = (e) => {
        setInputTextTitle(e.target.value);
    };
    const textHandlerBody = (e) => {
        setInputTextBody(e.target.value);
    };

    const saveHandler = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                title: inputTextTitle,
                body: inputTextBody
            },
        ]);
        setInputTextTitle("");
        setInputTextBody("");
    };

    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };

    function editNote(id, newTitle, newBody) {
        const editedNoteList = notes.map((note) => {
            if (id === note.id) {
                return { ...note, title: newTitle, body: newBody };
            }
            return note;
        });
        setNotes(editedNoteList);
    }

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(notes));
    }, [notes]);

    return (
        <div className="notes">
            {
                notes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        body={note.body}
                        deleteNote={deleteNote}
                        editNote={editNote}
                    />
                ))
            }
            < CreateNote
                textHandlerTitle={textHandlerTitle}
                textHandlerBody={textHandlerBody}
                saveHandler={saveHandler}
                inputTextTitle={inputTextTitle}
                inputTextBody={inputTextBody}
            />
        </div>
    );
}
export default Notes;