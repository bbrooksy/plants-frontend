import React, { useState, useEffect } from 'react';


const schema= yup.object().shape({
    username: yup.string().required('Username is required!').min(3, 'name needs to be at least 3 letters long'),
    password: yup.string().required('password is required').min(6, 'password must be at least 6 characters long'),
    phone: yup.string().email('invalid phone number').required('valid phone number required'),
    tos: yup.boolean().oneOf([true], 'you must agree to the terms of service to continue'),
   })
   
   export default function Signup (props) {
       const initialvalue = {username: '', phone: '', password:'',tos: false,}

    const [form, setForm] = useState(initialvalue)

    const [errors, setErrors] = useState({username: '',phone: '',password: '',tos: '',})

    const [disabled, setDisabled] = useState(true)

    const [user, setUser] = useState([]);

    const setFormErrors =(name, value) => {
        yup.reach(schema, name).validate(value)
            .then( () => setErrors({...errors, [name]: ''}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setFormErrors(name, valueChecked)
        setForm({...form, [name]: valueChecked})
   }
   const submit = event => {
    event.preventDefault()
    axios
        .post('https://reqres.in/api/users', form)
        .then(res => {
            setUser(res.data)
            console.log('success', res)
        })
        .catch(err => {
            console.log('error submitting', err)
        })
    }
    useEffect( () => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return (
        <div className='form-inputs'>
        <div className='error-msg'style={{ color: 'red'}}>
           <div>{errors.username}</div>
           <div>{errors.phone}</div>
           <div>{errors.password}</div>
           <div>{errors.tos}</div>  
      </div>  
          <form className='form-container'
          onSubmit={submit}> 
          <label>Username
              <input 
              onChange={change}
              value={form.username}
              name='name' 
              type='text'
              placeholder='Enter Username'
              maxLength='35'/>
          </label>
            <br/>
          <label>Phone Number
              <input 
              onChange={change}
              value={form.phone}
              name='phone-number' 
              type='tel'
              placeholder='Phone Number'
              maxLength='15'/>
          </label>
            <br/>
          <label>Password
              <input 
              onChange={change}
              value={form.password}
              name='password' 
              type='text'
              placeholder='Create Password'/>
          </label>
            <br/>
          <label>Terms of Service
              <input 
              onChange={change}
              checked={form.tos}
              name='tos' 
              type='checkbox'
              placeholder='Your are required to read and agree to the following terms of service'/>
          </label>
        <br/>
          
              <button disabled={disabled}>Submit</button>
    
          
          </form>
          </div>
  )
  
  }
