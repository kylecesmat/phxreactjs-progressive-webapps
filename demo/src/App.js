import React from "react";
import { connect } from "react-redux";
import * as actions from "./modules/Contacts";
import { Offline, Online } from "react-detect-offline";
import ContactList from "./ContactList";
import CreateContact from "./CreateContact";
import Connection from "./Connection";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Offline>
          <Connection offline />
        </Offline>
        <Online>
          <Connection />
          <CreateContact createContact={this.props.createContact} />
        </Online>
        <ContactList
          contacts={this.props.contacts}
          fetchContacts={this.props.fetchContacts}
          deleteContact={this.props.deleteContact}
        />
      </main>
    );
  }
}

export default connect(({ contacts }) => ({ contacts: contacts.data }), {
  fetchContacts: actions.fetchContacts,
  createContact: actions.createContact,
  deleteContact: actions.deleteContact
})(App);
