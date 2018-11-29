const schema = {
  "type": "object",
  "properties": {
    "partOne": {
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
              "description": "(b) Date batteries last changed: {Owners of all houses and units dwellings in NSW must install and maintain smoke alarms in compliance with the Environmental Planning and Assessment Regulation 2000 as amended} &sp;An Electrical Safety Power Switch / installed for general purpose socket outlets."
            },
          }
        },
        "signature": {
          "type": "object",
          "title": "4. SIGNATURE",
          "description": "The Agent must, as soon as practicable after entering into an agency agreement in respect of the management of property, prepare and give to the Owner the Management Inspection Report for the Property in accordance with Schedule 2, Part 2, Clause 10 of the Property, Stock and Business Agents Regulation 2014.",
          "properties": {
            "signature": {
              "type": "string",
              "title": "Signature of Agent:"
            },
            "date": {
              "type": "string",
              "title": "Report Date:",
            },
          },
        },
      },
    },
    "partTwo": {
      "title": "EXCLUSIVE MANAGEMENT AGENCY AGREEMENT (Residential)",
      "description": "The Property, Stock and Business Agents Act 2002 and Regulations",
      "type": "object",
      "properties": {
        "ownerLandlord": {
          "type": "object",
          "title": "A. OWNER/ LANDLORD",
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
          "title": "B. AGENT *(where the Agent trades as a corporation, include the corporation's licence number)",
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
          "title": "C. PROPERTY",
          "properties": {
            "address": {
              "type": "string",
              "title": "Address"
            },
            "permittedOccupants": {
              "type": "string",
              "title": "Permitted number of Occupants:",
            },
            "radio": {
              "type": "boolean",
              "title": "Pets Permitted:",
            },
            "details": {
              "type": "string",
              "title": "Details (if any):",
            },
          }
        },
        "agentsAppointment": {
          "type": "object",
          "title": "D. AGENT'S APPOINTMENT",
          "properties": {
            "address": {
              "type": "string",
              "title": "Address"
            },
            "permittedOccupants": {
              "type": "string",
              "title": "Permitted number of Occupants:",
            },
            "radio": {
              "type": "boolean",
              "title": "Pets Permitted:",
            },
            "details": {
              "type": "string",
              "title": "Details (if any):",
            },
          },
        },
        "agentsAuthority": {
          "type": "object",
          "title": 'E. AGENT\'S AUTHORITY',
          "description": 'The owner authorises the agent to undertake the following management, administration and/or leasing services: [Tick authorised option/s - if an option is not ticked it is not authorised]',
          "properties": {
            "checkboxes": {
              "type": "array",
              "title": " ",
              "items": {
                "type": "string",
                "enum": [
                  "Obtain and verify references from prospective tenants",
                  "Arrange inspections of the property by prospective tenants under the following circumstances:",
                  "Choose Tenant/s",
                  "Enter into and sign Tenancy Agreements",
                  "Collect rent in accordance with the Tenancy Agreement",
                  "Issue receipts for monies received from the Tenants pursuant to Tenancy Agreements",
                  "Receive, lodge, claim and disburse Rental Bonds in accordance with the provisions of the Residential Tenancies Act 2010",
                  "Provide tax invoices and receipts when required in accordance with the Tenancy Agreement",
                  "Review rent in accordance with any existing Tenancy Agreement and with respect to any new or renewed Tenancy Agreements",
                  "Serve notices in relation to any breach or termination of a Tenancy Agreement and as may otherwise be required",
                  "Forward to the Owner copies of any documentation signed by the Agent on behalf of the Owner",
                  "Effect repairs and maintenance to the Property to a Maximum Pre-approved Maintenance Expenditure not greater than",
                  "From time to time engage tradespersons as may be necessary",
                  "Prepare and maintain an inventory of fixtures, fittings and chattels",
                  "Carry out inspections of the Property as appropriate but not less than every",
                  "Advertise the Property for letting or re-letting in accordance with Item F",
                  "In respect to each Tenancy Agreement, do all things and make such applications as may be necessary for the recovery of possession from Tenants, and the recovery of monies due",
                  "Respond to and represent the Owner where applications are made and/or proceedings are brought by a Tenant before the Civil and Administrative Tribunal",
                  "In respect to smoke alarms installed on the Property, carry out, or appoint a contractor to carry out the Owner's installation and maintenance obligations under the Environmental Planning and Assessment Regulation 2000 as amended. (see Clause 4.16)",
                  "At the end of the Tenancy Agreement re-let the Property in accordance with the Owner's instructions",
                ],
              },
              "uniqueItems": true,
            },
          },
        },
      },
    },
  },
};

export default schema;
