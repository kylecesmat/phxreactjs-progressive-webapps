import React from "react";

const defaultState = {
  firstName: "",
  lastName: "",
  phone: ""
};

export default class CreateContact extends React.Component {
  state = defaultState;

  submit = ev => {
    ev.preventDefault();
    this.props.createContact(this.state);
    this.setState({ ...defaultState });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.submit}>
        <input
          name="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
          placeholder="first name"
        />
        <input
          name="lastName"
          onChange={this.handleChange}
          value={this.state.lastName}
          placeholder="last name"
        />
        <input
          name="phone"
          onChange={this.handleChange}
          value={this.state.phone}
          placeholder="phone"
        />
        <button type="add">Add</button>
      </form>
    );
  }
}
