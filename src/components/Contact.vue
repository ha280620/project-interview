<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="name">Name</label>
          <input
            v-model="name"
            class="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="email">Email</label>
          <input
            v-model="email"
            class="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2" for="message">Message</label>
          <textarea
            v-model="message"
            class="w-full p-2 border border-gray-300 rounded"
            id="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Xử lý gửi form ở đây
      console.log("Form submitted", this.name, this.email, this.message);
    },
  },
};
</script>

<style scoped></style>
