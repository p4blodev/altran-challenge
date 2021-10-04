import React from 'react'
import Filter from 'Icons/Filter'
import './FilterButton.css'
export default function FilterButton({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      <Filter />
    </button>
  )
}
