<template>
  <div class="min-h-[calc(100vh-120px)] flex items-center justify-center">
    <Card class="w-full max-w-md text-center">
      <template #content>
        <i class="pi pi-exclamation-triangle text-6xl mb-4"></i>

        <h1 class="text-3xl font-semibold mb-2">Something Went Wrong</h1>
        <p class="mb-6">
          An unexpected error occurred on the server.
          Please try again later.
        </p>

        <div class="flex justify-center gap-3">
          <Button label="Retry" icon="pi pi-refresh" outlined @click="reload" />
          <Button label="Dashboard" icon="pi pi-home" @click="$router.push({name: 'dashboard'})" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
const reload = () => {
  window.location.reload()
}
</script>
