import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import { useFetching } from '../components/hooks/useFetching';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    })



    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])

    return (
        <div>
            <h1>page post id = {params.id}</h1>
            {isLoading
                ?<Loader/>
                :<div>{post.id}. {post.title}</div>
            }

            <h2>Comments</h2>
            {isComLoading
                ?<Loader/>
                :<div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop:"15px"}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage
