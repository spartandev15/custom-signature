<template>
  <div class="form-container">
    <h2>Signature</h2>
    <!-- Use v-if to conditionally render the form or image -->
    <div v-if="!submitted">
      <form @submit.prevent="submitForm" style="padding: 1rem;">
        <div class="form-group">
          <label for="name">Type in your signature</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <button @click="convertToImage">Submit Signature</button>
      </form>
    </div>
    <div v-else style="padding: 1rem;">
      <img v-if="signatureImage" :src="signatureImage" alt="Signature" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
      },
      submitted: false,
      signatureImage: null,
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.formData);
      // You can send this data to a backend server or perform any other actions as needed

      // Mark the form as submitted
      this.submitted = true;
    },
    convertToImage() {
      // Create a new canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Set canvas dimensions (adjust as needed)
      canvas.width = 400;
      canvas.height = 100;

      // Set text style (italic)
      context.font = 'italic 20px Arial';
      context.fillStyle = 'black';

      // Draw the text on the canvas
      context.fillText(this.formData.name, 10, 40);

      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL('image/png');

      // Set the data URL as the signature image
      this.signatureImage = dataURL;
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 450px;
  margin: 0 auto;
  padding: 20px 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 1rem;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.italic-text {
  font-style: italic;
  font-weight: bolder;
}
</style>
