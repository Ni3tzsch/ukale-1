export const getFirstLetter = (name) => {
  let words = name.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toUpperCase()
  }

  return {
    first: words[0]?.charAt(0) || '',
    second: words[1]?.charAt(0) || '',
    third: words[2]?.charAt(0) || '',
    fourth: words[3]?.charAt(0) || '',
  }
}

console.log(getFirstLetter('Parking Longchamps'))
