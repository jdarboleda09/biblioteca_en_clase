import { Link } from 'react-router-dom'

function Home({ libros }) {

  return (
    <div>

      <div className="text-center mb-5">

        <h1 className="display-5 fw-bold">
          Biblioteca - Juan
        </h1>

        <p className="lead">
          Consulta nuestros libros disponibles
        </p>

      </div>


      <div className="row g-4">

        {libros.map(libro => (

          <div className="col-md-6 col-lg-4" key={libro.id}>

            <div className="card h-100 shadow-sm libro-card">

              <div className="card-body">

                <h5 className="card-title fw-bold">
                  {libro.titulo}
                </h5>

                <p className="card-text">
                  <strong>Autor:</strong> {libro.autor}
                </p>


                {libro.reservado ? (

                  <span className="badge bg-danger">
                    Reservado
                  </span>

                ) : (

                  <Link
                    to={`/reservar?id=${libro.id}`}
                    className="btn btn-primary"
                  >
                    Reservar libro
                  </Link>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Home