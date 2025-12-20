<template>
    <!-- dynamic width -->
    <Card :class="`m-4 w-[${width}px]`">
        <template #content>
            Sidebar
        </template>
    </Card>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: true
    }
})

const width = ref(props.isOpen ? 250 : 80);
</script>