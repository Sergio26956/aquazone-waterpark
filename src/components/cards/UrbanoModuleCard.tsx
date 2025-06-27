'use client'

import Image from 'next/image' import { motion } from 'framer-motion' import { UrbanoModule } from '@/lib/data'

interface Props { module: UrbanoModule }

export default function UrbanoModuleCard({ module }: Props) { return ( <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" > <Image
src={module.image}
alt={module.title}
width={600}
height={400}
className="w-full h-64 object-cover"
/> <div className="p-6"> <h3 className="text-2xl font-semibold text-blue-900 mb-2">{module.title}</h3> <p className="text-gray-600 text-sm">{module.description}</p> </div> </motion.div> ) }

