function Navbar() {
  return (
    <nav className="bg-green-900 text-white flex justify-between items-center px-6 py-4">
      <p className="font-bold text-lg">Stardew Valley</p>
      <div className="flex gap-6">
        <a href="#inicio" className="hover:underline">Inicio</a>
        <a href="#acerca" className="hover:underline">Acerca de</a>
        <a href="#juego" className="hover:underline">El juego</a>
        <a href="#personajes" className="hover:underline">Personajes</a>
        <a href="#galeria" className="hover:underline">Galería</a>
        <a href="#contacto" className="hover:underline">Contacto</a>
      </div>
    </nav>
  )
}

export default Navbar