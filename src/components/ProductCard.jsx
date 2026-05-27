import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ product, index }) => {
  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group card-hover bg-white rounded-lg overflow-hidden shadow-elegant transition-shadow duration-300 flex flex-col h-full cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-200 flex-shrink-0">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            {/* Title: Truncates to 1 line with '...' and reveals full text on card hover */}
            <h3
              title={product.name}
              className="text-xl font-bold text-dark-blue mb-2 line-clamp-1 group-hover:transition-all duration-300"
            >
              {product.name}
            </h3>

            {/* Description: Truncates to 2 lines with '...' and reveals full text on card hover */}
            <p
              title={product.shortDescription}
              className="text-gray-600 text-sm mb-6 line-clamp-2 group-hover:transition-all duration-300"
            >
              {product.shortDescription}
            </p>
          </div>

          {/* CTA */}
          <div className="w-full btn-primary text-center block mt-auto">
            View Details
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
