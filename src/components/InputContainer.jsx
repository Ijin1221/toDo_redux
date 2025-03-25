import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addItem } from '../redux/toDoSlice';

const InputContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch()

  const handleUpload = () => {
    if (inputValue.trim()) {
      dispatch(addItem(inputValue));
      setInputValue('')
    } else {
      toast("Please Enter an Item");
    }
  }
  return (
    <>
      <div className='border-3 rounded-2xl border-[rgb(51,95,112)] w-[90%] flex'>
        <input type="text" placeholder='Enter Your Task' className='flex-1 rounded-l-2xl ps-4 text-white text-[12px] md:text-[15px] lg:text-[20px] outline-none' onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
        <button className='py-1 px-3 text-[12px] rounded-r-2xl text-white md:text-[15px] lg:text-2xl' style={{ outline: 'none' }} onClick={handleUpload}>
          <i className="fa-solid fa-plus hover:scale-[1.1]"></i>
        </button>
      </div>
    </>
  )
}

export default InputContainer