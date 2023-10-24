//Data: assume we have a list of 5 movies
let topMovies = [{id: 0, title: "The Shawshank Redemption", year: 1994, image_url: "images/movie0.jpg"},
         {id: 1, title: "The Godfather ", year: 1972, image_url: "images/movie1.jpg"},
         {id: 2, title: "The Dark Knight", year: 2008, image_url: "images/movie2.jpg"},
         {id: 3, title: "12 Angry Men", year: 1957, image_url: "images/movie3.jpg"},
         {id: 4, title: " Schindler\'s List", year: 1993, image_url: "images/movie4.jpg"},
        ];

//Slideshow: Automatic
let autoSlideIndex = 0;//Initial slide = 0
function autoSlideShow() {
//Change the slide_index
  if (autoSlideIndex < topMovies.length - 1) {
    autoSlideIndex++;
  } else {
    autoSlideIndex = 0;
  }
  //Change the image source for the img
  document.getElementById("auto-slide-title").innerHTML = topMovies[autoSlideIndex].title;
  document.getElementById("auto-slide-image").src = topMovies[autoSlideIndex].image_url;
  //Wait 2 seconds
  setTimeout(autoSlideShow, 2000);//Auto change slide every 2 seconds
}
autoSlideShow() // Call to run auto slideshow


//MANUAL slideshow
//Slideshow: Manual
let slideIndex = 0;//Initial slide = 0
function nextSlide() {
	
  //Change the slide_index
  if (slideIndex < topMovies.length - 1) {
    slideIndex++;//Increase the index by 1
  } else {
    slideIndex = 0;
  }
  
  //Change the image source for the img
  document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
  document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url; 
  document.getElementById("manual-slide-year").innerHTML = topMovies[slideIndex].year; 
}


function previousSlide() {
	
  //Change the slide_index
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = topMovies.length - 1;
  }
  
  //Change the image source for the img
  document.getElementById("manual-slide-title").innerHTML = topMovies[slideIndex].title;
  document.getElementById("manual-slide-image").src = topMovies[slideIndex].image_url; 
  document.getElementById("manual-slide-year").innerHTML = topMovies[slideIndex].year;  
}


//---------------------------------
//ARTICLES SECTION
//Section with 3 articles: HTML, CSS, Javascript
let articles = [
    {title: "HTML", img_url: "images/html5.png", content: "Morbi accumsan eros quis magna mattis, non commodo quam lobortis. Suspendisse potenti. Mauris bibendum ex a quam tempor, ac tincidunt tellus luctus. Morbi in eleifend metus. Nullam pulvinar ante erat, id tempus ante finibus quis. Nullam non dui ut quam fringilla aliquam. Suspendisse a rutrum arcu, eu lacinia elit. Morbi hendrerit semper egestas. Nullam interdum justo et nisi varius, sit amet pulvinar nisi ullamcorper. Aliquam blandit erat odio, ut pulvinar turpis malesuada sed. Maecenas laoreet bibendum pellentesque. Quisque pharetra tincidunt nisi ut lobortis.", link: "https://www.w3schools.com/html/"},
    {title: "CSS", img_url: "images/css3.png", content: "Nulla facilisi. Etiam tincidunt maximus dolor in auctor. Nullam convallis quam non ligula sagittis sagittis. In vel mi ex. Morbi ornare sem id vestibulum gravida. Integer quis gravida purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel diam bibendum, blandit ante vitae, fringilla est. Fusce eget malesuada sem. Morbi non lacinia odio, vel lacinia velit. Phasellus orci urna, rhoncus non lacus et, euismod accumsan enim. Nam vestibulum consectetur quam, quis placerat urna mollis imperdiet.", link: "https://www.w3schools.com/css/"},
    {title: "JAVASCRIPT", img_url: "images/javascript.png", content: "Morbi auctor lacus vel dolor lobortis sagittis vel ac dolor. Donec mattis lacus aliquam hendrerit pellentesque. Etiam egestas consectetur quam vitae consequat. Sed dapibus sed neque nec tempor. Sed nec massa ac enim pellentesque tristique. Proin pulvinar, metus non dapibus interdum, nisl nisl aliquet felis, sit amet sagittis nisi erat id diam. Phasellus sed neque nec dolor lobortis fringilla vel vitae ipsum. Duis porta congue massa, cursus feugiat felis hendrerit id. Nam ac nunc eget mauris facilisis commodo. Proin non feugiat massa. Pellentesque scelerisque tincidunt pellentesque. Vivamus vitae neque sed sem fringilla sollicitudin. Mauris dapibus metus ac rutrum dapibus.", link: "https://www.w3schools.com/js/"} ,
];

//Build 3 articles:
let allArticles = "";/*At first, we have an empty content*/

