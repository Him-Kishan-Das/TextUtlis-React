import React from 'react'
import propTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <buthrefn className="navbar-toggler" type="button" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </buthrefn>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">{props.About}</a>
              </li> */}

            </ul>
            {/* <form className="d-flex">
              <input clasnsName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <buthrefn className="btn btn-primary" type="submit">Search</buthrefn>
            </form> */}
            <div className={`form-check form-switch text-${props.mode===`light`?'dark':'light'}`}>
              <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>

          </div>
        </div>

      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: propTypes.string,
  About: propTypes.string
}

Navbar.defaultProps = {
  title: 'Set title here',
  About: 'About text here'
};