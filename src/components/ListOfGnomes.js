import Gnome from 'components/Gnome'
import React from 'react'
import './ListOfGnomes.css'

export default function ListOfGnomes({ gnomes }) {
  const renderGnomes = () => (
    <section className="list-gnome-container">
      {gnomes.map((item) => (
        <Gnome
          thumbnail={item.thumbnail}
          key={item.name}
          name={item.name}
          hairColor={item.hair_color}
          age={item.age}
          weight={item.weight}
          height={item.height}
        />
      ))}
    </section>
  )

  return renderGnomes()
}
