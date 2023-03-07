import React from 'react'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div className="app-body">
        <div className="app-body-title">
          <textarea id="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
        </div>

        <div className="app-body-markdown">
          <textarea className="scroll" placeholder="/help pour apprendre à utiliser Emerald !" value={this.state.body} onChange={this.handleBodyChange} />
        </div>
      </div>
    );
  }
}

export default Main;
