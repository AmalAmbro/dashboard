<template>
  <div class="min-h-[calc(100vh-120px)] flex items-center justify-center">
    <Card class="w-full max-w-md text-center">
      <template #content>
        <i class="pi pi-search text-6xl mb-4"></i>

        <h1 class="text-3xl font-semibold mb-2">Page Not Found</h1>
        <p class="mb-6">
          The page you’re looking for doesn’t exist or was moved.
        </p>

        <Button label="Back to Dashboard" icon="pi pi-home" @click="$router.push({name: 'dashboard'})" />
      </template>
    </Card>
  </div>
</template>
