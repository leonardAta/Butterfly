import { useState, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Modal } from 'antd'
import Link from 'next/link'
import Form from '../components/forms/Form'
import { useRouter } from 'next/router'
import { UserContext } from '../context'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [state, setState] = useContext(UserContext)

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post(`/login`, {
                email,
                password,
            })
            if (data.error) {
                toast.error(data.error)
                setLoading(false)
            } else {
                setState({
                    user: data.user,
                    token: data.token,
                })
                window.localStorage.setItem('auth', JSON.stringify(data))
                router.push('/')
            }
        } catch (err) {
            toast.error(err.response.data)
            setLoading(false)
        }
    }

    if (state && state.token) router.push('/user/dashboard')

    return (
        <div className='container-fluid'>
            <div className='row py-5 bg-secondary text-light bg-default-image'>
                <div className='col text-center'>
                    <h1>Login</h1>
                </div>
            </div>

            <div className='row py-5'>
                <div className='col-md-6 offset-md-3'>
                    <Form
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        loading={loading}
                        page='login'
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='text-center'>
                        Don't have an account? <Link href='/register'>Sign Up</Link>
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='text-center'>
                        <Link href='/forgot-password' className='text-danger'>
                            Forgot Password?
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
