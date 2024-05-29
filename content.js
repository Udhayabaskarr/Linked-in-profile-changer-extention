// content.js

// URL of the new profile picture
const newProfilePictureUrl = 'https://raw.githubusercontent.com/Udhayabaskarr/Images/main/20230717_174108.jpg';

// Function to replace profile pictures
function replaceProfilePictures() {
  // Select all profile picture elements in LinkedIn feed
  const profilePictures = document.querySelectorAll('img.feed-shared-actor__avatar-image, img.ivm-view-attr__img--centered');

  profilePictures.forEach(img => {
    // Replace the source of each profile picture with the new image URL
    img.src = newProfilePictureUrl;
    img.srcset = newProfilePictureUrl;
  });
}

// Run the function initially
replaceProfilePictures();

// Observe changes in the feed to replace newly loaded profile pictures
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });
