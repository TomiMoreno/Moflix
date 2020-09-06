export default (req, res) => {
  const respuestaDeBaseDeDatos = {
    movies: [
      {
        id: "23",
        titulo: "Mi pobre angelito",
        sinopsis:
          "Un encantador niño de 8 años desafía a un torpe par de ladrones cuando, accidentalmente, sus padres lo olvidan en casa.",
        duracion: 122,
        genero: "Comedia",
        clasificacion: "ATP",
        preview:
          "https://cdnvos.lavoz.com.ar/sites/default/files/styles/width_1072/public/nota_periodistica/home_alone.jpg",
        link: "",
        director: "Chris Columbus",
        reparto: "Macaulay Culkin",
        estreno: 1990,
      },
    ],
  };
  res.send(respuestaDeBaseDeDatos);
};
