import React from 'react'
import './Radio.css'

export default function Radio({
  id = 'any',
  name = 'name',
  onSelect,
  value = 'any',
}) {
  const onClick = () => {
    onSelect(id)
  }

  return (
    <label>
      <input id={id} type="radio" name={name} onClick={onClick} value={value} />
      <span>{value}</span>
    </label>
  )
}
