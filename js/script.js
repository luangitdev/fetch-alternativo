//Reescrevendo o fetch separando tudo por função.
async function loadPosts(){
    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    return req.json();
}

function changeToLoadingState(){
    document.getElementById("posts").innerHTML = "Carregando....";
}

// function renderPost(post){
//     return `
//         <h3>${post.title}</h3>
//         ${post.body}<br/>
//         <hr/>
//     `;
// }

function renderPost(post){
    return `
        <form> 
            <label> ID: </label> 
            <label>${post.id}</label><br>
            <label> Título: </label> 
            <label>${post.title}</label><br>
            <label> Decrição: </label> 
            <label>${post.body}</label><br>
        </form>
    `;
}

function renderPosts(posts){
    return posts.map((post) => renderPost(post)).join("");
}

async function fetchPostsAndRender(){
    changeToLoadingState();
    const posts = await loadPosts();
    document.getElementById("posts").innerHTML = renderPosts(posts);
}