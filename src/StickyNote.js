import React from "react";

class StickyNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      note: "This is my first sticky Note!!! " + props.index,
      checkedyn: false,
      style: {
        top: this.randomBetween(0, window.innerHeight - 150, "px"),
        left: this.randomBetween(0, window.innerWidth - 150, "px"),
      }
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.randomBetween = this.randomBetween.bind(this);
  }


  randomBetween(x, y, s) {
    return (x + Math.ceil(Math.random() * (y-x))) + s;
  }
  toggleEditMode() {
    this.setState(prevstate => ({
      editing: !prevstate.editing
    }))
  }

  handleInputChange() {
    this.setState(prevstate => ({
      checkedyn: !prevstate.checkedyn
    }))
  }

  handleChange(event) {
    this.setState({
        note: event.target.value
    });
  }
  renderDisplayMode() {
    var classtouse = "sticky";
    if (this.state.checkedyn) {
      classtouse = "sticky done";
    }
    return (
      <div className={classtouse} style={this.state.style}>
        <p>{this.state.note}</p>
        <span>
          <button onClick={this.toggleEditMode}>edit</button>
          <input type="checkbox" onChange={this.handleInputChange} checked={this.state.checkedyn}></input>
        </span>
      </div>
    );
  }

  renderEditMode() {
    return (
      <div className="sticky" style={this.state.style}>
        <textarea defaultValue={this.state.note} onChange={this.handleChange}></textarea>
        <span>
          <button onClick={this.toggleEditMode}>save</button>
        </span>
      </div>
    );
  }

  render() {
    return this.state.editing
      ? this.renderEditMode()
      : this.renderDisplayMode();
  }
}

export default StickyNote;