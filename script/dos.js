const products = [
    { id: 1, name: "Apiret 180 mg/5mL Solución Oral 120 mL", category: "solucion", audience: "niño", image: "img/gallery7.png", boton: "Mas información", presentacion: "Solución", sintoma: "dolor" },
    { id: 2, name: "Apiret 500 mg 10 tabletas", category: "tableta", audience: "adulto", image: "img/gallery8.png", boton: "Mas información", presentacion: "Tabletas", sintoma: "dolor" },
    { id: 3, name: "Apiret Forte 650 mg x 10 Tabletas", category: "tableta", audience: "adulto", image: "img/gallery9.png", boton: "Mas información", presentacion: "Tabletas", sintoma: "dolor" },
    { id: 4, name: "Apiret 180 mg/5mL Solución Oral 60 mL", category: "solucion", audience: "niño", image: "img/gallery7.png", boton: "Mas información", presentacion: "Solución", sintoma: "dolor" },
    { id: 5, name: "Apiret Supositorio 250mg x 6", category: "Supositorio", audience: "niño", image: "img/images.jpg", boton: "Mas información", presentacion: "Supositorio", sintoma: "dolor" },
    { id: 6, name: "Apiret Supositorio 125mg x 6", category: "Supositorio", audience: "niño", image: "img/images.jpg", boton: "Mas información", presentacion: "Supositorio", sintoma: "dolor" },
    { id: 7, name: "Apiret Flu Noche Granulado 8gr X 6 Sobres", category: "Granulado", audience: "niño", image: "img/apiretflufluy.png", boton: "Mas información", presentacion: "Granulado", sintoma: "refrio", sintoma1:"gripe" },
    { id: 8, name: "Apiret Flu Dia Granulado 8gr X 6 Sobres", category: "Granulado", audience: "niño", image: "img/apiretflufluy.png", boton: "Mas información", presentacion: "Granulado", sintoma: "refrio", sintoma1:"gripe" }
];

// Determinar el tipo de página (adulto, niño o productos)
const pageType = (() => {
    const path = window.location.pathname;
    if (path.includes('adulto.html')) return 'adulto';
    if (path.includes('niño.html')) return 'niño';
    return 'productos'; // Página por defecto
})();

function renderProducts(productsToRender) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    if (productsToRender.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x mb-3 text-muted"></i>
                <h3>No se encontraron productos</h3>
                <p>Intenta ajustando los filtros de búsqueda</p>
            </div>
        `;
        return;
    }
    
    productsToRender.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body row">
                    <h5 class="card-title col-12 text-start my-3"><li>${product.name}</li></h5>
                    <div class="col-12 text-center">
                        <a href="#" class="btn btn-outline-primary d-inline-block my-3 fw-bold">${product.boton}</a>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
    const selectedPresentacion = Array.from(document.querySelectorAll('.filter-presentacion:checked')).map(cb => cb.value);
    const selectedSintomas = Array.from(document.querySelectorAll('.filter-sintomas:checked')).map(cb => cb.value);
    
    let filteredProducts = products;
    
    // Filtrar por categoría/audiencia
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.audience) || selectedCategories.includes(product.category)
        );
    }

    if (selectedPresentacion.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedPresentacion.includes(product.presentacion)
        );
    }

    if (selectedSintomas.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedSintomas.includes(product.sintoma) || selectedSintomas.includes(product.sintoma1)
        );
    }
    
    // Ordenar productos
    const sortOption = document.getElementById('sort-select').value;
    switch(sortOption) {
        case 'az':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'za':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    
    renderProducts(filteredProducts);
    document.querySelector('.results-count').textContent = `${filteredProducts.length} de ${products.length} productos`;
    
    // Actualizar texto de filtros aplicados
    const filteredText = document.querySelector('.filtered-text');
    if (selectedCategories.length > 0 || selectedPresentacion.length > 0 || selectedSintomas.length > 0) {
        let text = ' (filtrado';
        if (selectedCategories.length > 0) text += ` por público: ${selectedCategories.join(', ')}`;
        if (selectedPresentacion.length > 0) text += `, presentación: ${selectedPresentacion.join(', ')}`;
        if (selectedSintomas.length > 0) text += `, síntomas: ${selectedSintomas.join(', ')}`;
        text += ')';
        filteredText.textContent = text;
    } else {
        filteredText.textContent = '';
    }
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Configurar según el tipo de página
    if (pageType === 'adulto') {
        document.getElementById('filter-adulto').checked = true;
        document.querySelectorAll('.filter-category').forEach(el => {
            el.closest('.form-check').classList.add('hidden-filter');
        });
        document.querySelector('h1').textContent = 'Productos para Adultos';
    } else if (pageType === 'niño') {
        document.getElementById('filter-niño').checked = true;
        document.querySelectorAll('.filter-category').forEach(el => {
            el.closest('.form-check').classList.add('hidden-filter');
        });
        document.querySelector('h1').textContent = 'Productos para Niños';
    }
    
    // Aplicar filtros automáticamente al cargar
    applyFilters();
    
    // Aplicar filtros automáticamente al cambiar cualquier checkbox
    document.querySelectorAll('.filter-category, .filter-sintomas, .filter-presentacion').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Aplicar filtros al cambiar el ordenamiento
    document.getElementById('sort-select').addEventListener('change', applyFilters);
    
    // Botón para reiniciar filtros
    document.getElementById('reset-filters').addEventListener('click', function() {
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        document.getElementById('sort-select').value = 'default';
        applyFilters();
    });
});