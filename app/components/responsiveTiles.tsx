'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const hotelRooms = [
  {
    id: 1,
    title: 'Luxury Room',
    description: 'Ocean view and king-size bed.',
    image: 'https://images.unsplash.com/photo-1582719478185-2199c16e8f54?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Deluxe Suite',
    description: 'Modern with workspace and balcony.',
    image: 'https://images.unsplash.com/photo-1600585153756-8402a4c014a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Cozy Room',
    description: 'Perfect for couples.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Standard Room',
    description: 'Affordable and comfortable.',
    image: 'https://images.unsplash.com/photo-1582124012904-ec95c2b6ab38?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Family Suite',
    description: 'Spacious and ideal for families.',
    image: 'https://images.unsplash.com/photo-1562183241-b937e95585b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Penthouse',
    description: 'Top-floor room with city view.',
    image: 'https://images.unsplash.com/photo-1554189097-ffe88e998a4b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Business Room',
    description: 'Equipped for work travelers.',
    image: 'https://images.unsplash.com/photo-1560448071-158c7dc4a6a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Rustic Cabin',
    description: 'Woodsy and peaceful.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  // Add more if needed
];

const ITEMS_PER_PAGE = 6;

export default function ResponsiveTiles() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(hotelRooms.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentItems = hotelRooms.slice(start, end);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const router = useRouter();

  const redirectToDetailsPage=(id: number)=>{
    router.push(`/rooms/${id}`); // your target path
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
        {currentItems.map((room) => (
          <motion.div 
          onClick={()=>{redirectToDetailsPage(room?.id)}}
            key={room?.id}
            tabIndex={0}
            whileFocus={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.03,
              transition: { type: 'spring', stiffness: 300 },
            }}
            className="bg-white rounded-xl shadow-lg overflow-hidden outline-none focus:ring-2 focus:ring-blue-500"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <img src={room?.image} alt={room?.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600 text-sm">{room.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
