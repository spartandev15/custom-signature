<template>
  <div class="ww-color-picker">
    <input type="text" v-model="text" @input="convertToImage" required />
    <img v-if="image" :src="image" alt="Image" />
    <!-- <wwElement v-bind="content.labelComponent" :ww-props="{ text:this.image || '' }" /> -->
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: Object, required: true },
  },
  setup(props) {
    const { value, setValue} = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'value',
      type: 'string',
    });
    return { value, setValue };
  },
  computed: {
    text: {
      get() {
        var myValue = this.image;
        console.log("myvaluy--",myValue);
        return myValue;
      },
      set(value) {
        this.setValue(value);
      },
    },
  },
  data() {
    return {
      image: this.image,
    };
  },
  methods: {
    convertToImage() {
      // Create a new canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Define the canvas dimensions and style
      canvas.width = 300; // Set the desired width
      canvas.height = 60; // Set the desired height
      context.font = 'italic 30px Cookie';
      context.fillStyle = 'black';
      context.fontWeight = '500';

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the text on the canvas
      context.fillText(this.text, 10, 40);

      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL('image/png');

      // Set the data URL as the image source
      this.image = dataURL;

      // Update the value (if needed)
      this.value = dataURL;
    },
  },
};
</script>

<style lang="scss" scoped>
.ww-color-picker {
  display: flex;
  align-items: center;
}
</style>
