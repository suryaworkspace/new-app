import React from "react";
import "./index.css";

const NotesItem = (props) => {
  const { note } = props;
  return (
    <li className="note-item">
      <p className="note-text">{note}</p>
    </li>
  );
};

export default NotesItem;
