class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú de Navegación Mejorado</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- NAVEGADOR -->
<header class="sticky-sm-top">
<nav class="navbar navbar-expand-lg bg-apiret borde-bajo py-0">
    <div class="container ">
        <!-- Botón Hamburguesa - Solo visible en móvil -->
        <button class="navbar-toggler custom-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
            <span class="navbar-toggler-icon custom-toggler-icon"></span>
        </button>
        
        <!-- Logo -->
        <a class="navbar-brand mx-auto mx-lg-0 px-5" href="index.html">
            <img src="img/6.png" alt="Logo" style="height: 60px; width: auto;">
        </a>
        
        <!-- Espaciado para alinear en desktop -->
        <div class="d-none d-lg-block" style="width: 0px;"></div>

        <!-- Menú Colapsable -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="equal-width-menu">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown text-start">
                        <a class="nav-link dropdown-toggle text-white fw-bold " href="#" role="button" data-bs-toggle="dropdown"><h4 class="pt-4 ps-4">Productos</h4></a>
                        <ul class="dropdown-menu text-start">
                            <li><a class="dropdown-item" href="#">Medicamentos</a></li>
                            <li><a class="dropdown-item" href="#">Suplementos</a></li>
                            <li><a class="dropdown-item" href="#">Granulados</a></li>
                        </ul>
                    </li>
                </ul>
                
                <ul class="navbar-nav">
                    <li class="nav-item dropdown text-start">
                        <a class="nav-link dropdown-toggle text-white fw-bold " href="#" role="button" data-bs-toggle="dropdown"><h4 class="pt-4">Adultos</h4></a>
                        <ul class="dropdown-menu text-start">
                            <li><a class="dropdown-item" href="dolor.html">Dolor y fiebre</a></li>
                            <li><a class="dropdown-item" href="#">Vitaminas</a></li>
                            <li><a class="dropdown-item" href="#">Cuidado crónico</a></li>
                        </ul>
                    </li>
                </ul>
                
                <ul class="navbar-nav">
                    <li class="nav-item dropdown text-start">
                        <a class="nav-link dropdown-toggle text-white fw-bold " href="#" role="button" data-bs-toggle="dropdown"><h4 class="pt-4">Niños</h4></a>
                        <ul class="dropdown-menu text-start">
                            <li><a class="dropdown-item" href="#">Jarabes</a></li>
                            <li><a class="dropdown-item" href="#">Vitaminas infantiles</a></li>
                            <li><a class="dropdown-item" href="niñoscopy.html">Cuidado infantil</a></li>
                        </ul>
                    </li>
                </ul>
                
                <ul class="navbar-nav">
                    <li class="nav-item dropdown text-start">
                        <a class="nav-link dropdown-toggle text-white fw-bold " href="#" role="button" data-bs-toggle="dropdown"><h4 class="pt-4 ">Dolencias</h4></a>
                        <ul class="dropdown-menu text-start">
                            <li><a class="dropdown-item" href="dolor.html">Dolor de cabeza</a></li>
                            <li><a class="dropdown-item" href="malestar.html">Gripe y resfriado</a></li>
                            <li><a class="dropdown-item" href="#">Problemas digestivos</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
</header>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
        `;
    }
}

customElements.define('header-component', Header);