import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  const filteredProducts = products;

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-dark-blue to-dark-blue/80 text-white section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-bold mb-4"
          >
            Our <span className="text-accent-orange">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Browse our comprehensive collection of premium industrial gaskets
            and sealing solutions
          </motion.p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">No products found.</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-dark-blue text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Can't find what you need?</h2>
          <p className="text-gray-300 text-lg mb-8">
            We offer custom gasket solutions tailored to your specific
            requirements
          </p>
          <Link to="/#contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
