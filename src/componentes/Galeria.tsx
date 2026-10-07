function Galeria() {
  return (
    <section id="galeria" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Galería
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=1786554168" alt="Stardew Valley" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc4/stardew_valley_multiplayer_horses_cropped.jpg" alt="Caminata" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWFF3DCaUUqh9jNB-ubcasvF70GzExEwwk6DqNE5o5weFG2GnODOw0Wk&s=10" alt="Pesca" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://easycdn.es/1/imagenes/stardew-valley-pc-ps4-xbox-one_302543.jpg" alt="Cultivo" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://assetsio.gnwcdn.com/1_vSDP8UY.png?width=690&quality=85&format=jpg&dpr=3&auto=webp" alt="Bosque" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
          <img src="https://i.pinimg.com/originals/aa/a9/60/aaa9600099e0724dcfe02613b3e2411b.jpg" alt="Personajes" className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition" />
        </div>
      </div>
    </section>
  )
}

export default Galeria