import { Component } from "react";
import { nanoid } from "nanoid";
import NotesItem from "../NotesItem";
import "./index.css";

class Home extends Component {
  state = {
    newNote: "",
    notesData: [],
  };
  componentDidMount() {
    const savedData = localStorage.getItem("savedNotes");
    this.setState({ notesData: JSON.parse(savedData) });
  }

  updateStateInput = (event) => {
    this.setState({ newNote: event.target.value });
  };

  appendData = () => {
    const { newNote } = this.state;
    if (newNote !== "") {
      this.setState((prevState) => ({
        newNote: "",
        notesData: [...prevState.notesData, { id: nanoid(), note: newNote }],
      }));
    } else {
      alert("Please enter text to save note");
    }
  };

  saveData = () => {
    const { notesData } = this.state;
    localStorage.setItem("savedNotes", JSON.stringify(notesData));
  };

  deleteNote = (id) => {
    const { notesData } = this.state;
    const filteredData = notesData.filter((e) => e.id !== id);
    this.setState({ notesData: filteredData });
    localStorage.setItem("savedNotes", JSON.stringify(filteredData));
  };

  render() {
    const { newNote, notesData } = this.state;
    return (
      <div className="app-container">
        <textarea
          value={newNote}
          onChange={this.updateStateInput}
          className="notes-input"
          rows="5"
          cols="28"
          placeholder="Enter notes"
        />
        <button type="button" onClick={this.appendData} className="add-button">
          Add Notes
        </button>
        <button type="button" onClick={this.saveData} className="add-button">
          Save Notes
        </button>
        <ul className="list-of-notes">
          {notesData.map((each) => {
            return (
              <NotesItem
                key={each.id}
                deleteNote={this.deleteNote}
                noteData={each}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
