import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

function Reservar({ libros, reservarLibro }) {

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const idLibro = Number(searchParams.get('id'))

  const libroSeleccionado = libros.find(
    libro => libro.id === idLibro
  )

  const [nombre, setNombre] = useState('')

  const [mensaje, setMensaje] = useState('')


  const manejarReserva = (e) => {

    e.preventDefault()

    if (nombre.trim() === '') {
      setMensaje('Por favor, ingresa tu nombre.')
      return
    }

    if (!libroSeleccionado) {
      setMensaje('No se encontró el libro.')
      return
    }

    if (libroSeleccionado.reservado) {
      setMensaje('Este libro ya está reservado.')
      return
    }

    reservarLibro(idLibro, nombre)

    setMensaje(
      `El libro "${libroSeleccionado.titulo}" fue reservado correctamente.`
    )

    setNombre('')
  }


  if (!libroSeleccionado) {

    return (
      <div className="text-center">

        <h2>Reservar un libro</h2>

        <div className="alert alert-warning mt-4">
          Selecciona un libro desde la página principal.
        </div>

        <button
          className="btn btn-primary"
          onClick={() => navigate('/')}
        >
          Volver a los libros
        </button>

      </div>
    )
  }


  return (
    <div className="row justify-content-center">

      <div className="col-md-7 col-lg-6">

        <div className="card shadow">

          <div className="card-body p-4">

            <h2 className="card-title text-center mb-4">
              Reservar libro
            </h2>


            <div className="alert alert-info">

              <strong>Libro:</strong>
              <br />

              {libroSeleccionado.titulo}

              <br />

              <strong>Autor:</strong>
              <br />

              {libroSeleccionado.autor}

            </div>


            {mensaje && (

              <div className="alert alert-success">
                {mensaje}
              </div>

            )}


            {!libroSeleccionado.reservado && (

              <form onSubmit={manejarReserva}>

                <div className="mb-3">

                  <label
                    htmlFor="nombre"
                    className="form-label"
                  >
                    Nombre del usuario
                  </label>

                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    placeholder="Escribe tu nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />

                </div>


                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Confirmar reserva
                </button>

              </form>

            )}


            {libroSeleccionado.reservado && (

              <div className="alert alert-danger">
                Este libro ya está reservado.
              </div>

            )}


            <button
              className="btn btn-outline-secondary w-100 mt-3"
              onClick={() => navigate('/')}
            >
              Volver a los libros
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Reservar