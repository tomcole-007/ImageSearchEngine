const search_form = document.querySelector("#Search-Form");
const search_from_here = document.querySelector("#search-from-here");
const search_reslut = document.querySelector("#Search-reslut");
const show_more_button = document.querySelector("#show-more-button");

let Keyword = "";
let page = 1;
let access_key ="QFlSj8qEcsYWpDDeVFj5KIazjwvCmbXqAZ2iOPiAe-U"

async function searchImages() {
    Keyword = search_from_here.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${access_key}&per_page=12`;

    const response = await fetch(url);
    const Data = await response.json();
    
    if(page ===1)
    {
        search_reslut.innerHTML="";
    }

    const results = Data.results;
    results.map((results)=>{
        const image = document.createElement("img");
        image.src = results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        search_reslut.appendChild(imageLink);
        show_more_button.style.display="block";

    })
   

}

search_form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
    console.log("Submitted");
})

show_more_button.addEventListener("click",()=>{
    page++;
    searchImages();
})

