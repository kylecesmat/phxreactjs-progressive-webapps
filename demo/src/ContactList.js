import React from "react";
import { Offline, Online } from "react-detect-offline";

export default class CreateContact extends React.Component {
  componentWillMount() {
    this.props.fetchContacts();
  }

  render() {
    if (!this.props.contacts[0]) {
      return null;
    }

    return (
      <ul className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.key} className="contact">
            <div className="figure">
              {contact.firstName && contact.firstName.charAt(0).toUpperCase()}
              {contact.lastName && contact.lastName.charAt(0).toUpperCase()}
            </div>
            <div className="details">
              <span className="name">{`${contact.firstName} ${
                contact.lastName
              }`}</span>
              <span className="phone">{contact.phone}</span>
            </div>
            <Online>
              <div>
                <button onClick={() => this.props.deleteContact(contact.key)}>
                  Delete
                </button>
              </div>
            </Online>
          </li>
        ))}
      </ul>
    );
  }
}
