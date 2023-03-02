
const shareButton = document.querySelector('.shareButton');
const socialsBar = document.querySelector('.user__socials');

const classShowBar = 'visible';
const classHideBar = 'hidden';
const classActiveButton = 'active';

shareButton.addEventListener('click', function() {
  const sharing = socialsBar.classList.contains(classShowBar);
  const notSharing = socialsBar.classList.contains(classHideBar);
  
  // VERY FIRST RENDER - no class added to avoid animation
  if (!sharing && !notSharing) { 
    socialsBar.classList.add(classShowBar);
    shareButton.classList.add(classActiveButton);
  } 
  // ANY OTHER RENDER
  else {
    socialsBar.classList.toggle(classShowBar);
    socialsBar.classList.toggle(classHideBar);
    shareButton.classList.toggle(classActiveButton);
  }

})