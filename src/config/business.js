// =========================================================
//  Datos del negocio — Cuba Yo
//  Extraídos del material gráfico oficial (flyers / tarjetas).
//  Centralizado aquí para que la web y, más adelante, el
//  backend compartan una sola fuente de verdad.
// =========================================================

export const BUSINESS = {
  name: 'Cuba Yo',
  tagline: 'Sabor Cubano',
  type: 'Cafetería & Pizzería Cubana',
  status: 'pre-opening', // pre-opening | open
  city: 'Porter, Texas',

  // Contacto
  phone: import.meta.env.VITE_BUSINESS_PHONE || '+12817734124',
  phoneDisplay: '281-773-4124',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '12817734124',

  // Ubicación
  address: {
    line1: '24151 US 59, Suite 205',
    city: 'Porter',
    state: 'TX',
    zip: '77365',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=24151+US+59+Suite+205+Porter+TX+77365',

  // Redes (tal como aparecen en el material oficial)
  social: {
    facebook: { label: 'Cuba Yo Cuba Yo', url: 'https://facebook.com/' },
    instagram: { label: '@cuba.yo2026', url: 'https://www.instagram.com/cuba.yo2026?igsh=MTU1OTQxMDg5MnByZw==' },
    tiktok: { label: 'Cuba Yo 2026', url: 'https://www.tiktok.com/@cuba.yo.2026?_r=1&_t=ZP-97idRnCjXTS' },
  },
}

// Promesa de marca: lo que el cliente puede esperar
export const PROMISES = [
  {
    key: 'cafe',
    title: 'Café cubano auténtico',
    text: 'Colado fuerte y dulce, como se toma en La Habana. La primera tacita del día tiene quien la espere.',
  },
  {
    key: 'pizza',
    title: 'Pizzas recién hechas',
    text: 'Masa casera horneada al momento. Nada congelado, nada apurado.',
  },
  {
    key: 'familia',
    title: 'Ambiente familiar',
    text: 'Un pedacito de Cuba en Porter. Vienes por la comida y te quedas por la gente.',
  },
]

// Menú — platos confirmados en el material gráfico
export const MENU = [
  {
    key: 'cafe',
    name: 'Café cubano',
    desc: 'Espresso colado, fuerte y dulce. El que despierta la mañana.',
    img: 'cafe',
    cat: 'Cafetería',
  },
  {
    key: 'pizza',
    name: 'Pizza casera',
    desc: 'Masa hecha en casa, horneada recién pedida. Clásica de pepperoni y más.',
    img: 'pizza',
    cat: 'Pizzería',
  },
  {
    key: 'sandwich',
    name: 'Sándwich cubano',
    desc: 'Pan cubano prensado con lechón, jamón, queso suizo, pepinillo y mostaza.',
    img: 'sandwich',
    cat: 'Cocina',
  },
  {
    key: 'lechon',
    name: 'Pan con lechón',
    desc: 'Lechón asado deshebrado en pan suave. Sencillo y contundente.',
    img: 'lechon',
    cat: 'Cocina',
  },
  {
    key: 'croquetas',
    name: 'Croquetas',
    desc: 'Doraditas por fuera, cremosas por dentro. Difícil comer solo una.',
    img: 'croquetas',
    cat: 'Para picar',
  },
  {
    key: 'guarapo',
    name: 'Guarapo',
    desc: 'Jugo de caña natural, recién exprimido. Dulzor del trópico en frío.',
    img: 'guarapo',
    cat: 'Bebidas',
  },
]


// =========================================================
//  MENÚ COMPLETO CON PRECIOS
//  Fuente: menú oficial (flyer de precios). Precios en USD.
//  Editar aquí actualiza toda la web.
// =========================================================

export const MENU_FULL = [
  {
    key: 'comida',
    title: 'Comida',
    items: [
      {
        name: 'Pan con cerdo asado',
        desc: 'Pan cubano crujiente relleno de cerdo asado, cebolla salteada y nuestro toque especial.',
        price: '10.99',
      },
      {
        name: 'Sándwich cubano',
        desc: 'El clásico de siempre: jamón, cerdo asado, queso suizo, pepinos encurtidos y mostaza en pan cubano.',
        price: '10.99',
      },
      {
        name: 'Pizza de queso',
        desc: 'Nuestra pizza tradicional cubana con salsa de tomate y abundante queso mozzarella.',
        price: '9.99',
      },
      {
        name: 'Pizza especial de la casa',
        desc: 'Salsa de tomate, queso mozzarella, cerdo asado, cebolla y pimientos.',
        price: '13.99',
        featured: true,
      },
    ],
  },
  {
    key: 'batidos',
    title: 'Batidos y bebidas frescas',
    items: [
      {
        name: 'Batidos cubanos',
        desc: 'Diferentes sabores: mamey, mango o guayaba.',
        price: '5.99',
      },
      {
        name: 'Guarapo frío',
        desc: 'Jugo de caña natural, servido bien frío.',
        price: '4.00',
      },
      {
        name: 'Café cubano',
        desc: 'Colado fuerte y dulce, como debe ser.',
        price: '1.50',
      },
    ],
  },
  {
    key: 'bebidas',
    title: 'Refrescos y agua',
    items: [
      {
        name: 'Refresco de lata (tradicional)',
        desc: 'Coca-Cola y otros clásicos.',
        price: '1.50',
      },
      {
        name: 'Refrescos importados de Cuba',
        desc: 'Tropical, Inca Kola y más sabores importados.',
        price: '1.50',
      },
      {
        name: 'Agua',
        desc: 'Botella de agua.',
        price: '1.00',
      },
    ],
  },
]

// Ingredientes extra para la pizza
export const PIZZA_ADDONS = {
  price: '1.99',
  unit: 'c/u',
  label: 'Agregados a la pizza',
  note: 'Cualquier ingrediente adicional',
  items: [
    'Jamón', 'Pepperoni', 'Cerdo asado', 'Pollo',
    'Pimiento', 'Cebolla', 'Champiñones', 'Piña', 'Aceitunas',
  ],
}

// Promociones de apertura
export const PROMOS = {
  title: 'Promociones de apertura',
  items: [
    { name: '2 pizzas de queso', price: '18.99' },
    { name: 'Sándwich cubano + refresco de lata', price: '11.99' },
    { name: 'Pizza especial de la casa + 2 refrescos de lata', price: '16.99' },
  ],
}
