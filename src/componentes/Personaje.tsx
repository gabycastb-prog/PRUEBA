function Personaje(props: { nombre: string; rol: string; descripcion: string; imagen: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
      <img
        src={props.imagen}
        alt={props.nombre}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-green-200"
      />
      <h3 className="text-xl font-bold text-green-700">{props.nombre}</h3>
      <p className="text-sm text-green-600 mb-2">{props.rol}</p>
      <p className="text-sm text-gray-600">{props.descripcion}</p>
    </div>
  )
}

export default Personaje