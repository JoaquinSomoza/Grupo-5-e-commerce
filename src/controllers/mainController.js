const products = [
  {
    id: 1,
    titulo: "Auricular Void Elite",
    precio: 19000,
    img: "/images/auricular1.jpg",
  },
  {
    id: 2,
    titulo: "Mouse M65",
    precio: 9500,
    img: "/images/mouse2.png",
  },
  {
    id: 3,
    titulo: "Mouse pad",
    precio: 5000,
    img: "/images/mousepad2.png",
  },
  {
    id: 4,
    titulo: "Teclado K65 RGB MINI 60%",
    precio: 17000,
    img: "/images/teclado2.png",
  },
  {
    id: 5,
    titulo: "Silla TC60 FABRIC",
    precio: 68770,
    img: "/images/silla1.png",
  },
  {
    id: 6,
    titulo: "Accesorio remera m/l",
    precio: 4000,
    img: "/images/remera.jpg",
  },
];

const mainController = {
  index: (req, res) => {
    res.render("index", { products: products });
  },
};

module.exports = mainController;