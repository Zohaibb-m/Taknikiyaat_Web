import React from "react";
import { Link,BrowserRouter as Router} from 'react-router-dom'

function Navbar(){
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="#">Taknikiyaat</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#">Link</Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
                    </div>
            </nav>
        </Router>
    );
}
/*
<i classNameName="fa fa-graduation-cap fa-lg mr-2"></i>
<i className="fa fa-home fa-fw mr-1"></i>
<i className="fa fa-th-list fa-fw mr-1"></i>
<i className="fa fa-info-circle fa-fw mr-1"></i>
<i className="fa fa-phone fa-fw fa-rotate-180 mr-1"></i>
<i className="fa fa-user-plus fa-fw mr-1"></i>
<i className="fa fa-sign-in fa-fw mr-1"></i>
*/
export default Navbar;