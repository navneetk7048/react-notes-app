import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0)
      setNoteText(event.target.value);
  };

  const handleSubmit = () => {
    if (noteText.trim().length > 0) handleAddNote(noteText);

    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
