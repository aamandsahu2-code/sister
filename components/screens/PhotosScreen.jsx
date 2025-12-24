"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react"

export default function PhotosScreen({ onNext }) {
  const memories = [
    "/memories/dost1.jpg",
    "/memories/dost2.jpg",
    "/memories/dost3.jpg",
    "/memories/dost4.jpg",
  ]

  return (
    <div className="px-4 md:px-6 py-10 text-center relative min-h-screen flex flex-col justify-center">
      <motion.h1
        className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mb-10 drop-shadow-2xl leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Memories 💖
      </motion.h1>

      {/* IMAGE AREA – PURE CENTER */}
      <div className="flex justify-center mb-10">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <Swiper
            slidesPerView={1}
            spaceBetween={8}
            className="w-full h-72 sm:h-80 md:h-96"
          >
            {memories.map((memory, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={memory}
                  alt={`Memory ${index + 1}`}
                  className="
                    w-full
                    h-full
                    object-cover
                    rounded-2xl
                    shadow-2xl
                  "
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center"
      >
        <GradientButton onClick={onNext} className="text-lg px-10 py-4 shadow-2xl">
          Special Message 💌
          <ArrowRight size={22} className="mt-0.5 ml-3" />
        </GradientButton>
      </motion.div>
    </div>
  )
}
