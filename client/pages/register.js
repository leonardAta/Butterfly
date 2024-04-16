import { useState, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Modal } from 'antd'
import Link from 'next/link'
import Form from '../components/forms/Form'
import { UserContext } from '../context'
import { useRouter } from 'next/router'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secret, setSecret] = useState('')
    const [ok, setOk] = useState(false)
    const [loading, setLoading] = useState(false)

    const [state] = useContext(UserContext)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post(`/register`, {
                name,
                email,
                password,
                secret,
            })

            if (data.error) {
                toast.error(data.error)
                setLoading(false)
            } else {
                setName('')
                setEmail('')
                setPassword('')
                setSecret('')
                setOk(data.ok)
                setLoading(false)
            }
        } catch (err) {
            toast.error(err.response.data)
            setLoading(false)
        }
    }

    if (state && state.token) router.push('/')

    return (
        <div className='container-fluid'>
            <div className='row py-5 bg-secondary text-light bg-default-image'>
                <div className='col text-center'>
                    <h1>Sign Up</h1>
                </div>
            </div>

            <div className='row py-5'>
                <div className='col-md-6 offset-md-3'>
                    <Form
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        secret={secret}
                        setSecret={setSecret}
                        loading={loading}
                    />
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <Modal
                        title='Congratulations!'
                        open={ok} // Use `visible` prop to control the modal's visibility
                        onCancel={() => setOk(false)} // Use onCancel to hide the modal
                        footer={null} // If you don't want a default footer, set it to null
                    >
                        <p>Registration Successful!</p>
                        <Link href='/login'>
                            <a className='btn btn-primary btn-sm'>Login</a>{' '}
                        </Link>
                    </Modal>
                </div>
            </div>

            <div className='row'>
                <div className='col'>
                    <p className='text-center'>
                        Already have an account? <Link href='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
