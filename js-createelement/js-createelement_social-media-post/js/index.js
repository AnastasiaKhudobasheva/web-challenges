console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent = "Anastasia's first Insta post";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUsername = document.createElement("span");
postUsername.classList.add("post__username");
postUsername.textContent = "@nastiafierce";

const likeButtonNew = document.createElement("button");
likeButtonNew.type = "button";
likeButtonNew.classList.add("post__button");
likeButtonNew.setAttribute("data-js", "like-button");
likeButtonNew.textContent = "♥ Like";

likeButtonNew.addEventListener("click", handleLikeButtonClick);

postFooter.append(postUsername, likeButtonNew);

newPost.append(postContent, postFooter);

document.body.append(newPost);
