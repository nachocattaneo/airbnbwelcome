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
    },
    {
  name: { es: 'La Mar', en: 'La Mar' },
  cuisine: { es: 'PERUANO / NIKKEI', en: 'PERUVIAN / NIKKEI' },
  details: {
    es: 'Cevichería y barra nikkei de referencia en Buenos Aires, con pisco sours y platos frescos de mar. · Aprox. 1 min caminando',
    en: 'A landmark ceviche and nikkei bar in Buenos Aires, with pisco sours and fresh seafood dishes. · Approx. 1 min walk'
  },
  mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=La+Mar,+Arevalo+2024,+Buenos+Aires&travelmode=walking'
},
{
  name: { es: 'Uptown', en: 'Uptown' },
  cuisine: { es: 'COCTELERÍA', en: 'COCKTAIL BAR' },
  details: {
    es: 'Speakeasy con temática de subte neoyorquino, tragos de autor y ambiente animado. · Aprox. 1 min caminando',
    en: 'A speakeasy styled like a New York subway station, craft cocktails and a lively atmosphere. · Approx. 1 min walk'
  },
  mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Uptown,+Arevalo+2030,+Buenos+Aires&travelmode=walking'
},
{
  name: { es: 'Alma Keto', en: 'Alma Keto' },
  cuisine: { es: 'KETO / CAFÉ', en: 'KETO / CAFÉ' },
  details: {
    es: 'Café y cocina keto con grandes ventanales, ideal para desayunar o merendar sin culpa. · Aprox. 3 min caminando',
    en: 'A keto café with big windows, ideal for a guilt-free breakfast or afternoon snack. · Approx. 3 min walk'
  },
  mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Alma+Keto,+Nicaragua+5949,+Buenos+Aires&travelmode=walking'
},
{
  name: { es: 'Osteria Fantástico', en: 'Osteria Fantástico' },
  cuisine: { es: 'ITALIANA', en: 'ITALIAN' },
  details: {
    es: 'Trattoria de esquina en Palermo, con pizzas, pastas caseras y ambiente relajado. · Aprox. 6 min caminando',
    en: 'A corner trattoria in Palermo, with pizzas, homemade pasta and a relaxed vibe. · Approx. 6 min walk'
  },
  mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Osteria+Fantastico,+Angel+Justiniano+Carranza+1946,+Buenos+Aires&travelmode=walking'
},
{
  name: { es: 'Cang Tin', en: 'Cang Tin' },
  cuisine: { es: 'VIETNAMITA', en: 'VIETNAMESE' },
  details: {
    es: 'Cocina vietnamita con banh mi, pad thai y platos bien especiados. · Aprox. 8 min caminando',
    en: 'Vietnamese cuisine with banh mi, pad thai and well-spiced dishes. · Approx. 8 min walk'
  },
  mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Cang+Tin,+Av.+Dorrego+2415,+Buenos+Aires&travelmode=walking'
},
{
  name: { es: 'Gris Gris', en: 'Gris Gris' },
  cuisine: { es: 'BAR DE AUTOR', en: 'COCKTAIL BAR' },
  details: {
    es: 'Bar íntimo de cócteles y tapas con tocadiscos de fondo, ideal para una cita. · Aprox. 12 min caminando',
    en: 'An intimate cocktail and tapas bar with a record player playing all night, great for a date. · Approx. 12 min walk'
  },
  mapUrl: 'https://www.google.com/maps/dir/?api=1&origin=Arevalo+1950,+Buenos+Aires&destination=Gris+Gris,+Jose+A.+Cabrera+5918,+Buenos+Aires&travelmode=walking'
}
  ],
  weeklyActivities: {
    sourceUrl: '',
    week: { es: '', en: '' },
    embed: 'https://www.instagram.com/p/Dbq6TSUiZTh/', 
    items: []
  }
};
