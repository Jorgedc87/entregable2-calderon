const travelPoints = [
  {
    id: 1,
    name: "Mar del Plata",
    state: "Buenos Aires",
    description: "¡Viajes en avión a la feliz!",
    price: 41000,
    discountedPrice: 34850,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/mdp.webp",
    stock: 10
  },
  {
    id: 2,
    name: "Bariloche",
    state: "Rio Negro",
    description: "Disfrutá de la nieve y los paisajes patagónicos.",
    price: 60000,
    discountedPrice: 51000,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/bariloche.webp",
    stock: 5
  },
  {
    id: 3,
    name: "Calamuchita",
    state: "Córdoba",
    description: "Conocé las sierras y su belleza natural.",
    price: 35000,
    discountedPrice: 29750,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/cordoba.webp",
    stock: 7
  },
  {
    id: 4,
    name: "Mendoza",
    state: "Mendoza",
    description: "Vení a degustar los mejores vinos del país.",
    price: 55000,
    discountedPrice: 46750,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/mendoza.webp",
    stock: 3
  },
  {
    id: 5,
    name: "Salta",
    state: "Salta",
    description: "Disfrutá de la ciudad con más encanto colonial.",
    price: 48000,
    discountedPrice: 40800,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/salta.webp",
    stock: 2
  },
  {
    id: 6,
    name: "Ushuaia",
    state: "Tierra del Fuego",
    description: "Viajá al fin del mundo y conocé la Antártida.",
    price: 72000,
    discountedPrice: 61200,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/ushuaia.webp",
    stock: 1
  },
  {
    id: 7,
    name: "Iguazú",
    state: "Misiones",
    description: "Visitá las majestuosas cataratas.",
    price: 65000,
    discountedPrice: 55250,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/iguazu.webp",
    stock: 4
  },
  {
    id: 8,
    name: "Rosario",
    state: "Santa Fe",
    description: "Conocé la cuna de la bandera.",
    price: 30000,
    discountedPrice: 25500,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/rosario.webp",
    stock: 6
  },
  {
    id: 9,
    name: "El Calafate",
    state: "Santa Cruz",
    description: "Explorá los glaciares y la inmensidad de la Patagonia.",
    price: 68000,
    discountedPrice: 57800,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/calafate.webp",
    stock: 8
  },
  {
    id: 10,
    name: "San Juan",
    state: "San Juan",
    description: "Recorré sus valles y bodegas únicas.",
    price: 43000,
    discountedPrice: 36550,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/sanjuan.webp",
    stock: 9
  },
  {
    id: 11,
    name: "Villa Carlos Paz",
    state: "Córdoba",
    description: "Disfrutá de los teatros y las sierras en la ciudad turística más famosa de Córdoba.",
    price: 32000,
    discountedPrice: 27200,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/villacarlospaz.webp",
    stock: 7
  },
  {
    id: 12,
    name: "Puerto Madryn",
    state: "Chubut",
    description: "Vení a avistar ballenas y disfrutar de la belleza del Atlántico sur.",
    price: 54000,
    discountedPrice: 45900,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/puertomadryn.webp",
    stock: 5
  },
  {
    id: 13,
    name: "San Rafael",
    state: "Mendoza",
    description: "Explorá los paisajes del Cañón del Atuel y sus bodegas.",
    price: 48000,
    discountedPrice: 40800,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/sanrafael.webp",
    stock: 6
  },
  {
    id: 14,
    name: "Tandil",
    state: "Buenos Aires",
    description: "Descubrí las sierras y el encanto de esta ciudad serrana.",
    price: 37000,
    discountedPrice: 31450,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/tandil.webp",
    stock: 8
  },
  {
    id: 15,
    name: "San Martín de los Andes",
    state: "Neuquén",
    description: "Disfrutá del lago Lacar y los paisajes patagónicos.",
    price: 61000,
    discountedPrice: 51850,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/sanmartindelosandes.webp",
    stock: 4
  },
  {
    id: 16,
    name: "Gualeguaychú",
    state: "Entre Ríos",
    description: "Vení a disfrutar del carnaval más famoso de Argentina.",
    price: 31000,
    discountedPrice: 26350,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/gualeguaychu.webp",
    stock: 7
  },
  {
    id: 17,
    name: "Merlo",
    state: "San Luis",
    description: "Conocé la belleza de las sierras y su microclima único.",
    price: 34000,
    discountedPrice: 28900,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/villademerlo.webp",
    stock: 5
  },
  {
    id: 18,
    name: "La Plata",
    state: "Buenos Aires",
    description: "Visitá la ciudad de las diagonales y su impresionante catedral.",
    price: 29000,
    discountedPrice: 24650,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/laplata.webp",
    stock: 10
  },
  {
    id: 19,
    name: "Villa La Angostura",
    state: "Neuquén",
    description: "Explorá la pintoresca Villa y su acceso al Bosque de Arrayanes.",
    price: 63000,
    discountedPrice: 53550,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/laangostura.webp",
    stock: 3
  },
  {
    id: 20,
    name: "Cafayate",
    state: "Salta",
    description: "Descubrí los vinos del norte y los paisajes de los Valles Calchaquíes.",
    price: 47000,
    discountedPrice: 39950,
    discountInfo: "* Al comprar pasajes ida y vuelta se aplica un descuento.",
    image: "../../img/travelpoints/cafayate.webp",
    stock: 6
  }
];

export default travelPoints;