

function Card(props: { titulo: string; descripcion: string; imagen: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={props.imagen}
        alt={props.titulo}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {props.titulo}
        </h2>
        <p className="text-gray-600">{props.descripcion}</p>
         
      </div>
    </div>
  )
}

export default Card