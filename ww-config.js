export default {
  editor: {
    label: {
      en: "My Element",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
    labelComponent: {
      hidden: true,
      defaultValue: {
        isWwObject: true,
        type: "ww-text",
      },
    },
    header: {
      hidden: true,
      defaultValue: []
    },
  },
};
