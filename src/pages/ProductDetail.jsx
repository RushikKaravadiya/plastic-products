import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data/products'
import { ArrowLeft, Check, MessageCircle } from 'lucide-react'

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-blue mb-4">Product Not Found</h1>
          <Link 
            to="/products"
            className="btn-primary inline-block"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(
    p => p.id !== product.id
  ).slice(0, 3)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-light-gray py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/products"
            className="flex items-center gap-2 text-accent-orange hover:text-accent-orange/80"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-light-gray rounded-lg p-6 sticky top-24">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-elegant"
                />
                <div className="mt-4 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-20 bg-gray-200 rounded-lg cursor-pointer hover:ring-2 ring-accent-orange transition-all"
                    >
                      <img
                        src={product.image}
                        alt={`View ${i + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="text-accent-orange font-semibold">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 text-lg mb-6">
                {product.fullDescription}
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-600 font-semibold">In Stock</span>
              </div>

              {/* Specifications */}
              <div className="bg-light-gray rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-dark-blue mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-gray-600 capitalize">{key}:</span>
                      <span className="font-semibold text-dark-blue">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mb-8">
                <a
                  href={`https://wa.me/919714586233?text=I am interested in your product - ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 btn-secondary"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-light-gray rounded-lg p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-dark-blue mb-6">Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.applications.map((app, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="text-accent-orange" size={24} />
                  <span className="text-gray-600">{app}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-dark-blue mb-6">Related Products</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/product/${related.id}`}
                    className="card-hover bg-white rounded-lg overflow-hidden shadow-elegant"
                  >
                    <div className="h-48 overflow-hidden bg-gray-200">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-dark-blue mb-2">{related.name}</h4>
                      <p className="text-gray-600 text-sm">{related.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="section-padding bg-dark-blue text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need More Information?</h2>
          <p className="text-gray-300 mb-8">
            Our expert team is ready to help you find the perfect solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="btn-primary">Send Inquiry</button> */}
            <a
              href="https://wa.me/919714586233"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProductDetail
