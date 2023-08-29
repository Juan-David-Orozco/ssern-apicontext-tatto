import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top text-light">
      <div className="container-fluid justify-content-between">
        <div className='d-flex justify-content-between'>
          <Link to="/" className="navbar-brand" >
            <h3 className="logo my-auto py-0">Logo</h3>
          </Link>
          <button
            className="navbar-toggler" type="button"
            data-bs-toggle="collapse" data-bs-target="#navMenu"
            aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className='d-flex justify-content-between'>
          <div className="collapse navbar-collapse justify-content-around my-auto" id="navMenu">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link to="/precios" className="nav-link">Precios</Link>
              </li>
            </ul>
          </div>
          <div className="navbar align-content-between my-auto text-white">
            <Link to="https://www.facebook.com/" target="_blank" className="mx-md-2 mx-sm-1 px-2">
              <i className="fa fa-facebook-square"></i>
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className="mx-md-2 mx-sm-1 px-2">
              <i className="fa fa-instagram"></i>
            </Link>
            <Link to="https://www.twitter.com/" target="_blank" className="mx-md-2 mx-sm-1 px-2">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="https://www.youtube.com/" target="_blank" className="mx-md-2 mx-sm-1 px-2">
              <i className="fa fa-youtube-play"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}