import { useEffect, useState } from 'react'
import getGnomes from 'services/getGnomes'

const INITIAL_PAGE = 1
const INITIAL_HAIR_COLOR = 'All'
export default function useGnomes() {
  const [gnomes, setGnomes] = useState([])
  const [searching, setSearching] = useState(false)
  const [hairColor, setHairColor] = useState(INITIAL_HAIR_COLOR)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(() => {
    setSearching(true)

    getGnomes({ page: page, hairColor: hairColor })
      .then((response) => {
        setGnomes((prev) => prev.concat(response))
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(setSearching(false))
  }, [page, hairColor])

  useEffect(() => {
    setSearching(true)
    getGnomes({ page: page, hairColor: hairColor })
      .then((response) => {
        setGnomes(response)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(setSearching(false))
  }, [hairColor])

  return { gnomes, searching, setPage, setHairColor }
}
