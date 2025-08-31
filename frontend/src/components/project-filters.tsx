'use client'

import { useState } from 'react'

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'realtime', label: 'Real-time' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'api', label: 'APIs' },
  { id: 'opensource', label: 'Open Source' }
]

export function ProjectFilters() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            activeFilter === filter.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}
