import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", data: {} });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name"); // default sorting by name

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      data: { ...prev.data, [name]: value },
    }));
  };

  const addProduct = () => {
    if (!newProduct.name) return;

    fetch("https://api.restful-api.dev/objects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]);
        setNewProduct({ name: "", data: {} }); // Reset input fields
      });
  };

  const deleteProduct = (id) => {
    fetch(`https://api.restful-api.dev/objects/${id}`, { method: "DELETE" })
      .then(() => setProducts(products.filter((product) => product.id !== id)));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Sorting products based on the selected sort order
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "price") {
      // Handle sorting by price
      const priceA = a.data?.price || 0;
      const priceB = b.data?.price || 0;
      return priceA - priceB;
    } else if (sortOrder === "capacity") {
      // Handle sorting by capacity
      const capacityA = a.data?.capacity || 0;
      const capacityB = b.data?.capacity || 0;
      return capacityA - capacityB;
    } else {
      // Default sorting by name
      return a.name.localeCompare(b.name);
    }
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#eaf2eb] dark:bg-[#2f3630]">
      <h2 className="text-2xl font-bold mb-4 text-[#333] dark:text-white">Products List</h2>

      {/* Search Input */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded flex-1 bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Add Product Form */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          className="p-2 border rounded flex-1 bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Enter product color"
          className="p-2 border rounded flex-1 bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
          value={newProduct.data.color || ""}
          onChange={handleDetailsChange}
        />
        <input
          type="text"
          name="capacity"
          placeholder="Enter product capacity"
          className="p-2 border rounded flex-1 bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
          value={newProduct.data.capacity || ""}
          onChange={handleDetailsChange}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={addProduct}
        >
          Add Product
        </button>
      </div>

      {/* Sort Options */}
      <div className="mb-4 flex gap-2">
        <select
          className="p-2 border rounded bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
          <option value="capacity">Sort by Capacity</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-[#3c4a47] shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-[#444] border-b">
            <tr>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">ID</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">NAME</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">DETAILS</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className="border-b hover:bg-gray-50 dark:hover:bg-[#444]">
                <td className="px-4 py-2 text-[#333] dark:text-white">{index + 1}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">{product.name}</td>
                <td className="px-4 py-2 text-[#333] dark:text-white">
                  {product.data ? (
                    <ul>
                      {Object.entries(product.data).map(([key, value]) => (
                        <li key={key}>
                          <strong>{key}:</strong> {value}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "N/A"
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default Products;
