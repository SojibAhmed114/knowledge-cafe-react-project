import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/bookmarks'
import Header from './Component/Header/Header'


function App() {

  return (
    <>
      <Header></Header>
      <main className='md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
      
    </>
  )
}

export default App
