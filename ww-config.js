export default {
  editor: {
    label: {
      en: "signature-image",
    },
  },
  triggerEvents: [
    { name: 'change', label: { en: 'On change' }, event: { value: '' }, default: true },
    { name: 'initValueChange', label: { en: 'On init value change' }, event: { value: '' } },
  ],
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "yellow",
    },
    required: {
      label: { en: 'Required', fr: 'Requis' },
      type: 'OnOff',
      section: 'settings',
      defaultValue: true,
      bindable: true,
      bindingValidation: {
          type: 'boolean'            
        },
      /* wwEditor:end */
  },
    // Image Properties
    // url: {
    //   label: { en: 'Image', fr: 'Image' },
    //   type: 'Image',
    //   bindable: true,
    //   defaultValue: 'https://cdn.weweb.app/public/images/no_image_selected.png',
    // },
    
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
