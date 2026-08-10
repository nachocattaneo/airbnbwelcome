/*
  Actualizaciones futuras
  - Restaurantes: agregá objetos a restaurants.
  - Actividades: cuando recibas una fuente semanal, reemplazá week e items.
  La web muestra estos datos dentro de la página; sourceUrl es solo una referencia interna.
*/
const siteContent = {
  restaurants: [
    {
      name: { es: 'Oli Café', en: 'Oli Café' },
      details: {
        es: 'Café, panadería y brunch de Palermo Hollywood. Su viennoiserie y medialunas son de las más celebradas del barrio. · Aprox. 2 min caminando',
        en: 'Palermo Hollywood coffee shop, bakery and brunch spot. Its viennoiserie and croissants are among the neighbourhood favourites. · Approx. 2 min walk'
      },
      mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Oli+Cafe,+Costa+Rica+6020,+Buenos+Aires&travelmode=walking'
    },
    {
      name: { es: 'Atte. Pizzería', en: 'Atte. Pizzeria' },
      details: {
        es: 'Pizzería napolitana de masa fina y bordes aireados, ideal para una cena informal. Probá sus pizzas recién salidas del horno. · Aprox. 5 min caminando',
        en: 'Neapolitan pizzeria with thin dough and airy crusts, ideal for a relaxed dinner. Try its pizzas straight from the oven. · Approx. 5 min walk'
      },
      mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Atte+Pizzeria,+El+Salvador+6016,+Buenos+Aires&travelmode=walking'
    },
    {
      name: { es: 'Yakinilo', en: 'Yakinilo' },
      details: {
        es: 'Izakaya japonés íntimo, con yakitori, sushi y vinilos. La parrilla y sus brochettes son el corazón de la propuesta. · Aprox. 12 min caminando',
        en: 'An intimate Japanese izakaya with yakitori, sushi and vinyl records. The grill and its skewers are the heart of the menu. · Approx. 12 min walk'
      },
      mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Yakinilo,+Avenida+Dorrego+1551,+Buenos+Aires&travelmode=walking'
    },
    {
      name: { es: 'TaccOff', en: 'TaccOff' },
      details: {
        es: 'Café y pastelería 100% libre de gluten. Una gran opción para desayunar, merendar o disfrutar algo rico sin TACC. · Aprox. 4 min caminando',
        en: 'A 100% gluten-free coffee shop and bakery. A great choice for breakfast, an afternoon treat or gluten-free bites. · Approx. 4 min walk'
      },
      mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=TaccOff,+Nicaragua+5977,+Buenos+Aires&travelmode=walking'
    }
  ],
  weeklyActivities: {
    sourceUrl: '',
    week: { es: '', en: '' },
    items: []
  }
};
