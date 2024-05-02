import { SyncOutlined } from '@ant-design/icons'

const Form = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    secret,
    setSecret,
    loading,
    page,
    username,
    setUsername,
    about,
    setAbout,
    profileUpdate,
}) => (
    <form onSubmit={handleSubmit}>
        {profileUpdate && (
            <div className='form-group p-2'>
                <small>
                    <label className='text-muted'>Username</label>
                </small>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Enter Username'
                />
            </div>
        )}
        {profileUpdate && (
            <div className='form-group p-2'>
                <small>
                    <label className='text-muted'>About</label>
                </small>
                <input
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Enter Bio...'
                />
            </div>
        )}
        {page !== 'login' && (
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
        )}
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
                disabled={profileUpdate}
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
        {page !== 'login' && (
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
        )}
        <div className='form-group p-2'>
            <button
                disabled={
                    profileUpdate
                        ? loading
                        : page === 'login'
                        ? !email || !password || loading
                        : !name || !email || !password || !secret || loading
                }
                className='btn btn-primary col-12'
            >
                {loading ? <SyncOutlined spin className='py-1' /> : 'Submit'}
            </button>
        </div>
    </form>
)

export default Form
