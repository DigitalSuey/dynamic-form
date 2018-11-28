import React from 'react';
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import './index.css';
import schema from './schema.js';
import uiSchema from './uiSchema.js';

const log = (type) => console.log.bind(console, type);

render((
  <div class="container">
    <div class="row">
      <div class="col">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
      </div>
    </div>
  </div>
), document.getElementById("root"));
