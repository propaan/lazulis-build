import './App.css';
import Sidebar from './Sidebar';
import uuid from 'react-uuid';
import Main from './Main';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      activeNoteId: null
    };
  }

  componentDidUpdate() {
    console.log("YESSSSSS");
  }

  onAddNote = (specificId) => {
    const randomUUID = uuid();
    const newNote = {
      id: specificId || randomUUID,
      title: "📄Nouvelle page",
      content: ""
    };
    if (this.state.notes.length === 0) {
      newNote.title = "🏘️ Démarrage !";
      this.setState({
        notes: [newNote],
        activeNoteId: newNote.id
      });
    } else {
      this.setState((prevState) => ({
        notes: [newNote, ...prevState.notes],
        activeNoteId: newNote.id
      }));
    }
    return newNote;
  };

  setActiveNote = (noteId) => {
    this.setState({ activeNoteId: noteId });
  };

  getActiveNote = () => {
    let activeNote = this.state.notes.find((note) => note.id === this.state.activeNoteId);
    if (!activeNote) {
      activeNote = this.onAddNote();
    }
    return activeNote;
  };

  render() {
    return (
      <div className="App">
        <Sidebar notes={this.state.notes} onAddNote={this.onAddNote} activeNoteId={this.state.activeNoteId} setActiveNote={this.setActiveNote} />
        <Main activeNote={this.getActiveNote()} />
      </div>
    );
  }
}

export default App;
