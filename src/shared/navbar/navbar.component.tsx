import './navbar.component.css';
import logo from '../../assets/img/logo-soho.png';

interface Props {

}

const NavbarComponent: React.FC<Props> = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <img src={logo} id="logo-app" alt="LogoEmpresa.png" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href='/' className="nav-link active">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link" >Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link">Casos de éxito</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link">Únete al equipo</a>
                            </li>
                            <li className="nav-item">
                                <a href='/' className="nav-link">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarComponent;