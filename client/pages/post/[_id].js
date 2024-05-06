import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { axios } from 'axios'
import UserRoute from '../../components/routes/UserRoute'
import { toast } from 'react-toastify'
import Post from '../../components/cards/Post'
import { RollbackOutlined } from '@ant-design/icons'
import Link from 'next/link'

const PostComments = () => {
    const [post, setPost] = useState({})
    const router = useRouter()
    const _id = router.query._id

    useEffect(() => {
        if (_id) fetchPost()
    }, [_id])

    const fetchPost = async () => {
        try {
            const { data } = await axios.get(`/user-post/${_id}`)
            setPost(data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='container-fluid'>
            <div className='row py-5 text-light bg-default-image'>
                <div className='col text-center'>
                    <h1>Butterfly</h1>
                </div>
            </div>
            <div className='container col-md-8 offset-md-2 pt-5'>
                <Post post={post} commentsCount={50} />
            </div>

            <Link href='/user/dashboard' className='d-flex justify-content-center p-5'>
                <RollbackOutlined />
            </Link>
        </div>
    )
}

export default PostComments
