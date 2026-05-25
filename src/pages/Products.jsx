import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            Browse our comprehensive collection of premium industrial gaskets and sealing solutions
          </motion.p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="section-padding bg-light-gray">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border-2 border-dark-blue/20 rounded-lg focus:outline-none focus:border-accent-orange transition-colors"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-accent-orange text-white'
                  : 'bg-white text-dark-blue hover:bg-accent-orange hover:text-white'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.name
                    ? 'bg-accent-orange text-white'
                    : 'bg-white text-dark-blue hover:bg-accent-orange hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <p className="text-gray-600 text-lg mb-8">
            Showing <span className="font-bold text-dark-blue">{filteredProducts.length}</span> products
          </p>
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
              <p className="text-gray-600 text-lg">No products found matching your search.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
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
            We offer custom gasket solutions tailored to your specific requirements
          </p>
          <button className="btn-primary">Request Custom Solution</button>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
