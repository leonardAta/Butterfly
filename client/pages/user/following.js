import { useContext, useState, useEffect } from 'react'
import { Avatar, List } from 'antd'
import moment from 'moment'
import { useRouter } from 'next/router'
import { UserContext } from '../../context'
import axios from 'axios'
import Link from 'next/link'

const Following = () => {
    const [state] = useContext(UserContext)
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

    const handleFollow = async () => {}

    return (
        <>
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
                                    {user.name}{' '}
                                    <span onClick={() => handleFollow(user)} className='text-primary pointer'>
                                        Follow
                                    </span>
                                </div>
                            }
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

export default Following
