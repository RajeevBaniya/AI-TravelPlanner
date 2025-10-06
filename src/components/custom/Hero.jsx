import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FaGlobe, FaMapMarkedAlt, FaSuitcase, FaPlane, FaCompass } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  }

  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * i }
    }),
    hover: { 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    }
  }

  return (
    <>
      {/* Hero Section - Full Width */}
      <div className="min-h-[85vh] w-full flex flex-col md:flex-row items-center justify-between py-6">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row items-center">
          <motion.div 
            className="flex-1 text-center md:text-left md:pr-8 lg:pr-12 xl:pr-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-2"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Discover Your Next Trip with Travel AI:</span>
            </motion.h1>
            <motion.p 
              className="text-gray-600 text-base sm:text-lg md:text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            > 
              Your AI-powered travel companion that creates personalized itineraries just for you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/create-trip">
                <Button className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#F47E3E] text-[#F47E3E] bg-transparent hover:bg-[#F47E3E] hover:text-white transition-colors">
                  Plan Your Trip Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Image/Animation Container */}
          <motion.div 
            className="flex-1 w-full md:w-auto mt-8 md:mt-0 md:ml-8 lg:ml-12 xl:ml-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl max-w-[95%] mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/Blue Colorful Bold Geometric Ireland Photo Album Instagram Post.gif" 
                alt="Travel destinations" 
                className="w-full h-auto md:h-[420px] lg:h-[480px] xl:h-[520px] object-cover rounded-xl"
              />
              
              {/* Floating elements animation */}
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <FaMapMarkedAlt className="w-8 h-8 text-orange-500" />
              </motion.div>
              
              <motion.div 
                className="absolute top-4 -left-4 bg-white p-3 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              >
                <FaPlane className="w-8 h-8 text-blue-500" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/2 -right-4 bg-white p-3 rounded-lg shadow-lg"
                animate={{ x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
              >
                <FaCompass className="w-8 h-8 text-green-500" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-1/3 -left-4 bg-white p-3 rounded-lg shadow-lg"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1.5 }}
              >
                <FaSuitcase className="w-8 h-8 text-purple-500" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Section - Full Width */}
      <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Why Choose Our AI Travel Planner?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our intelligent travel assistant creates personalized itineraries tailored to your preferences, saving you hours of research and planning.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaGlobe className="h-12 w-12 text-orange-500" />,
                title: "Personalized Itineraries",
                description: "Get custom travel plans based on your interests, budget, and travel style.",
                delay: 0,
                bgGradient: "from-orange-50 to-orange-100",
                iconBg: "bg-orange-100",
                hoverBg: "hover:bg-orange-50"
              },
              {
                icon: <FaMapMarkedAlt className="h-12 w-12 text-blue-500" />,
                title: "Discover Hidden Gems",
                description: "Explore off-the-beaten-path destinations that match your preferences.",
                delay: 1,
                bgGradient: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100",
                hoverBg: "hover:bg-blue-50"
              },
              {
                icon: <FaSuitcase className="h-12 w-12 text-green-500" />,
                title: "Effortless Planning",
                description: "Save hours of research with AI-generated travel plans ready in your fingertips.",
                delay: 2,
                bgGradient: "from-green-50 to-green-100",
                iconBg: "bg-green-100",
                hoverBg: "hover:bg-green-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${feature.bgGradient} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100`}
                custom={index}
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="flex flex-col items-center text-center space-y-4"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`p-4 rounded-full ${feature.iconBg} transform-gpu shadow-md`}
                    animate={{ 
                      y: [0, -8, 0],
                      rotateZ: [0, -5, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Animated GIF/Image Section - Full Width */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Try Now</h2>
            <div className="relative max-w-[80%] mx-auto rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/White Black Simple Minimalist Travel Plan Chongqing Presentation.gif" 
                alt="Travel AI" 
                className="w-full h-auto rounded-xl"
                onError={(e) => e.target.src = "/White Black Simple Minimalist Travel Plan Chongqing Presentation.gif"} 
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </div>
            <p className="mt-8 text-gray-600 text-lg max-w-2xl mx-auto">
              Travel AI analyzes thousands of travel options to create the perfect itinerary for your next adventure.
              Just tell us your preferences, and we'll handle the rest!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Explore Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover amazing places around the world with personalized Travel AI.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Bali, Indonesia",
                image: "/bali.jpeg",
                description: "Tropical paradise with stunning beaches and rich culture",
                fallback: "/banner.jpg",
                link: "https://www.google.com/maps/search/?api=1&query=Bali+Indonesia"
              },
              {
                name: "Machu Picchu, Peru",
                image: "/Machu.jpeg",
                description: "Mysterious Incan citadel set among mountain peaks",
                fallback: "/banner.jpg",
                link: "https://www.google.com/maps/search/?api=1&query=Machu+Picchu+Peru"
              },
              {
                name: "Santorini, Greece",
                image: "/Santorini.jpeg",
                description: "Iconic white buildings with breathtaking sea views",
                fallback: "/banner.jpg",
                link: "https://www.google.com/maps/search/?api=1&query=Santorini+Greece"
              },
              {
                name: "Kyoto, Japan",
                image: "/Kyoto.jpeg",
                description: "Ancient temples and beautiful traditional gardens",
                fallback: "/banner.jpg",
                link: "https://www.google.com/maps/search/?api=1&query=Kyoto+Japan"
              }
            ].map((destination, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5, delay: 0.1 * index }
                }}
                whileHover={{ y: -8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link 
                  to={destination.link} 
                  target="_blank" 
                  className="block h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.src = destination.fallback}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2">{destination.name}</h3>
                    <p className="text-gray-600 text-sm">{destination.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/create-trip">
              <Button className="mt-8 mb-0 inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#F47E3E] text-[#F47E3E] bg-transparent hover:bg-[#F47E3E] hover:text-white transition-colors">
                Explore More Destinations
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <motion.div 
            className="my-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-center text-gray-500 text-sm sm:text-base md:text-lg">
              Created by RJB — an AI Trip Planner App making every trip effortless.
            </h2>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero
