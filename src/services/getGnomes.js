// const API_BRASTLEWARK = window._env_.API_BRASTLEWARK;
const PAGE_SIZE = 20

export default function getGnomes({ page = 1, hairColor = 'All' }) {
  return fetch(
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      const { Brastlewark } = response
      const returnedValues = fakePagination(
        Brastlewark,
        PAGE_SIZE,
        page,
        hairColor
      )
      return returnedValues
    })
    .catch((error) => console.error(error))
}

function fakePagination(array, pageSize, pageNumber, hairColor) {
  if (hairColor !== 'All') {
    const filteredArray = array.filter(
      (current) => current.hair_color === hairColor
    )
    return filteredArray.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    )
  }
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
}
