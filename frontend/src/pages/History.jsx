import React from 'react'

const History = () => {
  return (
    <div className='p-10 md:p-20'>
      <p className='text-xl text-blue-600 font-semibold'>Recent calls</p>
      <table className='table-auto w-full mt-10'>
        <thead className='bg-blue-500 text-white'>
            <tr>
                <th className='border-r-2'>Date</th>
                <th className='border-r-2'>Time</th>
                <th className='border-r-2'>Call time</th>
                <th className='border-r-2'>Guest</th>
                <th className='border-r-2'>Form</th>
            </tr>
        </thead>
        <tbody>
            <tr className='bg-blue-200 text-black text-center border-b-2'>
                <td className='border-r-2'>14/10/2024</td>
                <td className='border-r-2'>00:00:00</td>
                <td className='border-r-2'>02:02:22</td>
                <td className='border-r-2'>user 4567</td>
                <td>Audio</td>
            </tr>
            <tr className='bg-blue-200 text-black text-center'>
                <td className='border-r-2'>14/10/2024</td>
                <td className='border-r-2'>08:00:00</td>
                <td className='border-r-2'>01:02:22</td>
                <td className='border-r-2'>user 4444</td>
                <td>Video</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
