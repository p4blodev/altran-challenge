import Radio from 'components/Radio'

import React from 'react'
import './HairColor.css'

const COLORS = ['Pink', 'Green', 'Red', 'Black', 'Gray', 'All']

export default function HairColor({ onSelect }) {
  const onChange = (value) => {
    onSelect(value)
  }

  const renderDifficulties = () => {
    return COLORS.map((item) => (
      <div key={item}>
        <Radio id={item} name={'hairColr'} onSelect={onChange} value={item} />
      </div>
    ))
  }

  return (
    <div className="hair-color-container">
      <section>{renderDifficulties()}</section>
    </div>
  )
}
