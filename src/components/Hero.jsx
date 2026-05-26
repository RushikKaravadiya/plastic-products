import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/GasketModel01.png",
    "/GasketModel02.png",
    "/GasketModel03.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );

  return (
    <div className="relative h-[500px] sm:h-[600px] overflow-hidden">
      {/* Slider */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-blue opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white px-4 sm:px-8 z-10"
        >
          <h1 className="sm:hidden text-3xl font-bold mb-0 leading-tight">
            Premium Industrial Plastic Solutions
          </h1>
          <h1 className="hidden sm:block sm:text-6xl lg:text-7xl font-bold mb-0 leading-tight">
            Premium Industrial{" "}
            <span style={{ color: "#366199" }}>Plastic Solutions</span>
          </h1>
          <p className="hidden sm:block text-lg sm:text-xl text-black-200 mb-20 max-w-2xl mx-auto">
            Trusted by leading manufacturers worldwide for superior sealing
            performance and reliability
          </p>
            <div className="flex sm:hidden justify-center mt-44 w-full">
            <Link
                to="/products"
                className="px-8 py-4 bg-[#366199] text-white rounded-lg font-semibold shadow-lg hover:bg-[#0B1929] transition-all duration-300 mx-auto w-64 text-center"
            >
                View Products
            </Link>
            </div>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 z-20">
        {" "}
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-accent-orange w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
