import { ToastContainer } from "react-toastify"
import Form from "./components/Form"
import Input from "./components/input"


function App() {

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-[rgb(51,95,112)]">
        <div className="bg-[rgb(19,36,42)] p-6 rounded-2xl flex flex-col justify-center items-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
          <h1 className="text-2xl md:text-4xl lg:text-6xl pb-5 text-white mb-1.5">ToDo List</h1>
          <Input />
          <Form />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        draggable
        theme="light"
      />
    </>
  )
}

export default App
