<template>
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" rel="stylesheet" />
  </head>

  <div class="form-container">
    <div v-if="!submitted">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Type in your signature</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <button @click="convertToImage">Add Signature</button>
      </form>
    </div>
    <div v-else style="display: flex; flex-direction: column;">
      <div style="display: flex; align-items: center;">
        <img v-if="signatureImage" :src="signatureImage" alt="Signature" />
        <i @click="editSignature" class="fas fa-pencil-alt edit-button"></i>
      </div>
      <p class="signature-text" v-if="showSignatureText">{{ formData.name }}</p>
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

      const textWidth = context.measureText(this.formData.name).width;
      canvas.width = textWidth + 100;
      canvas.height = 60;

      // Set text style (italic)
      context.font = 'italic 30px Cookie';
      context.fillStyle = 'black';
      context.fontWeight = '500';

      // Draw the text on the canvas
      context.fillText(this.formData.name, 10, 40);

      // Convert the canvas to a data URL
      const dataURL = canvas.toDataURL('image/png');

      // Set the data URL as the signature image
      this.signatureImage = dataURL;

      // Show the signature text
      this.showSignatureText = true;
    },
    editSignature() {
      this.submitted = false; // Show the form again for editing
      this.showSignatureText = false; // Hide the signature text
    },
  },
};
</script>
<style scoped>
/* Your existing styles... */
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

.form-container {
  max-width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  color: #000000;
  display: block;
  font-size: 15px;
  /* font-family: normal; */
  font-weight: 400;
  font-style: normal;
  line-height: 15px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
}

button {
  background-color: #0E2448;
  color: #fff;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #124677;
}

.italic-text {
  font-family: 'Cookie', cursive;
  font-weight: bolder;
}

/* Add these styles for the edit button */
.edit-button {
  background: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-left: 1.5rem;
  color: #71717A
}

.signature-text {
  margin-top: 10px;
  font: normal;
  font-weight: bold;
  margin-left: 7px;
}
</style>
