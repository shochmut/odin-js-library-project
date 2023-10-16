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





function addBookToLibrary(title, author, pages, publicationDate, read) {
    myLibrary.push(new Book(title, author, pages, publicationDate, read));
    document.getElementById("books").innerHTML = myLibrary.map((book, bookNumber) => 
    `<div class="book-card">
        <div class="card-top">
            <h3>${book.title}</h3>
            <p class="card-pages">Pages: ${book.pageNumber}</p>
            <p>by ${book.author}</p>
        </div>
        <hr></hr>
        <div class="card-bottom">
            <p>Published: ${book.publishDate}</p>
            <div class="read-toggle-row">
                <p>${book.readToggle}</p>
            </div>
            <button data="${bookNumber}" class='remove-book' name="${book.title}" id='remove-book' type="button">Remove Book</button>
            <button data="${bookNumber}" class='toggle-read' id="toggle-read" type="button" value='toggleRead'>Toggle Read Status</button>
        </div>
    </div>`
).join('');
}

// event listener function to handle toggling read status button press and remove book button press
document.getElementById('books').addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.toggle-read')) {
        let index = e.target.attributes.data.value;
        myLibrary[index].readToggle = !myLibrary[index].readToggle;
        e.target.previousElementSibling.previousElementSibling.firstElementChild.innerHTML = myLibrary[index].readToggle;
    }
    if (e.target && e.target.matches('button.remove-book')) {
        let index = e.target.attributes.data.value;
        myLibrary.splice(index, 1);
        e.target.parentElement.parentElement.remove();
        console.log(myLibrary)
    }
})


// waits for "Add Book" click to open up sidebar form
window.addEventListener("DOMContentLoaded", () => {
	document.getElementById("button-71").addEventListener("click", () => {
		const sidebarEl = document.getElementsByClassName("sidebar")[0];
		sidebarEl.classList.toggle("sidebar--isHidden");
	});
});


document.getElementById("books").innerHTML = myLibrary.map((book, bookNumber) => 
    `<div class="book-card">
        <div class="card-top">
            <h3>${book.title}</h3>
            <p class="card-pages">Pages: ${book.pageNumber}</p>
            <p>by ${book.author}</p>
        </div>
        <hr></hr>
        <div class="card-bottom">
            <p>Published: ${book.publishDate}</p>
            <div class="read-toggle-row">
                <p>${book.readToggle}</p>
            </div>
            <button data="${bookNumber}" class='remove-book' name="${book.title}" id='remove-book' type="button">Remove Book</button>
            <button data="${bookNumber}" class='toggle-read' id="toggle-read" type="button" value='toggleRead'>Toggle Read Status</button>
        </div>
    </div>`
).join('');



// event listener to handle add book submission
document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let publicationDate = document.getElementById('publication-date').value;
    let inputRead = document.getElementById('input-read').value;

    addBookToLibrary(title, author, pages, publicationDate, inputRead)
    console.log(author)
});

// document.getElementById("submit").addEventListener("submit", (e) => {
//     e.preventDefault();
//     addBookToLibrary(e);
// })

