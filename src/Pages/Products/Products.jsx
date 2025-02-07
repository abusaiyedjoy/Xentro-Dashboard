import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", data: {} });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("name");

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
        setNewProduct({ name: "", data: {} });
      });
  };

  const deleteProduct = (id) => {
    fetch(`https://api.restful-api.dev/objects/${id}`, { method: "DELETE" })
      .then(() => setProducts(products.filter((product) => product.id !== id)));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "price") {
      const priceA = a.data?.price || 0;
      const priceB = b.data?.price || 0;
      return priceA - priceB;
    } else if (sortOrder === "capacity") {
      const capacityA = a.data?.capacity || 0;
      const capacityB = b.data?.capacity || 0;
      return capacityA - capacityB;
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#eaf2eb] dark:bg-[#2f3630]">
      <h2 className="text-2xl font-bold mb-4 text-green-600">All Products </h2>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
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
        {/* Search Input */}
        <div className="mb-4 flex gap-2 w-[300px]">
          <input
            type="text"
            placeholder="🔍 Search products..."
            className="p-2 border rounded flex-1 bg-gray-200 dark:bg-[#444] dark:text-white border-gray-300 dark:border-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <h1 className="font-medium my-2">Add a Product</h1>

      {/* Add Product Form */}
      <div className="mb-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
          className="p-2 bg-green-700 text-white rounded w-[150px] hover:bg-green-800 font-medium"
          onClick={addProduct}
        >
          Add Product
        </button>
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-[#3c4a47] shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 dark:bg-[#444] border-b">
            <tr>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">NO.</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">NAME</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">DETAILS</th>
              <th className="px-4 py-2 text-left text-[#333] dark:text-white">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className="border-b hover:bg-gray-50 dark:hover:bg-[#444]">
                <td className="px-4 py-2 text-green-600 text-lg font-medium dark:text-green-600">{index + 1}.</td>
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
                <td className="px-4 py-2 text-center">
                  <button
                    className="text-red-500 text-center hover:text-red-700"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <MdDeleteForever size={25} />
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
