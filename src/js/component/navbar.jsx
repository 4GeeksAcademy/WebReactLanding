import React from "react";

export const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{paddingInlineEnd:"100px", paddingInlineStart:"100px"}}>
    <a className="navbar-brand text-light" href="#"><img id="wolf" src="https://purepng.com/public/uploads/large/purepng.com-the-witcher-logowitcherthe-witcherandrzej-sapkowskiwriterfantasy-serieswitcher-geralt-of-riviawitchersbooksmonster-hunterssupernaturaldeadly-beastsseriesvideo-gamesxbox-1701528661197tz2s1.png"></img>  The Witcher</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
            <a className="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-light" href="#">Personajes</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-light" href="#">Universo</a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-light" href="#">Libros</a>
        </li>
        </ul>
    </div>
</nav>
)


