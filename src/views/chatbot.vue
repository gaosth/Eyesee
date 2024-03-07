<template>
    <div class="bg-white p-6 rounded shadow">
      <h2 class="text-2xl font-bold">ChatGPT</h2>
      <div class="mt-4 space-y-4">
        <div class="p-4 rounded bg-gray-200">
          <span class="font-bold">User:</span> How are you?
        </div>
        <div class="p-4 rounded bg-blue-200">
          <span class="font-bold">ChatGPT:</span> I'm fine, thank you!
        </div>
      </div>
      <div class="mt-6">
        <input type="text" class="w-full px-4 py-2 border rounded" placeholder="Type your message...">
        <button class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Chatbot'
  }
  </script>