import React from 'react'
import Image from 'components/Image'
import './Gnome.css'

const genders = {
  0: 'Male',
  1: 'Famele',
}

export default function Gnome({
  thumbnail,
  name,
  hairColor,
  age,
  weight,
  height,
}) {
  const renderGender = () => {
    return isNaN(age) ? (
      <p style={{ color: 'red' }}>
        <strong>{'Gender '}</strong>Not defined
      </p>
    ) : (
      <p>
        <strong>{'Gender '}</strong>
        {genders[age % 2]}
      </p>
    )
  }

  return (
    <div className="gnome-container">
      <header>
        <h1>{name}</h1>
      </header>
      <Image src={thumbnail} alt={name} />
      <div className="gnome-data">
        <p>
          <strong>{'Age '}</strong>
          {isNaN(age) ? '-' : age}
        </p>
        <p>
          <strong>{'Hair color '}</strong>
          {hairColor}
        </p>
        <p>
          <strong>{'Weight '}</strong>
          {weight}
        </p>
        <p>
          <strong>{'Height '}</strong>
          {height}
        </p>
        {renderGender()}
      </div>
    </div>
  )
}
