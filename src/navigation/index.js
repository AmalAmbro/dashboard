const navigations = [
    { name: 'Dashboard', icon: 'pi pi-home', to: { name: 'dashboard' } },
    { 
        name: 'Errors', 
        icon: 'pi pi-home', 
        child: [
            { name: '403', icon: 'pi pi-home', to: { name: 'errors-403' } },
            { name: '404', icon: 'pi pi-home', to: { name: 'errors-404' } },
            { name: '500', icon: 'pi pi-home', to: { name: 'errors-500' } },
            { name: 'Maintenance', icon: 'pi pi-home', to: { name: 'errors-maintenance' } }
        ] 
    }
];

export default navigations;
