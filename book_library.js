const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const search = document.getElementById("search");
const genreFilter = document.getElementById("genreFilter");

let books = JSON.parse(localStorage.getItem("books")) || [];

function displayBooks() {
  const query = search.value.toLowerCase();
  const genre = genreFilter.value;
  bookList.innerHTML = "";

  const filtered = books.filter(book =>
    (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)) &&
    (genre === "" || book.genre === genre)
  );

  filtered.forEach((book, index) => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Status: ${book.borrowed ? "Borrowed" : "Available"}</p>
      <button onclick="toggleBorrow(${index})">${book.borrowed ? "Return" : "Borrow"}</button>
    `;
    bookList.appendChild(div);
  });
}

bookForm.addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;

  books.push({ title, author, genre, borrowed: false });
  localStorage.setItem("books", JSON.stringify(books));
  bookForm.reset();
  displayBooks();
});

function toggleBorrow(index) {
  books[index].borrowed = !books[index].borrowed;
  localStorage.setItem("books", JSON.stringify(books));
  displayBooks();
}

search.addEventListener("input", displayBooks);
genreFilter.addEventListener("change", displayBooks);

displayBooks();
