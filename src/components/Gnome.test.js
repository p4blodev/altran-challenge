import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Gnome from './Gnome'

test('render content', () => {
  const gnome = {
    thumbnail: 'a_thumbnail',
    name: 'a_name',
    hairColor: 'a_hairColor',
    age: 3,
    weight: 'a_weight',
    height: 'a_weight',
  }

  const component = render(<Gnome {...gnome} />)
  component.getByText('a_name')
})

test('render not defined age', () => {
  const gnome = {
    thumbnail: 'a_thumbnail',
    name: 'a_name',
    hairColor: 'a_hairColor',
    age: 'an_age',
    weight: 'a_weight',
    height: 'a_weight',
  }

  const component = render(<Gnome {...gnome} />)
  component.getByText('Not defined')
})

test('render male gender', () => {
  const gnome = {
    thumbnail: 'a_thumbnail',
    name: 'a_name',
    hairColor: 'a_hairColor',
    age: 2,
    weight: 'a_weight',
    height: 'a_weight',
  }

  const component = render(<Gnome {...gnome} />)
  component.getByText('Male')
})

test('render Famele gender', () => {
  const gnome = {
    thumbnail: 'a_thumbnail',
    name: 'a_name',
    hairColor: 'a_hairColor',
    age: 3,
    weight: 'a_weight',
    height: 'a_weight',
  }

  const component = render(<Gnome {...gnome} />)
  component.getByText('Famele')
})
