import logo from '../assets/mrdrink.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom' 

const NavBar = () => {
    return (
        <div className="App">
            <header>
                <Link to='/'><img src= {logo} alt="logo de Mr Drinks" width="70%" className="logo" /></Link>
                    <nav className='categories'>
                        <ul>
                            <Link to='/categoria/vinos'><li>Vinos</li></Link>
                            <Link to='/categoria/espumantes'><li>Espumantes</li></Link>
                            <Link to='/categoria/whiskies'><li>Whiskies</li></Link>
                            <Link to='/categoria/gin'><li>Gin</li></Link>
                            <Link to='/categoria/vodka'><li>Vodka</li></Link>
                            <Link to='/categoria/aperitivos'><li>Aperitivos</li></Link>
                            <Link to='/categoria/licores'><li>Licores</li></Link>
                            <Link to='/categoria/cervezas'><li>Cervezas</li></Link>
                            <Link to='/categoria/sin-alcohol'><li>Sin alcohol</li></Link>
                        </ul>
                    </nav>
                    <div className='buttons'>
                        <CartWidget />
                        <button className='botonUser'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                        </button>
                    </div>
                </header> 
        </div>
    );
}

export default NavBar;