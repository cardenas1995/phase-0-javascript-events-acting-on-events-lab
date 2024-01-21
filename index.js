function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left);
  
    if (currentPosition > 0) {
      const newPosition = currentPosition - 5; // Adjust the value as needed
      dodger.style.left = `${newPosition}px`;
    }
  }
  

  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left);
  
    if (currentPosition < 360) {
      const newPosition = currentPosition + 5; // Adjust the value as needed
      dodger.style.left = `${newPosition}px`;
    }
  }