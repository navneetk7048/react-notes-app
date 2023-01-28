import { MdDeleteForever } from "react-icons/md";
import NoteType from "../types/Note";

interface NoteProps {
  note: NoteType;
  handleDeleteNote: (id: string) => void;
}

export default function Note({ note, handleDeleteNote }: NoteProps) {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{note.date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(note.id)}
        />
      </div>
    </div>
  );
}
