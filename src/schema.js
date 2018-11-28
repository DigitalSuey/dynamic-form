const schema = {
  "title": "MANAGEMENT INSPECTION REPORT",
  "description": "Schedule 2, Part 2 of the Property, Stock and Business Agents Regulation 2014 applies to this Management Inspection Report",
  "type": "object",
  "properties": {
    "ownerLandlord": {
      "type": "object",
      "title": "1. OWNER/ LANDLORD",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name/s"
        },
        "businessName": {
          "type": "string",
          "title": "Business Name"
        },
        "textarea": {
          "type": "string",
          "title": "Address"
        },
        "acn": {
          "type": "string",
          "title": "ACN"
        },
        "abn": {
          "type": "string",
          "title": "ABN"
        },
        "phone": {
          "title": "Phone",
          "type": "integer"
        },
        "mobile": {
          "title": "Mobile",
          "type": "integer"
        },
        "email": {
          "type": "string",
          "title": "email"
        },
        "radio": {
          "type": "boolean",
          "title": "GST Registered",
          "description": "This is the radio-description"
        },
      }
    },
    "agent": {
      "type": "object",
      "title": "2. AGENT *(where the Agent trades as a corporation, include the corporation's licence number)",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name/s"
        },
        "textarea": {
          "type": "string",
          "title": "Address"
        },
        "acn": {
          "type": "string",
          "title": "ACN"
        },
        "abn": {
          "type": "string",
          "title": "ABN"
        },
        "phone": {
          "title": "Phone",
          "type": "integer"
        },
        "mobile": {
          "title": "Mobile",
          "type": "integer"
        },
        "email": {
          "type": "string",
          "title": "email"
        },
        "licenceNumbers": {
          "type": "string",
          "title": "Licence Number/s*"
        },
        "radio": {
          "type": "boolean",
          "title": "GST Registered",
          "description": "This is the radio-description"
        },
      }
    },
    "property": {
      "type": "object",
      "title": "3. PROPERTY",
      "properties": {
        "address": {
          "type": "string",
          "title": "Address"
        },
        "details": {
          "type": "string",
          "title": "Property Details/Characteristics:",
        },
        "interior": {
          "type": "string",
          "title": "Description of Conndition of the Property including Fittings and Fixtures:",
          "description": "Interior:",
        },
        "exterior": {
          "type": "string",
          "title": " ",
          "description": "Exterior:",
        },
        "included": {
          "type": "string",
          "title": " ",
          "description": "Included Fittings/Furnishings:",
        },
        "work": {
          "type": "string",
          "title": "Details of any work still to be completed by the Owner of the Property:"
        },
        "smokeDate": {
          "type": "string",
          "title": "Smoke alarms are / are not installed in accordance with Part 9, Division 7A of the Environmental Planning and Assessment Regulation 2000.",
          "description": "(a) Smoke alarms last tested and cleaned:"
        },
        "batteriesDate": {
          "type": "string",
          "title": " ",
          "description": "(b) Date batteries last changed:"
        },
      }
    },
  },
};

export default schema;
