import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { UserContext } from '../context'
import { useRouter } from 'next/router'

const Nav = () => {
    const [current, setCurrent] = useState('')
    const [state, setState] = useContext(UserContext)

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

    console.log('current ->', current)

    const router = useRouter()

    const logout = () => {
        window.localStorage.removeItem('auth')
        setState(null)
        router.push('/login')
    }
    return (
        <nav className='nav d-flex justify-content-between' style={{ backgroundColor: '#000000' }}>
            <Link href='/' className={`nav-link text-light logo ${current === '/' && 'active'}`}>
                Butterfly
            </Link>

            {state !== null ? (
                <>
                    <Link
                        href='/user/dashboard'
                        className={`nav-link text-light ${current === '/user/dashboard' && 'active'}`}
                    >
                        {state && state.user && state.user.name}
                    </Link>
                    <a onClick={logout} className='nav-link text-light'>
                        Logout
                    </a>
                </>
            ) : (
                <>
                    <Link href='/login' className={`nav-link text-light ${current === '/login' && 'active'}`}>
                        Login
                    </Link>

                    <Link href='/register' className={`nav-link text-light ${current === '/register' && 'active'}`}>
                        Register
                    </Link>
                </>
            )}
        </nav>
    )
}
export default Nav
