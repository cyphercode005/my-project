import React, {useState} from 'react'

export default function Counter() {
    const [num, setNum] = useState (0)
    function addCount(){
setNum(num+1)
    }
    function remCount(){
        if (num>0){ setNum(num-1) }
        else alert('Alert !  Count is Zero & cannot be Minus ..')
    }
return (
    <div className='flex justify-center py-5'> 
    <div className=' border mx-5 py-5 px-5 w-1/3'>
      <div className=' mx-1 flex justify-center '>
        <span className='flex justify-center text-blue-100 font-semibold text-4xl mx-1 px-2 '> {num} </span>
      </div>
      <div className='flex justify-center mx-3 my-5'>
        <button onClick={addCount} className='border border-gray-900 rounded text-blue-100 px-3 mx-3'> Add Count </button>
        <button onClick={remCount} className='border border-gray-900 rounded text-blue-100 px-3 mx-3'> Rem Count </button>
      </div>
    </div>
    </div>
  )
}
