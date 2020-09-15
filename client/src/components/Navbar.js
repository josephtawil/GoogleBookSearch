import React from 'react'
import {useHistory} from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();

    const search = () => history.push("/");
    const saved = () => history.push("/saved");
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Google Books
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className = "navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" onClick={search}>
                                Search
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={saved}>
                                Saved
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar
