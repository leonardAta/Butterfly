import { useContext } from 'react'
import Link from 'next/link'
import { UserContext } from '../context'
import { useRouter } from 'next/router'

const Nav = () => {
    const [state, setState] = useContext(UserContext)

    const router = useRouter()

    const logout = () => {
        window.localStorage.removeItem('auth')
        setState(null)
        router.push('/login')
    }
    return (
        <nav className='nav d-flex justify-content-between' style={{ backgroundColor: '#000000' }}>
            <Link href='/' className='nav-link text-light logo'>
                Butterfly
            </Link>

            {state !== null ? (
                <>
                    <Link href='/login' className='nav-link text-light'>
                        {state && state.user && state.user.name}
                    </Link>
                    <a onClick={logout} className='nav-link text-light'>
                        Logout
                    </a>
                </>
            ) : (
                <>
                    <Link href='/login' className='nav-link text-light'>
                        Login
                    </Link>

                    <Link href='/register' className='nav-link text-light'>
                        Register
                    </Link>
                </>
            )}
        </nav>
    )
}
export default Nav
