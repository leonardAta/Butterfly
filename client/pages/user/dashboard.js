import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context'
import UserRoute from '../../components/routes/UserRoute'
import CreatePostForm from '../../components/forms/CreatePostForm'
import { useRouter } from 'next/router'
import axios from 'axios'
import { toast } from 'react-toastify'
import PostList from '../../components/cards/PostList'
import People from '../../components/cards/People'

const Home = () => {
    const [state, setState] = useContext(UserContext)
    const [content, setContent] = useState('')
    const [image, setImage] = useState({})
    const [uploading, setUploading] = useState(false)
    const [posts, setPosts] = useState([])

    const [people, setPeople] = useState([])

    const router = useRouter()

    useEffect(() => {
        if (state && state.token) {
            fetchUserPosts()
            findPeople()
        }
    }, [state && state.token])

    const fetchUserPosts = async () => {
        try {
            const { data } = await axios.get('/user-posts')
            // console.log('user posts => ', data)
            setPosts(data)
        } catch (err) {
            console.log(err)
        }
    }

    const findPeople = async () => {
        try {
            const { data } = await axios.get('/find-people')
            setPeople(data)
        } catch (err) {
            console.log(err)
        }
    }

    const postSubmit = async (e) => {
        e.preventDefault()
        // console.log('post =>', content)
        try {
            const { data } = await axios.post('/create-post', { content, image })
            console.log('Create-post response => ', data)

            if (data.error) {
                toast.error(data.error)
            } else {
                fetchUserPosts()
                toast.success('Flutter Created!')
                setContent('')
                setImage({})
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleImage = async (e) => {
        const file = e.target.files[0]
        let formData = new FormData()
        formData.append('image', file)
        // console.log([...formData])
        setUploading(true)
        try {
            const { data } = await axios.post('/upload-image', formData)
            // console.log('uploaded image => ', data)
            setImage({
                url: data.url,
                public_id: data.public_id,
            })
            setUploading(false)
        } catch (err) {
            console.log(err)
            setUploading(false)
        }
    }

    const handleDelete = async (post) => {
        try {
            const answer = window.confirm('Are you sure you want to delete this flutter?')
            if (!answer) return
            const { data } = await axios.delete(`/delete-post/${post._id}`)
            toast.error('Flutter deleted')
            fetchUserPosts()
        } catch (err) {
            console.log(err)
        }
    }

    const handleFollow = async (user) => {
        // console.log('add user to following list', user)
        try {
            const { data } = await axios.put('/user-follow', { _id: user._id })
            let auth = JSON.parse(localStorage.getItem('auth'))
            auth.user = data
            localStorage.setItem('auth', JSON.stringify(auth))
            setState({ ...state, user: data })

            let filtered = people.filter((p) => p._id !== user._id)
            setPeople(filtered)

            toast.success(`Now following ${user.name} 🧚‍♀️!`)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <UserRoute>
            <div className='container-fluid'>
                <div className='row py-5 text-light bg-default-image'>
                    <div className='col text-center'>
                        <h1>Feed</h1>
                        {/* <img src='/images/default.jpg' alt='image' /> */}
                    </div>
                </div>
                <div className='row py-3'>
                    <div className='col-md-8'>
                        <CreatePostForm
                            content={content}
                            setContent={setContent}
                            postSubmit={postSubmit}
                            handleImage={handleImage}
                            uploading={uploading}
                            image={image}
                        />
                        <br />
                        <PostList posts={posts} handleDelete={handleDelete} />
                    </div>
                    {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}

                    <div className='col-md-4'>
                        <People people={people} handleFollow={handleFollow} />
                    </div>
                </div>
            </div>
        </UserRoute>
    )
}

export default Home
