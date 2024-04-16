import { useState, useContext } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Modal } from 'antd'
import Link from 'next/link'
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm'
import { UserContext } from '../context'
import { useRouter } from 'next/router'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [secret, setSecret] = useState('')
    const [ok, setOk] = useState(false)
    const [loading, setLoading] = useState(false)

    const [state] = useContext(UserContext)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post(`/forgot-password`, {
                email,
                newPassword,
                secret,
            })
            console.log('forgot password res data =>', data)
            if (data.error) {
                toast.error(data.error)
                setLoading(false)
            }

            if (data.success) {
                setEmail('')
                setNewPassword('')
                setSecret('')
                setOk(true)
                setLoading(false)
            }
        } catch (err) {
            // toast.error(err.response.data)
            console.log(err)
            setLoading(false)
        }
    }

    if (state && state.token) router.push('/')

    return (
        <div className='container-fluid'>
            <div className='row py-5 bg-secondary text-light bg-default-image'>
                <div className='col text-center'>
                    <h1>Password Reset</h1>
                </div>
            </div>

            <div className='row py-5'>
                <div className='col-md-6 offset-md-3'>
                    <ForgotPasswordForm
                        handleSubmit={handleSubmit}
                        email={email}
                        setEmail={setEmail}
                        newPassword={newPassword}
                        setNewPassword={setNewPassword}
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
                        <p>Awesome! Now you can login with your new password</p>
                        <Link href='/login'>
                            <a className='btn btn-primary btn-sm'>Login</a>{' '}
                        </Link>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
