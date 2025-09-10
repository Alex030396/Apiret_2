// Datos de ejemplo para los productos
const products = [
    { id: 1, name: "Zapatillas Deportivas Nike", price: 89.99, category: "deporte", audience: "adulto", brand: "nike", image: "img/gripe1.png", description: "Zapatillas Nike para running con amortiguación de alta calidad." },
    { id: 2, name: "Camiseta Adidas Niño", price: 24.99, category: "ropa", audience: "niño", brand: "adidas", image: "https://via.placeholder.com/300x300?text=Camiseta+Niño", description: "Camiseta deportiva para niños, cómoda y resistente." },
    { id: 3, name: "Short Deportivo Puma", price: 32.50, category: "deporte", audience: "adulto", brand: "puma", image: "https://via.placeholder.com/300x300?text=Short+Puma", description: "Short deportivo para adultos, ideal para entrenamiento." },
    { id: 4, name: "Pelota de Fútbol", price: 19.99, category: "deporte", audience: "niño", brand: "nike", image: "https://via.placeholder.com/300x300?text=Pelota+Fútbol", description: "Pelota oficial tamaño profesional para partidos." },
    { id: 5, name: "Sudadera con Capucha Adulto", price: 45.99, category: "ropa", audience: "adulto", brand: "adidas", image: "https://via.placeholder.com/300x300?text=Sudadera+Adidas", description: "Sudadera con capucha para clima frío, unisex." },
    { id: 6, name: "Zapatos Escolares Niño", price: 35.75, category: "calzado", audience: "niño", brand: "puma", image: "https://via.placeholder.com/300x300?text=Zapatos+Escolares", description: "Zapatos resistentes para uso escolar diario." },
    { id: 7, name: "Mochila Deportiva", price: 39.99, category: "accesorios", audience: "adulto", brand: "nike", image: "https://via.placeholder.com/300x300?text=Mochila+Deportiva", description: "Mochila con compartimentos para ropa y equipo deportivo." },
    { id: 8, name: "Gorra Baseball", price: 22.99, category: "accesorios", audience: "niño", brand: "adidas", image: "https://via.placeholder.com/300x300?text=Gorra+Baseball", description: "Gorra ajustable con protección UV." },
    { id: 9, name: "Medias Deportivas Pack x3", price: 15.50, category: "ropa", audience: "adulto", brand: "puma", image: "https://via.placeholder.com/300x300?text=Medias+Deportivas", description: "Pack de 3 pares de medias técnicas para deporte." }
];

// Función para renderizar productos
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
            <div class="product-card">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <p class="product-shipping mb-2">Envío gratis</p>
                    <p class="text-muted small">${product.description}</p>
                    <button class="btn btn-outline-primary w-100">Agregar al carrito</button>
                </div>
            </div>
        `;
        container.appendChild(col);
    });
}

// Función para aplicar filtros
function applyFilters() {
    const selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
    const selectedPrices = Array.from(document.querySelectorAll('.filter-price:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-brand:checked')).map(cb => cb.value);
    
    let filteredProducts = products;
    
    // Filtrar por categoría/audiencia
    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedCategories.includes(product.audience) || selectedCategories.includes(product.category)
        );
    }
    
    // Filtrar por precio
    if (selectedPrices.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return selectedPrices.some(priceRange => {
                const [min, max] = priceRange.split('-').map(Number);
                return product.price >= min && product.price <= max;
            });
        });
    }
    
    // Filtrar por marca
    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product => 
            selectedBrands.includes(product.brand)
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
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
    }
    
    renderProducts(filteredProducts);
    document.querySelector('.results-count').textContent = `${filteredProducts.length} de ${products.length} productos`;
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todos los productos al cargar
    renderProducts(products);
    
    // Aplicar filtros automáticamente al cambiar cualquier checkbox
    document.querySelectorAll('.filter-category, .filter-price, .filter-brand').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    // Aplicar filtros al cambiar el ordenamiento
    document.getElementById('sort-select').addEventListener('change', applyFilters);
});