const container = document.querySelector('.container');

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCount}`);
    const data = await response.json();
    data.map((curElm, index, data) => {
        const htmlData = `
            <div class="posts">
                <p class="post-id">${postCount++}</p>
                <h2 class="title">${curElm.title}</h2>
                <p class="post-info">${curElm.body}</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', htmlData);
    });
};

getPost();

const showData=()=>{
    setTimeout(()=>{
        pageCount++;
        getPost();


    },10)
};

// Infinite scroll logic
// Infinite scroll logic
window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    console.log("Scroll Height:", scrollHeight);
    console.log("Scroll Top:", scrollTop);
    console.log("Client Height:", clientHeight);
    if ((scrollTop + clientHeight + 1)>= scrollHeight){
        console.log("I am at the bottom ");
    showData();}
});

