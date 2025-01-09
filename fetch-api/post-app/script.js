const container = document.querySelector(".container");
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

//Making http request

// 1) get the endpoint of the server/api
const url = "https://jsonplaceholder.typicode.com/posts";

// fetch(url)
// .then(res => {
//     res.json().then(data => console.log(data));
// })
// .catch(err=>console.log(err));

const fetchPosts = async() => {
    try{
        const response = await fetch(url);
        const data = await response.json();

        // display to DOM
        const result = data.map(post => {
            return `
            <div class="card">
        <div class="card-title">
          <h2>${post.title}</h2>
        </div>
        <div class="card-body">
          <p>
            ${post.body}
          </p>
        </div>
      </div>`;
        });
        container.innerHTML = result.join("");
    }
    catch(error){
        console.log(error);
    }
};

btn.addEventListener("click",fetchPosts);