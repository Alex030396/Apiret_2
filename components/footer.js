class Footer extends HTMLElement {
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
<!-- FOOTER PIE DE PAGINA -->
<footer class="bg-apiret py-5">
    <div class="container ">
        <div class=" row ">
            <div class="col-12 col-lg-4">
                <h1 class="text-white text-center">Formulario</h1>
                <div class="form-container">
                    <form>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label letter-forte fw-bold">Nombre</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label letter-forte fw-bold">Correo Electronico</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label letter-forte fw-bold" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary ">Submit</button>
                    </form>
                </div>
            </div>
            <div class="col-12 col-lg-8 ps-0 ps-xl-5 mt-5 mt-lg-0">
                <div class="container row">
                    <ul class="col-12 col-md-3">
                        <li class="list_sin">
                            <h3 class="text-white fw-bold">Productos</h3>
                            <ul class="list_sin">
                                <li><a class="dropdown-item my-4" href="#">Medicamentos</a></li>
                                <li><a class="dropdown-item mb-4" href="#">Suplementos</a></li>
                                <li><a class="dropdown-item mb-4" href="#">Granulados</a></li>
                            </ul>
                        </li>
                    </ul>

                    
                    <hr class="divider border-primary">
                    
                    
                    <ul class="col-12 col-md-3">
                        <li class="list_sin">
                            <h3 class="text-white fw-bold">Adultos</h3>
                            <ul class="list_sin">
                                <li><a class="dropdown-item my-4" href="dolor.html">Dolor y fiebre</a></li>
                                <li><a class="dropdown-item mb-4" href="#">Vitaminas</a></li>
                                <li><a class="dropdown-item mb-4" href="#">Cuidado crónico</a></li>
                            </ul>
                        </li>
                    </ul>

                    
                    <hr class="divider border-primary">
                    
                    
                    <ul class="col-12 col-md-3">
                        <li class="list_sin">
                            <h3 class="text-white fw-bold">Niños</h3>
                            <ul class="list_sin">
                                <li><a class="dropdown-item my-4" href="#">Jarabes</a></li>
                                <li><a class="dropdown-item mb-4" href="#">Vitaminas infantiles</a></li>
                                <li><a class="dropdown-item mb-4" href="ninoscopy.html">Cuidado infantil</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                    
                    <hr class="divider border-primary">
                    
                    
                    <ul class="col-12 col-md-3">
                        <li class="list_sin">
                            <h3 class="text-white fw-bold ">Dolencias</h3>
                            <ul class="list_sin">
                                <li><a class="dropdown-item my-4" href="dolor.html">Dolor de cabeza</a></li>
                                <li><a class="dropdown-item mb-4" href="malestar.html">Gripe y resfriado</a></li>
                                <li><a class="dropdown-item mb-4" href="#">Problemas digestivos</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="container">
                    <hr class="my-4 border-primary border-1 opacity-50">          
                </div>
                <div>
                    <p class="text-white">© Oftalmi, C. A. RIF J-00203064-0 | Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>            
        `;
    }
}

customElements.define('footer-component', Footer);