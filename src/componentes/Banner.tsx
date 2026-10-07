import Boton from './Boton'

function Banner() {
  return (
    <section id="inicio" className="bg-green-700 text-white text-center py-16 px-6">
      <p className="text-sm uppercase tracking-widest mb-2">
        Videojuego de granja
      </p>
      <h1 className="text-4xl font-bold mb-4">
        Bienvenidos a Stardew Valley
      </h1>
      <p className="text-lg max-w-xl mx-auto mb-8">
        Un juego tranquilo donde heredas la granja de tu abuelo, siembras
        cultivos, cuidas animales y te haces amiga de la gente del pueblo.
      </p>
      <Boton texto="Conoce el juego" enlace="#juego" />
    </section>
  )
}

export default Banner