import { useContext, useState, useEffect } from 'react'
import { Avatar, List } from 'antd'
import moment from 'moment'
import { useRouter } from 'next/router'
import { UserContext } from '../../context'
import axios from 'axios'
import Link from 'next/link'
import { RollbackOutlined } from '@ant-design/icons'

const Following = () => {
    const [state, setState] = useContext(UserContext)
    const [people, setPeople] = useState([])
    const router = useRouter()

    useEffect(() => {
        if (state && state.token) fetchFollowing()
    }, [state && state.token])

    const fetchFollowing = async () => {
        try {
            const { data } = await axios.get('/user-following')
            // console.log('following =>', data)
            setPeople(data)
        } catch (err) {
            console.log(err)
        }
    }

    const imageSource = (user) => {
        if (user.image) {
            return user.image.url
        } else {
            return '/images/logo.png'
        }
    }

    const handleUnfollow = async (user) => {
        try {
            const { data } = await axios.put('/user-unfollow', { id: user._id })
            let auth = JSON.parse(localStorage.getItem('auth'))
            auth.user = data
            localStorage.setItem('auth', JSON.stringify(auth))
            setState({ ...state, user: data })

            let filtered = people.filter((p) => p._id !== user._id)
            setPeople(filtered)
            toast.success(`${user.name} Unfollowed!🧚‍♀️!`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='row col-md-6 offset-md-3'>
            {/* <pre>{JSON.stringify(people, null, 4)}</pre> */}
            <List
                itemLayout='horizontal'
                dataSource={people}
                renderItem={(user) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={imageSource(user)} />}
                            title={
                                <div className='d-flex justify-content-between'>
                                    {/* <Link href={`/user/${user.username}`}>{user.username}</Link> */}
                                    {user.username}{' '}
                                    <span onClick={() => handleUnfollow(user)} className='text-primary pointer'>
                                        Unfollow
                                    </span>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
            <Link href='/user/dashboard' className='d-flex justify-content-center pt-5'>
                <RollbackOutlined />
            </Link>
        </div>
    )
}

export default Following
