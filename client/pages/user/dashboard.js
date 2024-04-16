// import { useContext } from 'react'
// import { UserContext } from '../../context'
// import UserRoute from '../../components/routes/UserRoute'
// import CreatePostForm from '../../components/forms/CreatePostForm'

// const Home = () => {
//     const [state, setState] = useContext(UserContext)

//     return (
//         <UserRoute>
//             <div className='container-fluid'>
//                 <div className='row py-5 text-light bg-default-image'>
//                     <div className='col text-center'>
//                         <h1>Feed</h1>
//                         {/* <img src='/images/default.jpg' alt='image' /> */}
//                     </div>
//                 </div>
//                 <div className='row py-3'>
//                     <div className='col-md-8'>
//                         <CreatePostForm />
//                     </div>
//                     <div className='col-md-4'>Sidebar</div>
//                 </div>
//             </div>
//         </UserRoute>
//     )
// }

// export default Home

import { useContext, useState } from 'react'
import { UserContext } from '../../context'
//import UserRoute from '../../components/routes/UserRoute'
import CreatePostForm from '../../components/forms/CreatePostForm'
import { useRouter } from 'next/router'
import axios from 'axios'

const Home = () => {
    const [state, setState] = useContext(UserContext)
    const [content, setContent] = useState('')
    const router = useRouter()

    const postSubmit = async (e) => {
        e.preventDefault()
        // console.log('post =>', content)
        try {
            const { data } = await axios.post('/create-post', { content })
            console.log('Create-post response => ', data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        // <div className='container-fluid'>
        //     <div className='row py-5 text-light bg-default-image'>
        //         <div className='col text-center'>
        //             <h1 className='display-1 text-center py-5'>User Dashboard</h1>
        //             {JSON.stringify(state)}
        //             <img src='/images/default.jpg' alt='image' />
        //         </div>
        //     </div>
        //     <div className='row py-3'>
        //         <div className='col-md-8'>
        //             <CreatePostForm />
        //         </div>
        //         <div className='col-md-4'>Sidebar</div>
        //     </div>
        // </div>

        <div className='container-fluid'>
            <div className='row py-5 text-light bg-default-image'>
                <div className='col text-center'>
                    <h1>Feed</h1>
                    {/* <img src='/images/default.jpg' alt='image' /> */}
                </div>
            </div>
            <div className='row py-3'>
                <div className='col-md-8'>
                    <CreatePostForm content={content} setContent={setContent} postSubmit={postSubmit} />
                </div>
                <div className='col-md-4'>Sidebar</div>
            </div>
        </div>
    )
}

export default Home
