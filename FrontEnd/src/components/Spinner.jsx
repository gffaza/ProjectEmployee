import React from 'react'

export default function Spinner() {
    return (
        <div className='flex justify-center items-center'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-gray-900 border-solid'></div>
        </div>
    )
}
