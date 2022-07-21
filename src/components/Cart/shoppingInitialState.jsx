import { useHref } from "react-router-dom";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "BANDEJA IRREGULAR", description: "Bandeja con forma irregular de metal. Disponible en varios tamaños.", price: 10, img: "/photos/bandeja1.jpg" },
    { id: 2, name: "CAJA METAL CRISTAL", description:"Some quick example text to build on the card title and make up the bulk of the card's content.", price: 20, img: "/photos/caja1.jpg" },
    { id: 3, name: "CANDELABRO CERÁMICA",description:"Some quick example text to build on the card title and make up the bulk of the card's content.", price: 15, img: "/photos/candelabro1.jpg" },
    { id: 4, name: "CESTA CON ASAS", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 38, img: "/photos/cesta1.jpg" },
    { id: 5, name: "CESTA TRENZADA", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 50, img: "/photos/cesta1.jpg" },
    { id: 6, name: "COLGADOR 5 PUNTAS", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 60, img: "/photos/congador1.jpg" },
    { id: 7, name: "CORTINA LINO LAVADO", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 45, img: "/photos/cortina1.jpg" },
    { id: 8, name: "JARRA CERÁMICA", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 60, img: "/photos/jarron1.jpg" },
    { id: 9, name: "MARCO METAL DORADO", description:"Some quick example text to build on the card title and make up the bulk of the card's content.", price: 92, img: "/photos/marco1.jpg" },
    { id: 10, name: "COLGADOR REDONDO", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 55, img: "/photoscolgador2.jpg" },
    { id: 11, name: "TIRADOR DE CERÁMICA FLOR", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 80, img: "/photos/tirador1.jpg" },
    { id: 12, name: "MINI VELAS CANDELABRO", description:"Some quick example text to build on the card title and make up the bulk of the card's content.",price: 60, img: "/photos/vela1.jpg" }
  
  ],
  cart: [],
};