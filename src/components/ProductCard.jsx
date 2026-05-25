import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card-hover bg-white rounded-lg overflow-hidden shadow-elegant"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-blue mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {product.applications.slice(0, 2).map((app, idx) => (
              <span key={idx} className="text-xs bg-light-gray text-dark-blue px-2 py-1 rounded">
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/product/${product.id}`}
          className="w-full btn-primary text-center block"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default ProductCard
