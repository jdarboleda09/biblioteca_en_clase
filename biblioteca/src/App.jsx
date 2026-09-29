import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reservar from './pages/Reservar'

function App() {

  const [libros, setLibros] = useState([
    {
      id: 1,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      reservado: false,
      usuario: ''
    },
    {
      id: 2,
      titulo: 'El principito',
      autor: 'Antoine de Saint-Exupéry',
      reservado: false,
      usuario: ''
    },
    {
      id: 3,
      titulo: 'Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      reservado: false,
      usuario: ''
    },
    {
      id: 4,
      titulo: '1984',
      autor: 'George Orwell',
      reservado: false,
      usuario: ''
    },
    {
      id: 5,
      titulo: 'La Odisea',
      autor: 'Homero',
      reservado: false,
      usuario: ''
    }
  ])

  const reservarLibro = (id, nombreUsuario) => {

    setLibros(librosActuales =>
      librosActuales.map(libro =>
        libro.id === id
          ? {
              ...libro,
              reservado: true,
              usuario: nombreUsuario
            }
          : libro
      )
    )
  }

  return (
    <div className="d-flex flex-column min-vh-100">

      <Header />

      <main className="container py-4 flex-grow-1">

        <Routes>

          <Route
            path="/"
            element={<Home libros={libros} />}
          />

          <Route
            path="/reservar"
            element={
              <Reservar
                libros={libros}
                reservarLibro={reservarLibro}
              />
            }
          />

        </Routes>

      </main>

      <Footer />

    </div>
  )
}

export default App