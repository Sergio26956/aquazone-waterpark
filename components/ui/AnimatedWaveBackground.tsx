'use client'
import { motion } from 'framer-motion'

export default function AnimatedWaveBackground() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-blue-300 to-cyan-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <svg
        className="absolute bottom-0 w-full h-48"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,192C560,171,640,117,720,122.7C800,128,880,192,960,224C1040,256,1120,256,1200,240C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </motion.div>
  )
}
