// Product array to hold all products
let products = [];

// Function to create a bar
function createBar(name, value, type) {
    const bar = document.createElement('div');
    bar.classList.add('bar');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = name;

    const valueDiv = document.createElement('div');
    valueDiv.classList.add('value');
    valueDiv.style.width = `${value * (type === 'price' ? 2 : 20)}px`; // Adjust bar size
    valueDiv.textContent = value;

    bar.appendChild(nameDiv);
    bar.appendChild(valueDiv);
    return bar;
}

// Function to display the bars in the graph
function displayBars() {
    const priceBarGraph = document.getElementById('price-bar-graph');
    const ratingBarGraph = document.getElementById('rating-bar-graph');

    // Clear the current bars
    priceBarGraph.innerHTML = '';
    ratingBarGraph.innerHTML = '';

    products.forEach(product => {
        const priceBar = createBar(product.name, product.price, 'price');
        const ratingBar = createBar(product.name, product.rating, 'rating');

        priceBarGraph.appendChild(priceBar);
        ratingBarGraph.appendChild(ratingBar);
    });
}

// Function to add a product
function addProduct() {
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const rating = document.getElementById('product-rating').value;

    if (name && price && rating) {
        // Add product to the array
        products.push({ name, price: Number(price), rating: Number(rating) });

        // Clear input fields
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-rating').value = '';

        // Update the bars
        displayBars();
    } else {
        alert('Please enter valid data for all fields');
    }
}

// Function to sort by price
function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    displayBars();
}

// Function to sort by rating
function sortByRating() {
    products.sort((a, b) => a.rating - b.rating);
    displayBars();
}

// Add event listeners
document.getElementById('add-product').addEventListener('click', addProduct);
document.getElementById('sort-price').addEventListener('click', sortByPrice);
document.getElementById('sort-rating').addEventListener('click', sortByRating);
