// Get random hexadecimal color
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const drawContainer = (containerSize, childSize, numberOfChildren) => {
  const containerElement = document.getElementById('mainSquare') // Getting container element
  const errorMessageElement = document.getElementById('error-message') // Getting error message element
  let hoverTimeout = null
  let errorMessage = ''

  const maxItemsPerLine = Math.floor(containerSize / childSize); // How many square can fit each row
  const maxFit = Math.min(maxItemsPerLine * maxItemsPerLine, numberOfChildren); // Total of items that can fit in container

  // Setting style container
  containerElement.style.width = `${containerSize}px`
  containerElement.style.height = `${containerSize}px`
  containerElement.style.border = 'solid 1px'

  if (maxFit > 0) {
    for (let i = 0; i < maxFit; i++) {
      const squareElement = document.createElement('div') // Create a new child

      squareElement.style.width = `${childSize}px` // Set childs' width
      squareElement.style.height = `${childSize}px` // Set childs' height
      squareElement.style.backgroundColor = randomColor() // Set random color for first time

      // Create a new event, for each square created
      squareElement.addEventListener('mouseover', () => {
        squareElement.style.backgroundColor = randomColor()

        // Display none when hove for 2 sec
        hoverTimeout = setTimeout(() => {
          squareElement.style.display = 'none'
        }, 2000)
      })

      // If leave hover, clear timeout, don't remove child
      squareElement.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout)
      })

      containerElement.appendChild(squareElement) // Append child created to container
    }
  }

  // Setting message error and display it if is necessary
  errorMessage = (maxFit === 0) ? "Container can't fit any square" : `Container can't fit all the squares, just fit <b>${maxFit}</b> of <b>${numberOfChildren}</b> squares`
  if (numberOfChildren > maxFit) errorMessageElement.innerHTML = errorMessage
}


drawContainer(200, 50, 17)

// drawContainer(310, 200, 4)
// drawContainer(413, 42, 30)
// drawContainer(200, 300, 2)
