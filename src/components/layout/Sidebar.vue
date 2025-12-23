<template>
    <Card :class="`m-4 w-80`">
        <template #content>
            <div class="flex flex-col h-full">
                <nav class="flex flex-col gap-2">
                    <template v-for="(item, index) in navigations" :key="item.to || item.name">
                        <div v-if="item.child" class="flex flex-col">
                            <div 
                                class="flex items-center gap-3 p-3 rounded-lg cursor-pointer w-full sidebar-item"
                                :class="{active: isParentActive(item)}"
                                @click="openParent=item"
                            >
                                <i :class="item.icon"></i>
                                <span class="text-lg">{{ item.name }}</span>
                                <i 
                                    class="pi pi-chevron-down ml-auto transition-transform"
                                    :class="{'rotate-180': openParent?.name === item.name}"
                                ></i>
                            </div>

                            <div 
                                v-if="openParent?.name == item.name" 
                                class="flex flex-col ml-6 mt-2 gap-2"
                            >
                                <div 
                                    v-for="(child, cIndex) in item.child" 
                                    :key="cIndex"
                                    class="flex items-center gap-3 p-2 rounded-lg cursor-pointer w-full sidebar-item"
                                    :class="{active: isActive(child)}"
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
                            class="flex items-center gap-3 p-3 rounded-lg cursor-pointer w-full sidebar-item"
                            :class="{active: isActive(item)}"
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
import { ref, defineProps, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useThemeStore } from '@/stores/themeStore';

const props = defineProps({
    open: {
        type: Boolean,
        default: true
    }
})

const route = useRoute();   
const openParent = ref(null);

const isActive = (item) => {
  if (!item.to) return false
  console.log(`/${item.to}, ${route.path}`);
  
  return route.path == `/${item.to}` || route.path === item.to
}

const isParentActive = (parent) => {
  return parent.child?.some(child => isActive(child))
}

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

watch(
    () => route.path,
    () => {
        const parent = navigations.find(nav => 
            nav.child?.some(child => route.path === `/${child.to}` || route.path === child.to)
        );

        openParent.value = parent || null;
    },
    { immediate: true }
)
</script>