import { CALL_API } from "redux-api-middleware";
import isFunction from "lodash/isFunction";

export const CALL_API_DEFAULTS = {
  credentials: "same-origin",
  headers: () => ({
    "Content-Type": "application/json",
    Accept: "application/json"
  })
};
export const createApiAction = ({
  endpoint,
  action,
  body = {},
  nextAction,
  method = "GET"
}) => dispatch => {
  const bodyParameters =
    method === "POST" || method === "PUT" ? { body: JSON.stringify(body) } : {};
  return dispatch({
    [CALL_API]: {
      endpoint: encodeURI(
        `https://phx-reactjs-contact-book.firebaseio.com/${
          endpoint.startsWith("/") ? endpoint : `/${endpoint}`
        }`
      ),
      method,
      types: [
        {
          type: `${action}_REQUEST`,
          meta: {
            endpoint
          }
        },
        {
          type: `${action}_SUCCESS`,
          meta: {
            endpoint
          },
          payload: (actionType, state, res) => {
            return res.json().then(data => {
              // eslint-disable-next-line no-unused-expressions
              isFunction(nextAction) ? dispatch(nextAction(data)) : null;

              return data;
            });
          }
        },
        {
          type: `${action}_FAILURE`,
          meta: {
            endpoint
          },
          payload: (actionType, state, res) => {
            try {
              return res.json().then(json => {
                return json;
              });
            } catch (e) {
              throw e;
            }
          }
        }
      ],
      ...CALL_API_DEFAULTS,
      ...bodyParameters
    }
  }).then(obj => {
    if (obj.error) {
      throw obj.payload; // Server error response
    }

    return obj.payload; // Server payload
  });
};

export default createApiAction;
