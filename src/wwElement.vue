<template>
  <div class="ww-color-picker">
    <input type="text" v-model="text" @input="convertToImage" required />
    <img v-if="image" :src="image" alt="Image" />
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    uid: { type: Object, required: true },
  },
  data() {
    return {
      value: '', // Store the value as a data property
      text: '', // Input text
      image: null, // Image data URL
    };
  },
  methods: {
    convertToImage() {
      // Create a new canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Define the canvas dimensions and style
      canvas.width = 200; // Set the desired width
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
      this.value = this.text;
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
