import React, { Component } from "react";

import { connect } from "react-redux";

import { getTrips, addNewTrip } from "../../redux/actions/tripActions";
class AddTripForm extends Component {
  state = {
    description: "",
    designation: "",
    duration: "",
    img_url: "https://via.placeholder.com/150",
    title: "",
    type: ""
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  componentWillReceiveProps(newProps) {
    if (newProps.addingTrip === false) {
      this.props.getTrips();
      this.props.history.push("/profile/my-trips");
    }
  }
  cancelAction = e => {
    e.preventDefault();
    this.setState({
      description: "",
      designation: "",
      duration: "",
      img_url: "https://via.placeholder.com/150",
      title: "",
      type: ""
    });
    this.props.history.push("/profile/my-trips");
  };
  addNewTrip = e => {
    e.preventDefault();
    this.props.addNewTrip(this.state);
    this.props.history.push("/profile/my-trips");
  };
  render() {
    return (
      <div className="add-trip-form-container">
        <form onSubmit={this.addNewTrip}>
          <div className="trip-types">
            <label className="main-label">Trip Type: </label>
            <input
              required
              type="radio"
              name="designation"
              value="Professional"
              checked={this.state.designation === "Professional"}
              onChange={this.handleChange}
            />
            <label>Professional</label>

            <input
              required
              type="radio"
              name="designation"
              value="Private"
              checked={this.state.designation === "Private"}
              onChange={this.handleChange}
            />
            <label>Private</label>
          </div>
          <div className="trip-inputs-container">
            <div className="trip-input">
              <label>What's the name of your trip?</label>
              <input
                required
                type="text"
                name="title"
                placeholder="Trip Title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>

            <div className="trip-input">
              <label>What type of trip was this?</label>
              <input
                required
                type="text"
                name="type"
                placeholder="Trip type (Rock climbing, kayaking, etc.)"
                value={this.state.type}
                onChange={this.handleChange}
              />
            </div>

            <div className="trip-input">
              <label>Give a short description of your trip:</label>
              <textarea
                required
                type="text"
                name="description"
                placeholder="Trip Description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>

            <div className="trip-input">
              <label>How many hours did your trip last?</label>
              <input
                required
                type="number"
                name="duration"
                placeholder="Duration of trip"
                value={this.state.duration}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="button-container">
            <button className="button cancel" onClick={this.cancelAction}>
              Cancel
            </button>
            <button className="button add" type="submit">
              Add Trip
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  addingTrip: state.tripReducer.addingTrip
});
export default connect(
  mapStateToProps,
  { getTrips, addNewTrip }
)(AddTripForm);
