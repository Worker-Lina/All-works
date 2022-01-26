import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';


const PostForm = ({create}) =>{
    const [post, setPost] = useState({title:'', body:''});

    const addNewPost = (e) =>{
        e.preventDefault(); // предотвращаем дефолтное поведение браузера
        const newPost={
            ...post, id:Date.now()
        }
        create(newPost);
        setPost({title:'', body:''})
      }

    return(
        <form>
        <MyInput 
          value ={post.title} 
          type="text" 
          placeholder="name"
          onChange = {e => setPost({...post, title:e.target.value})}
        />
        <MyInput 
          value = {post.body}
          type="text" 
          placeholder="description"
          onChange = {e => setPost({...post, body:e.target.value})}
        />
        <MyButton onClick={addNewPost}>Add</MyButton>
      </form>
    );
};

export default PostForm;