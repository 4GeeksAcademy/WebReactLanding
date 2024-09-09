import React from "react";

export const Navbar = () => (
<nav class="navbar navbar-expand-lg navbar-light bg-dark" style={{paddingInlineEnd:"100px", paddingInlineStart:"100px"}}>
    <a class="navbar-brand text-light" href="#">The Witcher</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
            <a class="nav-link text-light" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="#">Personajes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="#">Universo</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-light" href="#">Libros</a>
        </li>
        </ul>
    </div>
</nav>
)


