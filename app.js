const myLibrary = []; //initalize empty library for books

function Book(title, author, pageNumber, publishDate, readToggle) {
    //book constructor function
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.publishDate = publishDate;
    this.readToggle = readToggle;

    // this.info = () => {
    //     output = `${this.title} by ${this.author}, ${this.pageNumber} pages, ${readToggle}`
    //     return output;
    // }
}

myLibrary.push(new Book('The Hobbit', 'JR Tolkien', 304, 'September 21, 1937', false))
myLibrary.push(new Book('To Kill a Mockingbird', 'Harper Lee', 336, 'July 11, 1960', true ))
myLibrary.push(new Book())
myLibrary.push(new Book())
myLibrary.push(new Book())
myLibrary.push(new Book())
myLibrary.push(new Book())
myLibrary.push(new Book())
myLibrary.push(new Book())
myLibrary.push(new Book())
myLibrary.push(new Book())




function addBookToLibrary(event) {
    myLibary.push(new Book(event.title));
    const string = JSON.stringify(myLibrary, null, 4);
    document.querySelector(".books").innerHTML = string;
    event.preventDefault();
}

// waits for "Add Book" click to open up sidebar form
window.addEventListener("DOMContentLoaded", () => {
	document.getElementById("button-71").addEventListener("click", () => {
		const sidebarEl = document.getElementsByClassName("sidebar")[0];
		sidebarEl.classList.toggle("sidebar--isHidden");
	});
});


// document.getElementByName('Submit').addEventListener('click', addBookToLibrary(event))
document.getElementById("books").innerHTML = myLibrary.map((book) => 
    `<div class="book-card">
        <div class="card-top">
            <h3>${book.title}</h3>
            <p class="card-pages">Pages: ${book.pageNumber}</p>
            <p>by ${book.author}</p>
        </div>
        <hr></hr>
        <div class="card-bottom">
            <p>Published: ${book.publishDate}</p>
            <p>${book.readToggle}</p>
        </div>
    </div>`
).join('')
    
