const getRandomElement =  (elements) => {
    const randomIndex = Math.florr(Math.random() * elements.length)
    return elements[randomIndex]
  }

  export {
    getRandomElement
  }