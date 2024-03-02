import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secret, setSecret] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, email, password, secret)
        axios
            .post('http://localhost:9000/api/register', {
                name,
                email,
                password,
                secret,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div className='container-fluid'>
            <div className='row py-5 bg-secondary text-light'>
                <div className='col text-center'>
                    <h1>Sign Up</h1>
                </div>
            </div>
            <div className='row py-5'>
                <div className='col-md-6 offset-md-3'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group p-2'>
                            <small>
                                <label className='text-muted'>Display Name</label>
                            </small>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                className='form-control'
                                placeholder='Enter Display Name'
                            />
                        </div>

                        <div className='form-group p-2'>
                            <small>
                                <label className='text-muted'>Email Address</label>
                            </small>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                className='form-control'
                                placeholder='Enter Email Address'
                            />
                        </div>

                        <div className='form-group p-2'>
                            <small>
                                <label className='text-muted'>Password</label>
                            </small>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                                className='form-control'
                                placeholder='Enter Password'
                            />
                        </div>

                        <div className='form-group p-2'>
                            <small>
                                <label className='text-muted'>
                                    Choose a question. (Use this to reset your password if you forget it.)
                                </label>
                            </small>
                            <select className='form-control'>
                                <option>What is your favorite app?</option>
                                <option>What is the name of your best friend?</option>
                                <option>What is your mother's birth month?</option>
                            </select>

                            {/* <small className='form-text text-muted'>
                                Use this to reset your password if you forget it.
                            </small> */}
                        </div>

                        <div className='form-group p-2'>
                            <small>
                                <label className='text-muted'>Let's hear your answer 😃</label>
                            </small>
                            <input
                                value={secret}
                                onChange={(e) => setSecret(e.target.value)}
                                type='text'
                                className='form-control'
                                placeholder='Answer'
                            />
                        </div>

                        <div className='form-group p-2'>
                            <button className='btn btn-primary col-12'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register
