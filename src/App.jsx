import { useState, useEffect } from 'react'
import Header from './components/Header'
import PostsPage from './components/PostsPage'
import Footer from './components/Footer'
import CountContext from './contexts/CountContext'
import PostsContext from './contexts/PostsContext'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(posts => setPosts(posts))
  }, [])

  return (
    <>
      <PostsContext.Provider value={{ posts }}>
        <CountContext.Provider value={{ count, setCount }}>
          <Header />
          <PostsPage posts={posts} />
          <Footer />
        </CountContext.Provider>
      </PostsContext.Provider>
    </>
  )
}

export default App
