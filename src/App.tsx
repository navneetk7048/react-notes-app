import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Note from "./types/Note";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes: Note[] = JSON.parse(
      localStorage.getItem("react-notes-data") || ""
    );

    if (savedNotes) setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-data", JSON.stringify(notes));
  }, [notes]);

  function handleToggle() {
    setDarkMode((prevMode) => !prevMode);
  }

  function addNote(text: string) {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(id: string) {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggle={handleToggle} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
