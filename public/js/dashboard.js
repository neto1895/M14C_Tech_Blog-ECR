


function redirectToBlogPost(blogpostId) {
  window.location.href = `/blogpost/${blogpostId}`;
}

const newBlogpostEntry = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#titleNewPost').value.trim();
  const content = document.querySelector('#contentNewPost').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogposts`, {
      method: 'POST',
      body: JSON.stringify({ title, content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create new post');
    }
  }
};


document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newBlogpostEntry);
