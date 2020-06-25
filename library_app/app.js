//book class: Represents a book
class Books{
    constructor(title, author, isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
//UI Class: handles UI tasks
class UI{
    static displayBooks(){
        const StoredBooks=[
            {
                title:'Book one',
                author: 'John Doe',
                isbn: '123526'

            },
            {
                title:'Book one',
                author: 'John Doe',
                isbn: '123526'

            }
            
        ];
        const books=StoredBooks;
//        books.forEach((book)=>UI.addBookToList(book));
    }
        static addBookToList(book){
        const list=document.querySelector('#book-list');
        const row=document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);

        }
        static deleteBook(el){
            if(el.classList.contains('delete')){
                el.parentNode.parentNode.remove();
            }

        }
        static clearFields(){
            document.querySelector('#title').value="";
            document.querySelector('#author').value="";
            document.querySelector('#isbn').value="";
        }
        
    }

//Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Events: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    //prevent default
    e.preventDefault();
    //Get form values
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;
    //instatiate book
    const book=new Books(title, author, isbn);
    //console.log(book);
    UI.addBookToList(book);
    UI.clearFields();
});

//Event: Remove a Book 
document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target);
})