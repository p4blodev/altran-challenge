import React from 'react'
import useImage from 'hooks/useImage'
export default function Image({ src, alt = '' }) {
  const { storedImage } = useImage({ src: src, key: alt })

  return <img src={storedImage} alt={alt} />
}
