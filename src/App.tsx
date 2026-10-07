import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'
import Card from './componentes/Card'
import Footer from './componentes/Footer'
import AcercaDe from './componentes/AcercaDe'
import Personaje from './componentes/Personaje'
import Galeria from './componentes/Galeria'
function App() {
  return (
    <main className="min-h-screen bg-green-100">
      
      <Navbar />
      <Banner />
      <AcercaDe />
      
      <section id="juego" className="max-w-5xl mx-auto p-6 grid gap-6 md:grid-cols-3">
        <Card
          titulo="Cultivos"
          descripcion="Siembra semillas, riégalas cada día y cosecha frutas y verduras en cada estación."
          imagen="https://www.infobae.com/resizer/v2/OEIV6FMIGZDXBAZAZPSVODRHWA.jpg?auth=6ff05e771eb983060359bd64f8412a2704b54c3f1791f79a632f3db1a67181ee&smart=true&width=1200&height=900&quality=85"
        />
        <Card
          titulo="Animales"
          descripcion="Cuida gallinas, vacas y ovejas. Si las alimentas bien, te dan huevos, leche y lana."
          imagen="https://media.editor80.com/tenants/en-cancha/arc/BWGLZMVNWRAZHOMAL77KOGT7XI.png"
        />
        <Card
          titulo="Pesca"
          descripcion="Pesca en el río, el lago o el mar. Cada lugar y estación tiene peces diferentes."
          imagen="https://i.blogs.es/edad99/peces-stardew-valley/1200_900.jpeg"
        />
      </section>
      <section id="personajes" className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Personajes del pueblo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Personaje
            nombre="Abigail"
            rol="Aventurera"
            descripcion="Le encanta explorar las minas y los videojuegos."
            imagen="https://www.charlieintel.com/cdn-image/wp-content/uploads/2024/03/14/how-to-befriend-abigail-stardew-valley-likes-schedule.jpg?width=1200&quality=60&format=auto"
          />
          <Personaje
            nombre="Sebastian"
            rol="Programador"
            descripcion="Trabaja desde su cuarto y disfruta los días de lluvia."
            imagen="https://storyblok.shockbyte.com/f/296405/706x390/d841a9432a/sdv-sebastian-8.jpg"
          />
          <Personaje
            nombre="Leah"
            rol="Artista"
            descripcion="Vive en una cabaña en el bosque y hace esculturas."
            imagen="https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/stardew-valley-leah-romance-head.jpeg?w=1600&h=1200&fit=crop"
          />
          <Personaje
            nombre="Pierre"
            rol="Comerciante"
            descripcion="Atiende la tienda del pueblo, donde compras tus semillas."
            imagen="https://www.pockettactics.com/wp-content/sites/pockettactics/2025/11/stardew-valley-pierre.jpg"
          />
        </div>
      </section>
      <Galeria />
      <Footer />
    </main>
  )
}

export default App