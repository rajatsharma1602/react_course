import { useState } from 'react'
import { SearchBar, ImageList } from './components'
import { searchImages } from './api'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    console.log("term", term)
    const newImages = await searchImages(term)
    setImages(newImages)
  }
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  )
}

export default App
