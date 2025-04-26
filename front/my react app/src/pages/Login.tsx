import { useState } from 'react'
import useAuth from '../utils/useAuth'
import { Link } from 'react-router-dom'
import '../styling/login.css'

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<any>(null)
    const [isLogged, setIsLogged] = useState<boolean>(false)

    const { login } = useAuth()

    const handleLogin = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
            await login({ email, password })
            setError(null)
            setIsLogged(true)
        } catch (err) {
            setError(err)
        }
    }

    return (
        <div className='login-container'>
            <form className='login-form' action="">
                <input className='login-email'
                    type="text"
                    placeholder='enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input className='login-password'
                    type="password"
                    placeholder='enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button className='login-btn' onClick={handleLogin}>login</button>
                {error && <p className='error'> error: {error.message}</p>}
                {isLogged && <p className='success'> logged in successfully</p>}
            </form>
            <p className='login-msg'>don't have an account? <Link to='/signup'>sign up now </Link></p>
        </div>
    )
}

export default Login