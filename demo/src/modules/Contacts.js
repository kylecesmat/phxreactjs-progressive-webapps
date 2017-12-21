import { handleActions } from "redux-actions";
import createApiAction from "./util/createApiAction";
import { fromFirebase } from "./util/fromFirebase";

/* Action Types */
const prefix = type => `CONTACTS:${type}`;
export const FETCH_CONTACT_LIST = prefix("FETCH");
export const FETCH_CONTACT_LIST_REQUEST = prefix("FETCH_REQUEST");
export const FETCH_CONTACT_LIST_SUCCESS = prefix("FETCH_SUCCESS");
export const FETCH_CONTACT_LIST_FAILURE = prefix("FETCH_FAILURE");

export const CREATE_CONTACT = prefix("CREATE");
export const CREATE_CONTACT_REQUEST = prefix("CREATE_REQUEST");
export const CREATE_CONTACT_SUCCESS = prefix("CREATE_SUCCESS");
export const CREATE_CONTACT_FAILURE = prefix("CREATE_FAILURE");

export const DELETE_CONTACT = prefix("DELETE");
export const DELETE_CONTACT_REQUEST = prefix("DELETE_REQUEST");
export const DELETE_CONTACT_SUCCESS = prefix("DELETE_SUCCESS");
export const DELETE_CONTACT_FAILURE = prefix("DELETE_FAILURE");

/* Actions */
export const fetchContacts = () =>
  createApiAction({
    endpoint: "/contacts.json",
    action: FETCH_CONTACT_LIST
  });

export const createContact = body =>
  createApiAction({
    endpoint: "/contacts.json",
    action: CREATE_CONTACT,
    method: "POST",
    body,
    nextAction: fetchContacts
  });

export const deleteContact = firebaseId =>
  createApiAction({
    endpoint: `/contacts/${firebaseId}.json`,
    action: DELETE_CONTACT,
    method: "DELETE",
    nextAction: fetchContacts
  });

/* Reducer */
const initialState = {
  data: [],
  loading: false
};

export const contactsReducer = handleActions(
  {
    [FETCH_CONTACT_LIST_SUCCESS]: (state, { payload }) => ({
      ...state,
      data: fromFirebase(payload)
    })
  },
  initialState
);

export default contactsReducer;
