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
import { computed, watch } from "vue";
import { useThemeStore } from "../../stores/themeStore";

const themeStore = useThemeStore();
const darkMode = computed(() => themeStore.isDarkMode);
// Toggle dark/light theme
const toggleDarkMode = () => {
    themeStore.toggleDarkMode();
    document.body.classList.toggle('my-app-dark');
}

watch(
    darkMode, 
    (isDark) => {
        if (isDark) {
            document.body.classList.add('my-app-dark');
        } else {
            document.body.classList.remove('my-app-dark');
        }
    },
    { immediate: true }
);
</script>