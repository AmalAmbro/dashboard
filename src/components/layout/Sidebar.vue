<template>
    <Card :class="`m-4 w-80`">
        <template #content>
            <div class="flex flex-col h-full">
                <nav class="flex flex-col gap-2">
                    <template v-for="(item, index) in navigations" :key="item.to || item.name">
                        <div v-if="item.child" class="flex flex-col">
                            <div 
                                class="flex items-center gap-3 p-3 rounded-lg cursor-pointer w-full"
                                :style="activeParent?.name == item.name ? `background-color: var(--body-background)`: ''"
                                @click="setActiveItem(item, item)"
                            >
                                <i :class="item.icon"></i>
                                <span class="text-lg">{{ item.name }}</span>
                                <i 
                                    class="pi pi-chevron-down ml-auto transition-transform"
                                    :class="{'rotate-180': activeParent?.name === item.name}"
                                ></i>
                            </div>

                            <div 
                                v-if="activeParent?.name == item.name" 
                                class="flex flex-col ml-6 mt-2 gap-2"
                            >
                                <div 
                                    v-for="(child, cIndex) in item.child" 
                                    :key="cIndex"
                                    class="flex items-center gap-3 p-2 rounded-lg cursor-pointer w-full"
                                    :style="activeItem?.name == child.name ? `background-color: var(--body-background)`: ''"
                                    @click="setActiveItem(child, item)"
                                >
                                    <RouterLink :to="child.to" class="flex items-center gap-3 w-full">
                                        <i :class="child.icon"></i>
                                        <span class="text-lg">{{ child.name }}</span>
                                    </RouterLink>
                                </div> 
                            </div>
                        </div>
                        <div 
                            v-else 
                            class="flex items-center gap-3 p-3 rounded-lg cursor-pointer w-full"
                            :style="activeItem?.to == item?.to ? `background-color: var(--body-background)`: ''"
                            @click="setActiveItem(item, null)"
                        >
                            <RouterLink :to="item.to" class="flex items-center gap-3 w-full">
                                <i :class="item.icon"></i>
                                <span class="text-lg">{{ item.name }}</span>
                            </RouterLink>
                        </div>
                    </template>
                </nav>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    open: {
        type: Boolean,
        default: true
    }
})

const activeItem = ref(null);
const activeParent = ref(null);

const navigations = [
    { name: 'Dashboard', icon: 'pi pi-home', to: '/' },
    { name: 'Profile', icon: 'pi pi-user', to: 'profile' },
    { 
        name: 'Sun', 
        icon: 'pi pi-sun', 
        child: [{ name: 'Buttons', icon: 'pi pi-microchip', to: 'buttons' }]
    },
    { name: 'Reports', icon: 'pi pi-chart-bar', to: 'reports' },
    { name: 'Settings', icon: 'pi pi-cog', to: 'settings' },
]

const setActiveItem = (item, parent = null) => {
    // If the clicked item is already active, deactivate it
    if (activeItem.value?.name === item.name) {
        activeItem.value = null;
        activeParent.value = null;
        return;
    }
    activeParent.value = parent;
    activeItem.value = item;
}
</script>