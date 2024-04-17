import imagen1 from './images/imagen1.jpg';
import imagen2 from './images/imagen2.jpg';

export const proveedorDesarrolladores = {
    getDesarrolladores: () => {
      const desarrolladores = [
        {
            id: 1,
            nombre: 'HERBERTH',
            avatar: imagen1,
            edad: 25,
            ciudad: 'URUBAMBA',
            experiencia: 'FRONTEND DEVELOPER',
        },
        {
            id: 2,
            nombre: 'FITZROY',
            avatar: imagen2,
            edad: 26,
            ciudad: 'PAUCARTAMBO',
            experiencia: 'BACKEND DEVELOPER',
        },
      ];
      return Promise.resolve(desarrolladores);
    }
  };
