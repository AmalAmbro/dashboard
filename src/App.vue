<script setup>
import { ref } from 'vue';

const text = ref('');
const toggleDarkMode = () => {
  document.body.classList.toggle('my-app-dark');
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <InputText v-model="text" />
    <Button label="Submit"/>
    <Button label="Toggle Dark Mode" @click="toggleDarkMode()" />
  </div>
</template>
