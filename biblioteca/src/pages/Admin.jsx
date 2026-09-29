import { useState } from 'react'

function Admin({ libros, editarReserva, eliminarReserva }) {

  const [editando, setEditando] = useState(null)
  const [nuevoNombre, setNuevoNombre] = useState('')


  // Comenzar a editar una reserva
  const comenzarEdicion = (libro) => {

    setEditando(libro.id)
    setNuevoNombre(libro.usuario)

  }


  // Guardar el cambio
  const guardarEdicion = (id) => {

    if (nuevoNombre.trim() === '') {
      alert('El nombre no puede estar vacío')
      return
    }

    editarReserva(id, nuevoNombre)

    setEditando(null)
    setNuevoNombre('')
  }


  // Cancelar edición
  const cancelarEdicion = () => {

    setEditando(null)
    setNuevoNombre('')

  }


  // Eliminar reserva
  const manejarEliminar = (id) => {

    const confirmar = window.confirm(
      '¿Estás seguro de que deseas eliminar esta reserva?'
    )

    if (confirmar) {
      eliminarReserva(id)
    }

  }


  return (
    <div>

      <div className="text-center mb-4">

        <h1 className="fw-bold">
          Administración de reservas
        </h1>

        <p className="text-muted">
          Gestiona las reservas realizadas en la biblioteca
        </p>

      </div>


      <div className="card shadow-sm">

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead className="table-dark">

                <tr>
                  <th>ID</th>
                  <th>Libro</th>
                  <th>Autor</th>
                  <th>Estado</th>
                  <th>Usuario</th>
                  <th>Acciones</th>
                </tr>

              </thead>


              <tbody>

                {libros.map((libro) => (

                  <tr key={libro.id}>

                    <td>
                      {libro.id}
                    </td>

                    <td className="fw-bold">
                      {libro.titulo}
                    </td>

                    <td>
                      {libro.autor}
                    </td>


                    <td>

                      {libro.reservado ? (

                        <span className="badge bg-danger">
                          Reservado
                        </span>

                      ) : (

                        <span className="badge bg-success">
                          Disponible
                        </span>

                      )}

                    </td>


                    <td>

                      {libro.reservado ? (

                        editando === libro.id ? (

                          <input
                            type="text"
                            className="form-control"
                            value={nuevoNombre}
                            onChange={(e) =>
                              setNuevoNombre(e.target.value)
                            }
                          />

                        ) : (

                          libro.usuario

                        )

                      ) : (

                        <span className="text-muted">
                          Sin reserva
                        </span>

                      )}

                    </td>


                    <td>

                      {libro.reservado && (

                        editando === libro.id ? (

                          <div className="d-flex gap-2">

                            <button
                              className="btn btn-success btn-sm"
                              onClick={() =>
                                guardarEdicion(libro.id)
                              }
                            >
                              Guardar
                            </button>

                            <button
                              className="btn btn-secondary btn-sm"
                              onClick={cancelarEdicion}
                            >
                              Cancelar
                            </button>

                          </div>

                        ) : (

                          <div className="d-flex gap-2">

                            <button
                              className="btn btn-warning btn-sm"
                              onClick={() =>
                                comenzarEdicion(libro)
                              }
                            >
                              Editar
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                manejarEliminar(libro.id)
                              }
                            >
                              Eliminar
                            </button>

                          </div>

                        )

                      )}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Admin