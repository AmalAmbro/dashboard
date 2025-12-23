<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden my-4 mr-4">
      <!-- Topbar -->
      <Topbar />

      <!-- Router view -->
      <main class="overflow-auto p-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Topbar from "@/components/layout/Topbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

const darkMode = ref(false);
// Toggle dark/light theme
const toggleDarkMode = () => {
  document.body.classList.toggle('my-app-dark');
}
</script>
