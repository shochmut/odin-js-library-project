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

myLibrary.push(new Book('The Hobbit', 'JR Tolkien', '304', 'September 21, 1937', false))

function addBookToLibrary(event) {
    myLibary.push(new Book(event.title));
    const string = JSON.stringify(myLibrary, null, 4);
    document.querySelector(".books").innerHTML = string;
    event.preventDefault
}


// document.getElementByName('Submit').addEventListener('click', addBookToLibrary(event))
document.getElementsByClassName('books').innerHTML = myLibrary.map(book => 
    <div>
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
    </div>
).join('');


console.log(myLibrary.map(book => {
    return book['title'];
}))