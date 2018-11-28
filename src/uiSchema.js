const uiSchema = {
  "ownerLandlord": {
    "textarea": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "radio": {
      "ui:widget": "radio"
    },
  },
  "agent": {
    "textarea": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "radio": {
      "ui:widget": "radio"
    },
  },
  "property": {
    "address": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "details": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "interior": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "exterior": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "included": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "work": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
  },















  "boolean": {
    "radio": {
      "ui:widget": "radio"
    },
    "select": {
      "ui:widget": "select"
    }
  },
  "string": {
    "textarea": {
      "ui:widget": "textarea",
      "ui:options": {
        "rows": 5
      }
    },
    "color": {
      "ui:widget": "color"
    }
  },
  "secret": {
    "ui:widget": "hidden"
  },
  "disabled": {
    "ui:disabled": true
  },
  "readonly": {
    "ui:readonly": true
  },
  "widgetOptions": {
    "ui:options": {
      "backgroundColor": "yellow"
    }
  },
  "selectWidgetOptions": {
    "ui:options": {
      "backgroundColor": "pink"
    }
  }
};

export default uiSchema;
