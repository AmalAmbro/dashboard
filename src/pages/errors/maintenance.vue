<template>
  <div class="min-h-[calc(100vh-120px)] flex items-center justify-center">
    <Card class="w-full max-w-lg text-center">
      <template #content>
        <i class="pi pi-cog text-6xl mb-4 animate-spin"></i>

        <h1 class="text-3xl font-semibold mb-2">Maintenance Mode</h1>
        <p class="mb-6">
          We’re performing scheduled maintenance.
          Please check back shortly.
        </p>

        <Button label="Refresh" icon="pi pi-refresh" outlined @click="reload" />
      </template>
    </Card>
  </div>
</template>

<script setup>
const reload = () => {
  window.location.reload()
}
</script>
