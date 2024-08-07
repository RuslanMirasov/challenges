console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

//Creating post element
const newPost = document.createElement("section");
newPost.classList.add("post");

//Creating content element
const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent = `My new social media post has been successfully published!`;

//Creating footer element
const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

//Creating Username element
const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = `@RuslanMirasov`;

//Creating button element
const newPostButton = document.createElement("button");
newPostButton.classList.add("post__button");
newPostButton.setAttribute("type", "button");
newPostButton.setAttribute("data-js", "like-button");
newPostButton.textContent = `♥ Like`;
newPostButton.addEventListener("click", handleLikeButtonClick);

//Merging all elements
newPostFooter.append(newPostUsername, newPostButton);
newPost.append(newPostContent, newPostFooter);

//Final render
document.body.append(newPost);
