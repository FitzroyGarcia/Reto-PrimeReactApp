import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => { window.location = '/'; }
        },
        {
            label: 'Mi Equipo',
            icon: 'pi pi-star',
            command: () => { window.location = '/prueba'; } 
        },
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        