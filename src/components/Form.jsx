import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, toggleComplete } from '../redux/toDoSlice'

const Form = () => {
  const todoItems = useSelector((state) => state.toDo.items)
  const dispatch = useDispatch()
  console.log(todoItems);

  const handleRemoveItem = (id) => {
    dispatch(deleteItem(id))
  }

  const handleComplete = (id)=>{
    dispatch(toggleComplete(id))
  }


  return (
    <>
      <div className='mt-[30px] w-full flex flex-col items-center'>
        {
          todoItems.length > 0 ?
            todoItems.map((items) => (

              <div className='w-[90%] flex' key={items.id}>
                <ul className='w-full'>
                  <li className='mb-2'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='flex items-center text-center'>
                        <button onClick={() => handleRemoveItem(items.id)} ><i className="fa-solid fa-trash text-red-700 text-12px md:text-[15px] lg:text-2xl hover:scale-[1.1]"></i></button>
                        <p className={`text-12px md:text-[15px] lg:text-2xl ms-4 ${items.completed? "text-green-700 line-through" : "text-white"}`} >{items.item}</p>
                      </div>
                      <button className='text-[12px] text-white md:text-[15px] lg:text-2xl' onClick={() => handleComplete(items.id)}>
                        <i className="fa-solid fa-circle-check hover:scale-[1.1]" ></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>

            )) :
            <h3 className='text-[15px] text-white'>There is no task left</h3>
        }

      </div>
    </>
  )
}

export default Form