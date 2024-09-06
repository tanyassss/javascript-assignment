# Product Bar Graph Application

This web application allows users to input product data (name, price, and ratings), and displays that data dynamically in a bar graph format. The graphs for both price and ratings update in real-time as new data is added. Additionally, the user can sort the graphs based on price or ratings.

## Features

- Add products with a name, price, and rating.
- Visualize product prices and ratings as bar graphs.
- Sort the bars by price or rating.
- Dynamic updates when new products are added.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, etc.).

### Installation

1. Clone the repository or download the ZIP file.
    ```bash
    git clone https://github.com/yourusername/product-bar-graph.git
    ```

2. Open the `index.html` file in your preferred web browser.

### Files

- `index.html`: Contains the basic HTML structure of the application.
- `style.css`: Contains CSS styles for layout and bar graph visualization.
- `script.js`: Contains JavaScript logic for handling inputs, dynamic updates, and sorting functionality.

## How to Use

### Adding a Product

1. Enter a **product name** in the first input field.
2. Enter the **price** of the product in the second input field.
3. Enter the **rating** (1-5) of the product in the third input field.
4. Click the **"Add Product"** button to add the product to the list.
   - The price and rating of the product will be displayed in bar graph form under their respective sections.

### Sorting the Graphs

- **Sort by Price**: Click the **"Sort by Price"** button to sort the products in ascending order by price.
- **Sort by Rating**: Click the **"Sort by Rating"** button to sort the products in ascending order by rating.

### Real-Time Updates

- The graphs automatically update whenever a new product is added.
- Adding new products or sorting by price or rating will instantly reflect changes in the bar graphs.

## Example

1. **Initial Input**:
   - Product Name: `Apple`
   - Price: `2`
   - Rating: `4`

2. **Adding another product**:
   - Product Name: `Orange`
   - Price: `3`
   - Rating: `5`

   After adding both products, the bars for price and rating will be visible.

3. **Sorting**:
   - Click **"Sort by Price"** to see the bars sorted by price in ascending order.
   - Click **"Sort by Rating"** to see the bars sorted by rating in ascending order.



## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling the layout and visual representation of the bar graphs.
- **JavaScript**: Handling input, bar graph creation, sorting, and dynamic updates.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
