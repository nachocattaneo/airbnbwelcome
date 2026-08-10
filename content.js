/*
  Actualizaciones futuras
  - Restaurantes: agregá objetos a restaurants.
  - Actividades: cuando recibas una fuente semanal, reemplazá week e items.
  La web muestra estos datos dentro de la página; sourceUrl es solo una referencia interna.
*/
const siteContent = {
  restaurants: [],
  weeklyActivities: {
    sourceUrl: '',
    week: { es: '', en: '' },
    items: []
  }
};
