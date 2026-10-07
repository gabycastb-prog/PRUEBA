function AcercaDe() {
  return (
    <section id="acerca" className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-green-600 mb-2">
          Sobre el juego
        </p>
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          ¿De qué trata el juego?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          Llegas a un pequeño pueblo para cuidar la granja que te dejó tu
          abuelo. Al principio está llena de piedras y maleza, pero poco a poco
          la conviertes en tu hogar. No hay prisa ni presión: tú decides si hoy
          siembras, pescas, exploras o conversas con los vecinos.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-green-100 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">Creador</p>
            <p className="text-lg font-bold text-green-800">Eric Barone</p>
          </div>
          <div className="bg-green-100 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">Año</p>
            <p className="text-lg font-bold text-green-800">2016</p>
          </div>
          <div className="bg-green-100 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">Género</p>
            <p className="text-lg font-bold text-green-800">Granja</p>
          </div>
          <div className="bg-green-100 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-gray-500">Plataformas</p>
            <p className="text-lg font-bold text-green-800">PC, consolas y celular</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcercaDe