// Async function to create a new comment
const newCommentEntry = async (event) =>{
    event.preventDefault();
    console.log("test");

    const content = document.querySelector('#newCommentContent').value.trim();

    if (content) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: {
                'ContentType': 'application/json',
            },
        });
        if (response.ok) {
            window.location.reload();
        } else {
            alert('Failed to add new comment')
        }
    }
}


document
  .querySelector('.newCommentForm')
  .addEventListener('submit', newCommentEntry);

  console.log("test 1");