//Loop through all elements in the array "articles"
for(let i = 0; i < articles.length; i++) {
     allArticles += 
     `
      <article class="article-style"> 
        <h3>${articles[i].title}</h3>
        <img src="${articles[i].img_url}" height = "100px">
        <p class="content-box">${articles[i].content}</p>
        <button class="read-more-btn"><a href=${articles[i].link}>READ MORE</a></button>
      </article>
    `; 
}

//Update or write this article on HTML webpage
document.getElementById("article-section").innerHTML = allArticles;

//-----------------------------------------
//LONG ARTICLE
//Hide the content "detailed" FIRST
document.getElementById("detailed").style.display = "none";//Hide the content

function expandText() {
    //Find the expandBtn element on HTML file
    let expandBtn = document.getElementById("expandBtn");
    
    //Check whether to expand or collapse text based on the text display on the button
    if (expandBtn.value.toLowerCase() == "hide") {
        document.getElementById("detailed").style.display = "block";//Show the content
        expandBtn.value = "show";
        expandBtn.textContent = "HIDE";
    } else {
        document.getElementById("detailed").style.display = "none";//Hide the content
        expandBtn.value = "hide";
        expandBtn.textContent = "READ MORE";
    }   
}   


//-------------------------------------
//Dropdown menu with items
//list of options
let listOfOptions = [
  {id: 0, title: "The The Shawshank Redemption", year: 1994, 
      image_url: "https://www.filmsite.org/posters/shawshankredemption.jpg"},
	{id: 1, title: "The Godfather", year: 1992, 
      image_url: "https://media.timeout.com/images/105455970/750/562/image.jpg"},
	{id: 2, title: "The Dark Knight", year: 2008, 
       image_url: "https://upload.wikimedia.org/wikipedia/sco/8/8a/Dark_Knight.jpg"},
	 {id: 3, title: "Star Wars", year: 1977, 
        image_url: "https://media.timeout.com/images/105456000/750/562/image.jpg"},
	  {id: 4, title: " Schindler\'s List", year: 1993, 
        image_url: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"},
];

//-----
//Populate the select "options" with all the movies in the array when the page is loaded
function loadOptions() {
  //Loop through all items in the list
	for(var i=0; i < listOfOptions.length; i++) {
		//Create a new child HTML node/element as "<option>" (as a child node)
		let node = document.createElement("option");
		//Assign option "text content" and "value" to this new node
		node.value = listOfOptions[i].id.toString();
		node.textContent = listOfOptions[i].title.toString();	
		//Append the above HTML node (option) to the parent node "movieList"	
		document.getElementById("my-movieList").appendChild(node);				
	}		
	//Set the first movie as selected option in drop-down list
	document.getElementById("my-movieList").selectedIndex= "0";	
}
//call to execute this function when loading the webpage
loadOptions();

//------
//When loading the webpage, display the first option in the list
let theFirstOption = `
         <h3>${listOfOptions[0].title}</h3>
         <p>${listOfOptions[0].year}</p>
         <img src=${listOfOptions[0].image_url} class="movie-image-style" />	
      `;   
//Display this first option on "movie-card" id
document.getElementById("movie-card").innerHTML = theFirstOption;	

//-------
//When user select an option in the dropdown menu (select), display that option
function displayMyMovie() {
	//Get the selected movie "option value"
	let selectedOptionValue = document.getElementById("my-movieList").value;	
  //Selected movie info
  let selectedOption = `
         <h3>${listOfOptions[selectedOptionValue].title}</h3>
         <p>${listOfOptions[selectedOptionValue].year}</p>
         <img src=${listOfOptions[selectedOptionValue].image_url} class="movie-image-style" />
      `; 
  //Display selected option
  document.getElementById("movie-card").innerHTML = selectedOption;	
}


//-------------------------------
//List of items
let itemList = [
  {id: 0, title: "Item 1", price: 5,  category: "A", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis sollicitudin, luctus arcu nec, consequat felis. Mauris rhoncus lorem eget turpis iaculis venenatis.", image_url: "https://placehold.co/400"},
	{id: 1, title: "Item 2", price: 10, category: "B", description: "Sed imperdiet justo ex, et auctor arcu faucibus ut. Integer pulvinar nibh tortor, in cursus nisl fringilla vitae. Donec molestie lacinia commodo. Vivamus ut auctor orci. Proin a ex condimentum, fermentum urna ut, pulvinar mauris. Praesent sem dui, congue eget dignissim ut, pretium at tortor", image_url: "https://placehold.co/400"},
	{id: 2, title: "Item 3", price: 20, category: "C", description: "Donec molestie lacinia commodo. Vivamus ut auctor orci. Proin a ex condimentum, fermentum urna ut, pulvinar mauris. Praesent sem dui, congue eget dignissim ut, pretium at tortor", image_url: "https://placehold.co/400"},
	{id: 3, title: "Item 4", price: 30, category: "A", description: "Sed imperdiet justo ex, et auctor arcu faucibus ut. Integer pulvinar nibh tortor, in cursus nisl fringilla vitae.", image_url: "https://placehold.co/400"},
	{id: 4, title: "Item 5", price: 40, category: "B", description: "Nulla imperdiet, massa gravida dictum volutpat, tortor urna efficitur leo, nec tincidunt arcu ligula at lorem. ", image_url: "https://placehold.co/400"},
  {id: 5, title: "Item 6", price: 50, category: "C", description: "Vivamus ornare nunc quis convallis finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Ut elementum sapien at semper malesuada.", image_url: "https://placehold.co/400"},
  {id: 6, title: "Item 7", price: 60, category: "A", description: " Aenean pharetra quis elit non suscipit. Suspendisse nec arcu vel elit mollis pharetra id et orci.", image_url: "https://placehold.co/400"},
  {id: 7, title: "Item 8", price: 70, category: "B", description: "Pellentesque aliquet consequat turpis a rutrum. Duis molestie facilisis sodales. Cras eget diam iaculis, sagittis diam et, volutpat libero. Cras vulputate risus sed rhoncus consectetur.  ", image_url: "https://placehold.co/400"},
  {id: 8, title: "Item 9", price: 80, category: "C", description: "In non mi non ex pellentesque dictum eget sed ante. Fusce tellus sapien, sagittis consequat sollicitudin eget, venenatis eu nisi. ", image_url: "https://placehold.co/400"},
  {id: 9, title: "Item 10", price: 90, category: "A",description: "Etiam nulla mauris, vehicula in turpis non, hendrerit luctus lectus.", image_url: "https://placehold.co/400"},
];

//Display the above list of items in grid
let allItems = "";
for (let i = 0; i < itemList.length ; i++) {
  //build the html dipslay of the item
  allItems += `
    <div class="item-card">
      <div class="item-style">
        <h3 class="text-style-center">${itemList[i].title}</h3>
        <p class="text-style-center">\$${itemList[i].price}</p>
        <img src=${itemList[i].image_url} class="image-style">	
        <p class="text-style-center">${itemList[i].description}</p>
        <div class="text-style-center">
          <button class="add-button-style" onclick="addToCartUpdate(${itemList[i].id})">ADD TO CART</button>
        </div>								
      </div>							
      </div>
   `;     
}
//Display a list of movie objects on webpage UI
document.getElementById("item-list").innerHTML = allItems;

//Filter feature: https://www.w3schools.com/jsref/jsref_filter.asp
function displayFiltedItems() {
	//Get keyword entered by user
	let keyword = document.getElementById("searchInput").value.toLowerCase();
	//Display the filtered items
	let allItems = "";
	for (let i = 0; i < itemList.length ; i++) {
		//build the html dipslay of the item
    if (itemList[i].title.toLowerCase().includes(keyword)) {
      allItems += `
        <div class="item-card">
          <div class="item-style">
            <h3 class="text-style-center">${itemList[i].title}</h3>
            <p class="text-style-center">\$${itemList[i].price}</p>
            <img src=${itemList[i].image_url} class="image-style">	
            <p class="text-style-center">${itemList[i].description}</p>
            <div class="text-style-center">
              <button class="add-button-style" onclick="addToCartUpdate(${itemList[i].id})">ADD TO CART</button>
            </div>								
          </div>							
          </div>
          `;   
    }  
	}	
	//Display a list of movie objects on UI
	document.getElementById("item-list").innerHTML = allItems;	
}

//CATEGORY
//When user select an option in the dropdown menu (select), display that option
function displaySelectedCategory() {
	//Get the selected category
	let selectedCategory = document.getElementById("categorySelect").value;	
  
  //Display the filtered movies
	let allItems = "";
	for (let i = 0; i < itemList.length ; i++) {
		//build the html dipslay of the item
    if (itemList[i].category.toLowerCase().includes(selectedCategory.toLowerCase())) {
      allItems += `
        <div class="item-card">
          <div class="item-style">
            <h3 class="text-style-center">${itemList[i].title}</h3>
            <p class="text-style-center">\$${itemList[i].price}</p>
            <img src=${itemList[i].image_url} class="image-style">	
            <p class="text-style-center">${itemList[i].description}</p>
            <div class="text-style-center">
              <button class="add-button-style" onclick="addToCartUpdate(${itemList[i].id})">ADD TO CART</button>
            </div>								
          </div>							
          </div>
          `;   
    }  
	}	

	//Display a list of movie objects on UI
	document.getElementById("item-list").innerHTML = allItems;	
}





