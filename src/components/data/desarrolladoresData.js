export const proveedorDesarrolladores = {
    getDesarrolladores: () => {
      const desarrolladores = [
        {
            id: 1,
            nombre: 'HERBERTH',
            avatar: 'imagen1.jpg',
            edad: 25,
            ciudad: 'URUBAMBA',
            experiencia: 'FRONTEND DEVELOPER',
        },
        {
            id: 2,
            nombre: 'FITZROY',
            avatar: 'imagen2.jpg',
            edad: 26,
            ciudad: 'PAUCARTAMBO',
            experiencia: 'BACKEND DEVELOPER',
        },
      ];
      return Promise.resolve(desarrolladores);
    }
  };
