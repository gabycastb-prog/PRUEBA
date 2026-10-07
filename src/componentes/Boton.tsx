function Boton(props: { texto: string; enlace: string }) {
  return (
    <a
      href={props.enlace}
      className="inline-block bg-green-100 text-green-900 font-bold px-6 py-3 rounded-full shadow-md hover:bg-green-200"
    >
      {props.texto}
    </a>
  )
}

export default Boton