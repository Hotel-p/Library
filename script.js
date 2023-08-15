const books = document.querySelector(".books");
const submitBtn = document.getElementById("submit");
const Add = document.getElementById("Add");
const Cancel = document.getElementById("Cancel");
const Form = document.getElementById("Form");


Add.addEventListener('click', ()=>{
    Form.style.visibility = "visible";
})

Cancel.addEventListener('click', ()=>{
    Form.style.visibility = "hidden";
})

class book {
    constructor(bookName, author, pageCount, status) {
        this.bookName = bookName;
        this.author = author;
        this.pageCount = pageCount;
        this.status = status;
    }
}


submitBtn.addEventListener('click', ()=>{
    let bookName = document.getElementById("bookname").value;
    let author = document.getElementById("author").value;
    let pageCount = document.getElementById("pagecount").value;
    let statusB = document.querySelector('input[name="status"]:checked').value;
    const newBook = new book(bookName, author, pageCount, statusB);
    
    const bookToAdd = document.createElement('div');
    bookToAdd.classList.add("book");

    const newBookName = document.createElement("div")
    newBookName.classList.add("Title");
    newBookName.innerHTML = `${newBook.bookName}`;
    const newBookAuthor = document.createElement("div")
    newBookAuthor.innerHTML = `Author: ${newBook.author}`;
    const newBookPage = document.createElement("div")
    newBookPage.innerHTML = `Pages: ${newBook.pageCount}`;
    const newBookStatus = document.createElement("div")
    newBookStatus.innerHTML = `Status: ${newBook.status}`;
    
    const newBookUpdate = document.createElement("div")
    newBookUpdate.innerHTML = "Update status";
    newBookUpdate.classList.add("UpdateBook", "options");
    newBookUpdate.addEventListener('click', ()=>{
        if(newBookStatus.innerHTML === "status: read"){
            newBookStatus.innerHTML = "status: unread";
        }
        else{
            newBookStatus.innerHTML = "status: read";
        }
    })


    const newBookDelete = document.createElement("div");
    newBookDelete.classList.add("DeleteBook", "options");
    newBookDelete.innerHTML = "Delete";
    newBookDelete.addEventListener('click',()=>{
        books.removeChild(bookToAdd);
    })

    bookToAdd.appendChild(newBookName);
    bookToAdd.appendChild(newBookAuthor);
    bookToAdd.appendChild(newBookPage);
    bookToAdd.appendChild(newBookStatus);
    bookToAdd.appendChild(newBookDelete)
    bookToAdd.appendChild(newBookUpdate)

    books.appendChild(bookToAdd);

    Form.style.visibility = "hidden";
})







