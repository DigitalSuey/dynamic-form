import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import './index.css';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

// const schemaOne = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: {type: "string", title: "Title", default: "A new task"},
//     done: {type: "boolean", title: "Done?", default: false}
//   }
// };

const schema = {
  title: 'E. AGENT\'S AUTHORITY',
  list: '<p>The owner authorises the agent to undertake the following management, administration and/or leasing services:</p><p class="font-italic">[Tick authorised option/s - if an option is not ticked it is not authorised]</p>',
  form: {
    type: "array",
    title: "",
    items: {
      type: "string",
      enum: [
        "Obtain and verify references from prospective tenants",
        "Arrange inspections of the property by prospective tenants under the following circumstances:",
      ],
    },
    uniqueItems: true
  },
  subThingy: [
    "(a) Where the Property is not tenanted, in accordance with the Owner's instructions",
    "(b) Where the Property is tenanted, in accordance with the Owner's instructions and subject to the provisions if the Tenancy Agreement",
  ],
};

const uiSchema = {
  "ui:widget": "checkboxes"
};

const log = (type) => console.log.bind(console, type);

render(
  (
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="alert alert-secondary font-weight-bold w-100" role="alert">
            { schema.title }
          </div>
        </div>

        <div class="row">
          <div>
            <ul class="list-inline">
              <li class="list-inline-item font-weight-bold">1.</li>
              <li class="list-inline-item">
                <p>The owner authorises the agent to undertake the following management, administration and/or leasing services:</p>
                <p class="font-italic">[Tick authorised option/s - if an option is not ticked it is not authorised]</p>
              </li>
            </ul>

            <Form
              schema={schema.form}
              uiSchema={uiSchema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />

            <p>
              {schema.subThingy}
            </p>
          </div>
        </div>
      </div>
    </div>
  ), document.getElementById("root")
);
