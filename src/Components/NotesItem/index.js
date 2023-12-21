import React from "react";
import "./index.css";

const NotesItem = (props) => {
  const { noteData, deleteNote } = props;
  const { id, note } = noteData;
  const colors = ["yellow", "green", "blue", "pink", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const deleteThisNote = (id) => {
    deleteNote(id);
  };

  return (
    <div className={`note-text ${randomColor}`}>
      <p>{note}</p>
      <button
        onClick={() => deleteThisNote(id)}
        type="button"
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
};

export default NotesItem;
