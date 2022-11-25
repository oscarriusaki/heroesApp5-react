import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login',{
            replace: true,
        })
    }   

  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`} 
                            to='/'
                        >Marvel
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-link ${isActive ? 'active': ''}`}
                            to='/dc'
                        >DC
                        </NavLink>
                        <NavLink
                            className={({isActive}) => `nav-link ${isActive ? 'active': ''}`}
                            to='/search'
                        >Search
                        </NavLink>
                    </ul>
                </div>
                <div className="collapse navbar-collapse w-100 order-3 dual-collapse2 justify-content-end">
                    <ul className='navbar-nav m1-auto'>
                        <span className='nav-item nav-link text-primary'>Oscar</span>
                        <button 
                            className='nav-item nav-link btn'
                            onClick={onLogout}
                            >Logout
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
