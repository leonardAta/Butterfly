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
                    <div className='dropdown'>
                        <a
                            className='btn dropdown-toggle text-light'
                            role='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                        >
                            {state && state.user && state.user.name}
                        </a>
                        <ul className='dropdown-menu'>
                            <li>
                                <Link
                                    href='/user/dashboard'
                                    className={`nav-link dropdown-item  ${current === '/user/dashboard' && 'active'}`}
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href='/user/profile/update'
                                    className={`nav-link dropdown-item  ${
                                        current === '/user/profile/update' && 'active'
                                    }`}
                                >
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <a onClick={logout} className='nav-link'>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
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
