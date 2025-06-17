"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const clients = [
  { name: 'Client 1', logo: '/client11.png' },
  { name: 'Client 2', logo: '/client22.png' },
  { name: 'Client 3', logo: '/client33.png' },
  { name: 'Client 4', logo: '/client44.png' },
  { name: 'Client 5', logo: '/client55.png' },
];

export default function Clients() {
  return (
    <section className="py-16 bg-gray-50 border-t-2 border-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#004B6B]">
          Our Trusted Clients
        </h2>
        <div className="flex overflow-hidden border-y-2 border-black">
          <div className="flex animate-slide ">
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="mx-8 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-40 h-40 relative  hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
