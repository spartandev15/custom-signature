export default {
  editor: {
    label: {
      en: "color-picker",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "yellow",
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
