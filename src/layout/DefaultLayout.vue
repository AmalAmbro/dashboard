<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden my-4 mr-4">
      <!-- Topbar -->
      <Topbar />

      <!-- Router view -->
      <main class="overflow-auto pt-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Topbar from "@/components/layout/Topbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
</script>
