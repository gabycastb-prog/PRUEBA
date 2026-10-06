import Banner from './componentes/Banner'
import Card from './componentes/Card'
import Footer from './componentes/Footer'

function App() {
  return (
    <main className="min-h-screen bg-green-100">
      <Banner />

      <section className="max-w-5xl mx-auto p-6 grid gap-6 md:grid-cols-3">
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

      <Footer />
    </main>
  )
}

export default App