import NoteType from "../types/Note";
import AddNote from "./AddNote";
import Note from "./Note";

interface NotesListProps {
  notes: NoteType[];
  handleAddNote: (text: string) => void;
  handleDeleteNote: (id: string) => void;
}

export default function NotesList({
  notes,
  handleAddNote,
  handleDeleteNote,
}: NotesListProps) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}
