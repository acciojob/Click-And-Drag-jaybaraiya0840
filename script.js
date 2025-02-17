// Your code here.
const itemsContainer = document.querySelector('.items');
let isDragging = false;
let startX, scrollLeft;

// Function to start dragging the items container
itemsContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - itemsContainer.offsetLeft;
  scrollLeft = itemsContainer.scrollLeft;
  itemsContainer.classList.add('active'); // Add the active class to change cursor and styles
});

// Function to handle dragging the items container
itemsContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // Only execute if dragging is active
  e.preventDefault();
  const x = e.pageX - itemsContainer.offsetLeft;
  const scroll = (x - startX);
  itemsContainer.scrollLeft = scrollLeft - scroll;
});

// Function to stop dragging the items container
itemsContainer.addEventListener('mouseup', () => {
  isDragging = false;
  itemsContainer.classList.remove('active'); // Remove active class when mouse is released
});

// Function to stop dragging if mouse leaves the container area
itemsContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  itemsContainer.classList.remove('active');
});
