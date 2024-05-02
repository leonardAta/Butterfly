import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Modal } from 'antd'
import Link from 'next/link'
import Form from '../../../components/forms/Form'
import { UserContext } from '../../../context'
import { useRouter } from 'next/router'
import user from '../../../../server/models/user'

const ProfileUpdate = () => {
    const [username, setUsername] = useState('')
    const [about, setAbout] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secret, setSecret] = useState('')
    const [ok, setOk] = useState(false)
    const [loading, setLoading] = useState(false)

    const [state, setState] = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        if (state && state.user) {
            console.log('user from state => ', state.user)
            setUsername(state.user.username)
            setAbout(state.user.about)
            setName(state.user.name)
            setEmail(state.user.email)
        }
    }, [state && state.user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.put(`/profile-update`, {
                username,
                about,
                name,
                email,
                password,
                secret,
            })
            console.log('update response =>', data)

            if (data.error) {
                toast.error(data.error)
                setLoading(false)
            } else {
                setOk(true)
                setLoading(false)

                let auth = JSON.parse(localStorage.getItem('auth'))
                auth.user = data
                localStorage.setItem('auth', JSON.stringify(auth))
                setState({ ...state, user: data })
                setOk(true)
                setLoading(false)
            }
        } catch (err) {
            toast.error(data.error)
            setLoading(false)
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row py-5 bg-secondary text-light bg-default-image'>
                <div className='col text-center'>
                    <h1>Profile</h1>
                </div>
            </div>

            <div className='row py-5'>
                <div className='col-md-6 offset-md-3'>
                    <Form
                        profileUpdate={true}
                        username={username}
                        setUsername={setUsername}
                        about={about}
                        setAbout={setAbout}
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
                        open={ok}
                        onCancel={() => setOk(false)}
                        footer={null}
                    >
                        <p>Profile Update Successful!</p>
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

export default ProfileUpdate
