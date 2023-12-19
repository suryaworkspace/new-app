import { Component } from "react";
import { nanoid } from "nanoid";
import NotesItem from "../NotesItem";
import "./index.css";

class Home extends Component {
  state = {
    newNote: "",
    notesData: [],
  };

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

  render() {
    const { newNote, notesData } = this.state;
    return (
      <div className="app-container">
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/23/11/post-it-notes-1284667_640.jpg"
          alt="banner-img"
          className="banner-image"
        />
        <textarea
          value={newNote}
          onChange={this.updateStateInput}
          className="notes-input"
          rows="5"
          cols="35"
          placeholder="Enter notes"
        />
        <button type="button" onClick={this.appendData} className="add-button">
          Add Notes
        </button>
        <ul className="list-of-notes">
          {notesData.map((each) => {
            return <NotesItem key={each.id} note={each.note} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
