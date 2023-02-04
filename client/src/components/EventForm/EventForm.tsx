import { useState } from "react"


const EventForm = () => {
  const [state, setState] = useState({})
  
  const submitHandler = (e: { preventDefault: () => void; target: { firstName: { value: any }; surname: { value: any }; gender: { value: any } } }) => { 
    e.preventDefault()
    console.log('names: ', e.target.firstName.value, e.target.surname.value, e.target.gender.value)
  }

  const changeHandler = (e: { target: { name: any; value: any; }; }) => {
    setState((prev) => ({
     ...prev,
      [e.target.name]: e.target.value

    })) 
    // console.log(`name and value: `, e.target.name, e.target.value)
  }
  return (
    <form >
   <label>
        Title: 
       <input onChange={changeHandler} type='text' name='firstName' />
   </label>
   <label >
        Date: 
   <input onChange={changeHandler} type='text' name='surname' />
   </label>
      <input onChange={changeHandler} type='phone' name='phone' />
      <input onChange={changeHandler} type='email' name='email' />
   
      <input type='submit' value='submit' />
    </form>
  )
}

export default EventForm;