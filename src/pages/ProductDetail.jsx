// components/ProductDetail.jsx

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/products";
import {
  ArrowLeft,
  Check,
  MessageCircle,
  PackageCheck,
  PackageX,
} from "lucide-react";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedMedia, setSelectedMedia] = useState("");

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedMedia(product.images[0]);
    } else if (product?.videos?.length > 0) {
      setSelectedMedia(product.videos[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dark-blue mb-4">
            Product Not Found
          </h1>

          <Link to="/products" className="btn-primary inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-light-gray py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <Link
            to="/products"
            className="flex items-center text-accent-orange hover:text-accent-orange/80 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Products</span>
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* LEFT SIDE IMAGES AND VIDEOS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-24">
                {/* BIG MEDIA DISPLAY */}
                <div className="bg-light-gray rounded-2xl p-4 mb-4">
                  {selectedMedia?.endsWith('.mp4') ? (
                    <video
                      key={selectedMedia} // Thumbnail click karta j video automatic chalu thase
                      src={selectedMedia}
                      className="w-full h-[450px] object-contain rounded-xl"
                      controls
                      autoPlay
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={selectedMedia}
                      alt={product.name}
                      className="w-full h-[450px] object-contain rounded-xl"
                    />
                  )}
                </div>

                {/* THUMBNAILS */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-accent-orange/50 scrollbar-track-light-gray">
                  {/* Image Thumbnails */}
                  {product.images?.map((img, index) => (
                    <button
                      key={`img-${index}`}
                      onClick={() => setSelectedMedia(img)}
                      className={`
                        flex-none
                        h-[90px]
                        aspect-square
                        rounded-xl
                        overflow-hidden
                        border-2
                        transition-all
                        ${
                          selectedMedia === img
                            ? "border-accent-orange"
                            : "border-gray-200"
                        }
                      `}
                    >
                      <img
                        src={img}
                        alt={`${product.name}-thumb-image-${index}`}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}

                  {/* Video Thumbnails */}
                  {product.videos?.map((vid, index) => (
                    <button
                      key={`vid-${index}`}
                      onClick={() => setSelectedMedia(vid)}
                      className={`
                        flex-none
                        h-[90px]
                        aspect-square
                        rounded-xl
                        overflow-hidden
                        border-2
                        transition-all
                        relative
                        ${
                          selectedMedia === vid
                            ? "border-accent-orange"
                            : "border-gray-200"
                        }
                      `}
                    >
                      <video
                        src={vid}
                        className="w-full h-full object-contain"
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <motion.div initial={{scale: 0.9}} whileHover={{scale: 1.1}} className="text-white p-2 bg-dark-blue/80 rounded-full">
                            <span className="font-bold text-lg">▶</span>
                        </motion.div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE DETAILS */}
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

              {/* Conditional Stock Banner Component */}
              <div className="mb-8">
                {product.inStock ? (
                  <div className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-30 border-2 border-green-500/30 rounded-lg shadow-sm">
                    <PackageCheck size={20} className="text-green-600" />
                    <span className="text-green-700 font-bold text-base tracking-wide">
                      In Stock
                    </span>
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-red-500/30 rounded-lg shadow-sm">
                    <PackageX size={20} className="text-red-600" />
                    <span className="text-red-700 font-bold text-base tracking-wide">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div className="bg-light-gray rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-dark-blue mb-4">
                  Specifications
                </h3>

                <div className="space-y-3">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="flex justify-between gap-4">
                        <span className="text-gray-600 capitalize">{key}:</span>
                        <span className="font-semibold text-dark-blue text-right">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/919714586233?text=I am interested in your product - ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 btn-secondary"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
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
            <h3 className="text-2xl font-bold text-dark-blue mb-6">
              Applications
            </h3>

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
              <h3 className="text-2xl font-bold text-dark-blue mb-6">
                Related Products
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    to={`/product/${related.id}`}
                    className="card-hover bg-white rounded-lg overflow-hidden shadow-elegant"
                  >
                    <div className="h-48 overflow-hidden bg-gray-200">
                      <img
                        src={related.images?.[0]}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="font-bold text-dark-blue mb-2">
                        {related.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {related.shortDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;