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
];

export default navigations;
