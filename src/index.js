import React from 'react';
import { render } from "react-dom";
import Form from "react-jsonschema-form";
import './index.css';
import managementInspectionReport from './schemas/managementInspectionReport.js';
import managementInspectionReportUi from './schemas/managementInspectionReportUi.js';

const log = (type) => console.log.bind(console, type);

render((
  <div class="container">
    <div class="row">
      <div class="col">
        <Form
          schema={managementInspectionReport}
          uiSchema={managementInspectionReportUi}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
      </div>
    </div>
  </div>
), document.getElementById("root"));
