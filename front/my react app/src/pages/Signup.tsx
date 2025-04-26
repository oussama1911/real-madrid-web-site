import {useRef, useState} from 'react'
import { createUser } from '../api/user'
import { UserType as User } from '../types/userTypes'
import { Link } from 'react-router'
import '../styling/signup.css'

const Signup = () => {

    const [error, setError] = useState<any>(null)
    const [isCreated, setIsCreated] = useState<boolean>(false)

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handleSingup = async (e : {preventDefault: ()=> void}) =>{
        e.preventDefault()
        try{
            const user: User = {
                name: name.current?.value || '',
                email: email.current?.value || '',
                password: password.current?.value || '',
                isAdmin: false
            } 
            await createUser(user)
            setError(null)
            setIsCreated(true)
        }catch(err){
            console.log(err)
            setError(err)
        }
    }

    return (
        <div className='signup-container'>
            <form className='signup-form'  action="">
                <input className='signup-name' type="text" placeholder='name' ref={name}/>
                <input className='signup-email' type="text" placeholder='email' ref={email}/>
                <input className='signup-password' type="password" placeholder='password' ref={password}/>
                <button className='signup-btn' onClick={handleSingup}>Signup</button>
                {error && <p className='error'> error: {error.message}</p>}
                {isCreated && <p className='success'> account created successfully</p>}
            </form>
            <Link to='/login'>return to login</Link>
        </div>
    )
}

export default Signup