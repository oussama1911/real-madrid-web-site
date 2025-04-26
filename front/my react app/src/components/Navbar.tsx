import { Link } from 'react-router-dom';
import '../styling/navbar.css';
import useAuth from '../utils/useAuth';


const Navbar = () => {
    const { authInfo, logout } = useAuth();
    
    return (
        <div className="navbar">

            <div className="nav-left">
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOxITiGZuLkhpVxvQJp2tKaPNk-zCLxvicXg&s' />
                <Link className='realmadrid' to="/"  >Real Madrid </Link>

            </div>

            <div className="links">
                <Link to="/" >Home</Link>
                <select
                    className="navbar-dropdown-club"
                    onChange={(e) => {
                        if (e.target.value) {
                            window.location.href = e.target.value;
                        }
                    }}
                >
                    <option value="">Club</option>
                    <option value="/history">History</option>
                    <option value="/Achievements">Achievements</option>
                </select>


                <select className="navbar-dropdown-equipe"
                    onChange={(e) => {
                        if (e.target.value) {
                            window.location.href = e.target.value;
                        }
                    }}
                >

                    <option value=""> equipe a </option>
                    <option value="/players">squad </option>
                    <option value="/schedule"> schedule</option>
                    <option value="/ranking"> ranking</option>
                </select>
                <Link to="/Contact" >Contact</Link>
            </div>

            <div className="nav-right">
                <Link to='/products'><i className="fa-solid fa-bag-shopping"></i>   Store</Link>
                {authInfo && <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i>   Cart</Link>}
                {authInfo?.isAdmin && <Link to='/admin'><i className="fa-solid fa-user-secret"></i>   Admin</Link>}


                {authInfo ? (
                    <a className='logout-nav' onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket"></i>  logout</a>
                ) : (
                    <div className='login-nav'>
                        <Link to='/login'><i className="fa-solid fa-arrow-right-to-bracket"></i>  login</Link>
                        <Link to='/signup'><i className="fa-solid fa-user-plus"></i>  signup</Link>
                    </div>
                )}

            </div>



        </div>

    )
}

export default Navbar;

