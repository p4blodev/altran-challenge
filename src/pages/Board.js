import ListOfGnomes from 'components/ListOfGnomes'
import Spinner from 'components/Spinner'
import useGnomes from 'hooks/useGnomes'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import FilterButton from 'components/FilterButton'
import HairColor from 'components/HairColor'
import './Board.css'

export default function Board() {
  const { gnomes, searching, setPage, setHairColor } = useGnomes()
  const [showFilters, setShowFilters] = useState(false)

  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    externalRef: searching ? null : externalRef,
    once: false,
  })

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((currentPage) => currentPage + 1), 200),
    [setPage]
  )

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  const handleHairColorChange = (color) => {
    setHairColor(color)
  }

  if (searching) return <Spinner />

  const renderFilters = showFilters && (
    <HairColor onSelect={handleHairColorChange} />
  )

  const changeFilterState = () => {
    setShowFilters((prev) => !prev)
  }

  return (
    <>
      <h1 className="board-title">Brastlewark Fellowship </h1>
      <div className="board-btn">
        <FilterButton onClick={changeFilterState} />
      </div>
      {renderFilters}
      <ListOfGnomes gnomes={gnomes} />
      <section className="board-footer" id="observable" ref={externalRef}>
        <Spinner />
      </section>
    </>
  )
}
