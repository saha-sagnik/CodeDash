'use client'

import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { words } from '@/lib/data'

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState<string[]>([])

    const handleSearch = (e: { target: { value: string } }) => {
        if (e.target.value === '') {
            setActiveSearch([]) // Clear search if input is empty
            return
        }
        // Update the activeSearch state with filtered words
        setActiveSearch(words.filter(w => w.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 8))
    }

    return (
        <form className='w-[500px] relative'>
            <div className="relative">
                <input 
                    type="search" 
                    placeholder='Type Here' 
                    className='w-full p-4 rounded-full bg-white text-white' 
                    onChange={handleSearch} 
                />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full'>
                    <AiOutlineSearch />
                </button>
            </div>

            {
                activeSearch.length > 0 && (
                    <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
                        {
                            activeSearch.map((s, index) => (
                                <span key={index}>{s}</span> // Use 'key' to uniquely identify each item
                            ))
                        }
                    </div>
                )
            }
        </form>
    )
}

export default Searchbar
