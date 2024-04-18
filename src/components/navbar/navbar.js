import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items = [
        {
            label: 'Menu',
            icon: 'pi pi-home',
            command: () => { window.location = '/'; }
        },
        {
            label: 'Mi Equipo de Desarrollo',
            icon: 'pi pi-star',
            command: () => { window.location = '/PrimeReactProvider/#/prueba'; } 
        },
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        