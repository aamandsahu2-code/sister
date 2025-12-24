"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-cards"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react"

export default function PhotosScreen({ onNext }) {
  const memories = [
    "/memories/dost1.jpg",
    "/memories/dost2.jpg", 
    "/memories/dost3.jpg",
    "/memories/dost4.jpg"
  ]

  return (
    <div className="px-4 md:px-6 py-10 text-center relative min-h-screen flex flex-col justify-center">
      <motion.h1 
        className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mb-12 drop-shadow-2xl leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Our Memories 💖
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl mx-auto mb-12"
      >
        <Swiper
          effect={"cards"}
          modules={[EffectCards]}
          grabCursor={true}
          className="mySwiper h-80 md:h-96 lg:h-[500px]"
        >
          {memories.map((memory, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-full p-4 md:p-8">
                <img 
                  src={memory}
                  alt={`Memory ${index + 1}`}
                  className="
                    w-full
                    max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                    h-auto
                    max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[400px]
                    object-contain
                    rounded-xl
                    shadow-2xl
                    hover:shadow-3xl
                    transition-all
                    duration-500
                    hover:scale-105
                  "
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center"
      >
        <GradientButton onClick={onNext} className="text-xl px-10 py-5 shadow-2xl">
          Special Message 💌
          <ArrowRight size={24} className="mt-0.5 ml-3" />
        </GradientButton>
      </motion.div>
    </div>
  )
}
