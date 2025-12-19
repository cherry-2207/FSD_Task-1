document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.interact-btn');
  console.log(button)
  button.addEventListener('click', () => {
    alert('Welcome to EventEase! Let\'s get started with organizing your events seamlessly.');
    console.log("Button Clicked");
  });
});
