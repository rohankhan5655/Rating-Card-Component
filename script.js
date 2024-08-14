document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.number-box');
    const card = document.querySelector(".card");
    const card1 = document.querySelector(".card1")
    const button = document.querySelector("button");
    const selectedRatingSpan = document.getElementById("selectedRating");
    let error = document.querySelector(".error");
  
    boxes.forEach(box => {
      box.addEventListener('click', () => {
        // Check if the clicked box already has the 'active' class
        const isActive = box.classList.contains('active');
  
        // Remove 'active' class from all boxes
        boxes.forEach(b => b.classList.remove('active'));
  
        // Only add 'active' class if the clicked box wasn't already active
        if (!isActive) {
        box.classList.add('active');
        selectedRatingSpan.textContent = `You selected${box.textContent} out of 5`;
        }
      });
    });
  
    button.addEventListener('click', () => {
      // Check if any box is currently active
      const isAnyBoxActive = Array.from(boxes).some(box => box.classList.contains('active'));
  
      if (isAnyBoxActive) {
        // Hide the card if a box is active
        card.classList.add('hide'); // or use card.style.display = 'none';
       card1.classList.remove("hide")
        
      } else {
        // Optionally, you can handle the case where no box is active
        error.classList.remove("hide")
        setInterval(() => {
        (error.classList.add("hide"))
        }, 3000);
      }
    });
  });
  