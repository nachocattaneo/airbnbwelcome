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
      mapUrl: 'https://www.google.com/maps/place/Oli/@-34.5793251,-58.4417102,17z/data=!3m2!4b1!5s0x95bcb59358ee5a25:0xb4a63fb43e8347a0!4m6!3m5!1s0x95bcb568b018e969:0x92c141d8fb0735c7!8m2!3d-34.5793295!4d-58.4391353!16s%2Fg%2F11rn0y7p6w?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'Atte. Pizzería', en: 'Atte. Pizzeria' },
      details: {
        es: 'Pizzería napolitana de masa fina y bordes aireados, ideal para una cena informal. Probá sus pizzas recién salidas del horno. · Aprox. 5 min caminando',
        en: 'Neapolitan pizzeria with thin dough and airy crusts, ideal for a relaxed dinner. Try its pizzas straight from the oven. · Approx. 5 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/Atte.+Pizzeria+Napoletana/@-34.5799585,-58.4423017,16z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5578fe09bd7:0x1bd9206479d70a51!8m2!3d-34.5799629!4d-58.4397268!16s%2Fg%2F11hzn3zdh3?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'Yakinilo', en: 'Yakinilo' },
      details: {
        es: 'Izakaya japonés íntimo, con yakitori, sushi y vinilos. La parrilla y sus brochettes son el corazón de la propuesta. · Aprox. 12 min caminando',
        en: 'An intimate Japanese izakaya with yakitori, sushi and vinyl records. The grill and its skewers are the heart of the menu. · Approx. 12 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/Yakinilo/@-34.5839496,-58.4470019,16z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5ebab9c42ab:0xc4eac9e440b8cd78!8m2!3d-34.583954!4d-58.444427!16s%2Fg%2F11vpffgrzw?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'TaccOff', en: 'TaccOff' },
      details: {
        es: 'Café y pastelería 100% libre de gluten. Una gran opción para desayunar, merendar o disfrutar algo rico sin TACC. · Aprox. 4 min caminando',
        en: 'A 100% gluten-free coffee shop and bakery. A great choice for breakfast, an afternoon treat or gluten-free bites. · Approx. 4 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/TACCOFF+-+100%25+Gluten+Free/@-34.5785485,-58.4396862,16z/data=!3m1!4b1!4m6!3m5!1s0x95bcb54219502195:0x54b69e6f6f9be002!8m2!3d-34.5785529!4d-58.4371113!16s%2Fg%2F11v4010_g9?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'La Mar', en: 'La Mar' },
      cuisine: { es: 'PERUANO / NIKKEI', en: 'PERUVIAN / NIKKEI' },
      details: {
        es: 'Cevichería y barra nikkei de referencia en Buenos Aires, con pisco sours y platos frescos de mar. · Aprox. 1 min caminando',
        en: 'A landmark ceviche and nikkei bar in Buenos Aires, with pisco sours and fresh seafood dishes. · Approx. 1 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/La+Mar/@-34.5782005,-58.4401673,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb59480b41d91:0xf5442bdad2f0f407!8m2!3d-34.5782049!4d-58.4375924!16s%2Fg%2F11c3mq5f31?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'Uptown', en: 'Uptown' },
      cuisine: { es: 'COCTELERÍA', en: 'COCKTAIL BAR' },
      details: {
        es: 'Speakeasy con temática de subte neoyorquino, tragos de autor y ambiente animado. · Aprox. 1 min caminando',
        en: 'A speakeasy styled like a New York subway station, craft cocktails and a lively atmosphere. · Approx. 1 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/Uptown/@-34.5780389,-58.4399772,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5947d293161:0x5d3b1b2d879b65c4!8m2!3d-34.5780433!4d-58.4374023!16s%2Fg%2F11d_tt92nq?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'Alma Keto', en: 'Alma Keto' },
      cuisine: { es: 'KETO / CAFÉ', en: 'KETO / CAFÉ' },
      details: {
        es: 'Café y cocina keto con grandes ventanales, ideal para desayunar o merendar sin culpa. · Aprox. 3 min caminando',
        en: 'A keto café with big windows, ideal for a guilt-free breakfast or afternoon snack. · Approx. 3 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/Alma+Keto+BA/@-34.5780389,-58.4399772,17z/data=!4m6!3m5!1s0x95bcb5b380576319:0xd0de4c3bee170c!8m2!3d-34.5786822!4d-58.4371356!16s%2Fg%2F11sf8cswdt?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'Osteria Fantástico', en: 'Osteria Fantástico' },
      cuisine: { es: 'ITALIANA', en: 'ITALIAN' },
      details: {
        es: 'Trattoria de esquina en Palermo, con pizzas, pastas caseras y ambiente relajado. · Aprox. 6 min caminando',
        en: 'A corner trattoria in Palermo, with pizzas, homemade pasta and a relaxed vibe. · Approx. 6 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/Osteria+Fant%C3%A1stico/@-34.580584,-58.4388719,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb5e430918cad:0x1b7c1aaeea084adb!8m2!3d-34.5805884!4d-58.436297!16s%2Fg%2F11yltv9dlt?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'Cang Tin', en: 'Cang Tin' },
      cuisine: { es: 'VIETNAMITA', en: 'VIETNAMESE' },
      details: {
        es: 'Cocina vietnamita con banh mi, pad thai y platos bien especiados. · Aprox. 8 min caminando',
        en: 'Vietnamese cuisine with banh mi, pad thai and well-spiced dishes. · Approx. 8 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/Cang+Tin/@-34.5761074,-58.4393333,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb52bd224e06d:0x9c7d42cbbf96fc3a!8m2!3d-34.5761118!4d-58.4367584!16s%2Fg%2F11lgy2mkqj?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      name: { es: 'Gris Gris', en: 'Gris Gris' },
      cuisine: { es: 'BAR DE AUTOR', en: 'COCKTAIL BAR' },
      details: {
        es: 'Bar íntimo de cócteles y tapas con tocadiscos de fondo, ideal para una cita. · Aprox. 12 min caminando',
        en: 'An intimate cocktail and tapas bar with a record player playing all night, great for a date. · Approx. 12 min walk'
      },
      mapUrl: 'https://www.google.com/maps/place/gris+gris/@-34.5832834,-58.4441557,17z/data=!3m2!4b1!5s0x95bcb5ed3e1db321:0xd8099abf88916007!4m6!3m5!1s0x95bcb58332650b99:0xff0799306ed71ec2!8m2!3d-34.5832878!4d-58.4415808!16s%2Fg%2F11s_rt2l2y?entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D'
    }
  ],
  weeklyActivities: {
    sourceUrl: '',
    week: { es: '', en: '' },
    embeds: [
      {
        title: { es: 'Agenda gastronómica', en: 'Food & dining guide' },
        url: 'https://www.instagram.com/p/Db9FzVnCbDM/?img_index=1'
      },
      {
        title: { es: 'Agenda cultural', en: 'Cultural guide' },
        url: 'https://www.instagram.com/p/Dbf1Y_xFHSq/?img_index=1'
      }
    ],
    items: []
  }
};
