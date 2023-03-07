import React from 'react'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    this.updateNoteData(this.props.activeNote);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeNote !== this.props.activeNote) {
      this.updateNoteData(this.props.activeNote);
    }
  }

  updateNoteData = (activeNote) => {
    this.setState({
      id: activeNote.id,
      title: activeNote.title,
      body: activeNote.content
    });
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  }


  updateContent = (evt) => {
    const val = evt.target.value;

    this.setState({body: val});
    this.props.activeNote.content = val;
  }

  updateTitle = (evt) => {
    const val = evt.target.value;
    if (val) {
        this.setState({title: val});
        this.props.activeNote.title = val;
    }
  }

  render() {
    return (
      <div className="app-body">
        <div className="app-body-title">
          <textarea 
            onKeyUp={evt => {
                this.updateTitle(evt);
                this.props.setActiveNote(this.state.id);
                }
            } 
            id="title" 
            placeholder="Title" 
            value={this.state.title} 
            onChange={this.handleTitleChange} />
        </div>

        <div className="app-body-markdown">
          <textarea 
            onKeyUp={evt => {
                this.updateContent(evt);
                }
            } 
            className="scroll" 
            placeholder="/help pour apprendre à utiliser Emerald !" 
            value={this.state.body} 
            onChange={this.handleBodyChange} />
        </div>
      </div>
    );
  }
}

export default Main;
