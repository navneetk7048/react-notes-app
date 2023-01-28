import { useState } from "react";

interface AddNoteProps {
  handleAddNote: (text: string) => void;
}

export default function AddNote({ handleAddNote }: AddNoteProps) {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (charLimit - e.target.value.length >= 0) setNoteText(e.target.value);
  }

  function handleSubmit() {
    if (noteText.trim().length > 0) handleAddNote(noteText);

    setNoteText("");
  }

  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
