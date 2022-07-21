import React from 'react';
import './Navbar.scss';
import logo from '../../assets/Images/happydeco-logo.png';

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <button id ="toggler" className='navbar-toggler collapsed' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <a className="navbar-brand mx-auto" href="#">
          <img src={logo} alt="Logo" width="120vw" />
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline mx-auto my-2 my-lg-0">
            <input class="form-control mx-sm-2" type="search" placeholder="Buscar productos" aria-label="Search"></input>
          </form>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a id="home" class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-box-tissue"></i>
                  Bandejas</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-box"></i>
                  Cajas</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-hanukiah"></i>
                  Candelabros</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-basket-shopping"></i>
                  Cestas</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-box-archive"></i>
                  Cestamantas</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                 <i class="fa-solid fa-sign-hanging"></i>
                  Colgadores</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-person-booth"></i>
                  Cortinas</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-jar"></i>
                  Jarrones</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-images"></i>
                  Marcos</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-shirt"></i>
                  Perchas</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-circle-dot"></i>
                  Tiradores</a>
                </li>
                <li><hr class="dropdown-divider"></hr></li>
                <li><a class="dropdown-item" href="#">
                  <i class="fa-solid fa-cake-candles"></i>
                  Velas</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a id="carrito" class="nav-link active" aria-current="page" href="#">Carrito de compra</a>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#" id="btn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <button className="upload-product" type="submit"><i class="fa-solid fa-circle-plus"></i>Subir producto</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;