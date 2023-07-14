// Async function to create a new comment
const newCommentEntry = async (event) =>{

    console.log("button working");

    const currentURL = window.location.href;
    const blogpost_id = parseInt(currentURL.match(/\d+$/)[0]);
    console.log(blogpost_id); // Output: The last digit of the URL

    const content = document.querySelector('#newCommentContent').value.trim();
    console.log(content);

    console.log(JSON.stringify({ content, blogpost_id}));
    if (content && blogpost_id) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ content, blogpost_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            console.log("response ok")
            document.location.replace('/blogpost/'+blogpost_id);
        } else {
            alert('Failed to add new comment')
        }
    }
};