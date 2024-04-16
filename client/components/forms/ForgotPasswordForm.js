import { SyncOutlined } from '@ant-design/icons'
import ForgotPassword from '../../pages/forgot-password'

const ForgotPasswordForm = ({
    handleSubmit,
    email,
    setEmail,
    newPassword,
    setNewPassword,
    secret,
    setSecret,
    loading,
    page,
}) => (
    <form onSubmit={handleSubmit}>
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
                <label className='text-muted'>New Password</label>
            </small>
            <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type='password'
                className='form-control'
                placeholder='Enter New Password'
            />
        </div>

        <>
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
        </>

        <div className='form-group p-2'>
            <button disabled={!email || !newPassword || !secret || loading} className='btn btn-primary col-12'>
                {loading ? <SyncOutlined spin className='py-1' /> : 'Submit'}
            </button>
        </div>
    </form>
)

export default ForgotPasswordForm
