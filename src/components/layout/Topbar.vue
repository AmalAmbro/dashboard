<template>
    <Card>
        <template #content>
            <div class="flex justify-end gap-4">
                <Button 
                    :icon="darkMode ? 'pi pi-sun' : 'pi pi-moon'" 
                    rounded 
                    variant="text" 
                    severity="contrast" 
                    aria-label="" 
                    @click="toggleDarkMode"
                />
                <Button icon="pi pi-user" rounded variant="text" severity="contrast" aria-label="User" />
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from "vue";

const darkMode = ref(false);
// Toggle dark/light theme
const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    document.body.classList.toggle('my-app-dark');
}
</script>