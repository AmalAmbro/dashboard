<template>
  <div class="min-h-[calc(100vh-120px)] flex items-center justify-center">
    <Card class="w-full max-w-md text-center">
        <template #content>
            <i class="pi pi-lock text-6xl mb-4"></i>

            <h1 class="text-3xl font-semibold mb-2">Access Denied</h1>
            <p class="mb-6">
                You don’t have permission to access this page.
            </p>

            <div class="flex justify-center gap-3">
              <Button label="Go Back" icon="pi pi-arrow-left" outlined @click="$router.back()" />
              <Button label="Dashboard" icon="pi pi-home" @click="gotoDashboard" />
            </div>
        </template>
    </Card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const gotoDashboard = () => {
  router.push({name:'dashboard'})
}
</script>
