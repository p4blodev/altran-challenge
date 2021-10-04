import { useEffect, useState } from 'react'

export default function useImage({ src, key }) {
  const [storedImage, setStoredImage] = useState(null)

  useEffect(() => {
    const img = window.localStorage.getItem(src)

    if (img) {
      setStoredImage(img)
      return
    }

    fetch(src)
      .then((response) => {
        return response.blob()
      })
      .then((response) => {
        const imageObjectURL = URL.createObjectURL(response)
        localStorage.setItem(key, imageObjectURL)
        setStoredImage(imageObjectURL)
      })
      .catch((error) => console.error(error))
  }, [src])

  return { storedImage }
}
