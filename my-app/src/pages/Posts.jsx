import React, {useEffect, useMemo, useRef, useState } from 'react';
import '../styles/app.css'
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import {usePosts} from '../components/hooks/usePosts';
import {useFetching} from '../components/hooks/useFetching';
import {getPageCount} from '../utils/pages';
import PostService from '../API/PostService';
import { useObserver } from '../components/hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
  const lastEmenet = useRef();


  const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=>{
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCOunt = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCOunt,limit));
  })

  useObserver(lastEmenet, page<totalPages, isPostsLoading, ()=> {
    setPage(page+1);
  })

  useEffect(()=>{
    fetchPosts(limit, page);
  }, [page, limit])

  const createPost=(newPost) =>{
    setPosts([...posts, newPost])
    setModal(false)
  }
  const removePost=(post)=>{
    setPosts(posts.filter(p=>p.id !==post.id))
  }

  const changePage=(page) =>{
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Add post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:"15px 0"}}/>
      <PostFilter 
        filter = {filter}
        setFilter = {setFilter}
      />
      <MySelect 
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue = "Кол-во элементов на страницу"
        options={[
          {value:5, name: '5'},
          {value:10, name: '10'},
          {value:25, name: '25'},
          {value:-1, name: 'Показать все'},
        ]}
      />
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="spisok postov"/>
      <div ref={lastEmenet} style={{height:"20px", background:"teal"}}/>
      {isPostsLoading &&
        <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}><Loader/></div>
      }
      

      <Pagination
        page={page}
        changePage={changePage}
        totalPages = {totalPages}
        />
    </div>
  );
}

export default Posts;
