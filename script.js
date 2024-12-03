
const books = [
    {
        author: "كتب دينية", // category of the books
        images: [
            { src: "din/cart_default (1).jpg", price: "15.00" },
            { src: "din/gratis-png-sahih-al-bukhari-sahih-coran-musulman-islam-hadith-islam (1).png", price: "10.00" },
            { src: "din/images (3) (1).jpg", price: "20.00" },
            { src: "din/images (4) (1).jpg", price: "15.00" },
            { src: "din/img-30-46105-أنت-أيضا-صحابية-مكتبة-زاد-1 (2).jpg", price: "14.00" },
            { src: "din/png-clipart-sahih-muslim-مختصر-صحيح-مسلم-jami-at-tirmidhi-islam-book-islam-religion-islam (1).png", price: "18.00" },
            { src: "din/s-books-library.net-07152320Mj3K4 (1).jpg", price: "20.00" },
            { src: "din/the-consensus-of-the-4-schools-on-the-obligation-of-the-hijab (1).jpg", price: "25.00" },
            { src: "din/سليب (1).jpg", price: "20.00" },
            { src: "din/nrVU231808.jpg", price: "15.00" },
            { src: "din/images (10).jpg", price: "12.00" },
            { src: "din/images (9).jpg", price: "12.00" },
            { src: "din/images (8).jpg", price: "3.00" },
            { src: "din/images (7).jpg", price: "16.00" },
            { src: "din/images (6).jpg", price: "11.00" }
        ]
    },
    {
        author: "كتب ثقافية", 
        images: [
            { src: "sakafye/71nUfOLyB2L.jpg", price: "10.00" },
            { src: "sakafye/260295.jpg", price: "10.00" },
            { src: "sakafye/18587959.jpg", price: "10.00" },
            { src: "sakafye/51061862.jpg", price: "5.00" },
            { src: "sakafye/51584158.svg", price: "5.00" },
            { src: "sakafye/63264227.jpg", price: "10.00" },
            { src: "sakafye/9789953978550.jpg", price: "10.00" },
            { src: "sakafye/20201207111555659622.jpg", price: "10.00" },
            { src: "sakafye/d597e6fde5b0aa0e61c71c8b601d2898.png.webp", price: "10.00" },
            { src: "sakafye/images (11).jpg", price: "15.00" },
            { src: "sakafye/images (12).jpg", price: "18.00" },
            { src: "sakafye/images (13).jpg", price: "14.00" },
            { src: "sakafye/images (14).jpg", price: "10.00" },
            { src: "sakafye/images (15).jpg", price: "10.00" },
            { src: "sakafye/images (16).jpg", price: "11.00" },
            { src: "sakafye/images (17).jpg", price: "20.00" },
            { src: "sakafye/images (18).jpg", price: "5.00" },
            { src: "sakafye/images (19).jpg", price: "5.00" },
            { src: "sakafye/images (20).jpg", price: "4.00" },
            { src: "sakafye/images (21).jpg", price: "4.00" },
            { src: "sakafye/images (22).jpg", price: "4.00" }
        ]
    },
    {
        author: "كتب اطفال", 
        images: [
            { src: "children/7d40c77a9eff12918f4b8bfb725d37ac.png.webp", price: "10.00" },
            { src: "children/7409b601-4d35-4c9c-94a2-572e42be31e5.webp", price: "10.00" },
            { src: "children/8164589.jpg", price: "5.00" },
            { src: "children/Harry_potter_and_the_philosophers_stone_(Arabic).jpg", price: "5.00" },
            { src: "children/images (23).jpg", price: "10.00" },
            { src: "children/images (24).jpg", price: "10.00" },
            { src: "children/images (25).jpg", price: "10.00" },
            { src: "children/images (26).jpg", price: "10.00" },
            { src: "children/images (27).jpg", price: "15.00" },
            { src: "children/images (28).jpg", price: "18.00" },
            { src: "children/images (29).jpg", price: "14.00" },
            { src: "children/images (30).jpg", price: "10.00" },
            { src: "children/images (31).jpg", price: "10.00" },
            { src: "children/images (32).jpg", price: "11.00" },
            { src: "children/images (33).jpg", price: "20.00" },
            { src: "children/images (34).jpg", price: "5.00" },
            { src: "children/images (35).jpg", price: "5.00" },
            { src: "children/images (36).jpg", price: "4.00" },
            { src: "children/images (37).jpg", price: "4.00" }
        ]
    },
    {
        author: "كتب حب", 
        images: [
            { src: "love/92e215caed8ad19d0a175e16bc07e148.png.webp", price: "5.00" },
            { src: "love/260px-Asr_elhob.jpg", price: "5.00" },
            { src: "love/153037.jpeg.webp", price: "5.00" },
            { src: "love/images (1).png", price: "5.00" },
            { src: "love/images (38).jpg", price: "5.00" },
            { src: "love/images (40).jpg", price: "5.00" },
            { src: "love/images (41).jpg", price: "5.00" },
            { src: "love/images (42).jpg", price: "5.00" },
            { src: "love/images (43).jpg", price: "5.00" },
            { src: "love/images (44).jpg", price: "5.00" },
            { src: "love/images (45).jpg", price: "5.00" },
            { src: "love/images (46).jpg", price: "5.00" },
            { src: "love/images (47).jpg", price: "5.00" },
            { src: "love/images (48).jpg", price: "5.00" },
            { src: "love/images (49).jpg", price: "5.00" },
            { src: "love/images (50).jpg", price: "5.00" },
            { src: "love/images (51).jpg", price: "5.00" },
            { src: "love/images (52).jpg", price: "5.00" },
            { src: "love/images (53).jpg", price: "5.00" },
            { src: "love/images (54).jpg", price: "5.00" },
            { src: "love/images (55).jpg", price: "5.00" },
            { src: "love/images (56).jpg", price: "5.00" }
        ]
    },
    {
        author: "روايات", 
        images: [
            { src: "rweyet/4a64a46257d0834766f4602e91b99f6b.png.webp", price: "5.00" },
            { src: "rweyet/61NEH1Uoh1L._UF1000,1000_QL80_.jpg", price: "5.00" },
            { src: "rweyet/300px-ذاكرة_الجسد.jpg", price: "5.00" },
            { src: "rweyet/0001012_-_510.jpeg", price: "5.00" },
            { src: "rweyet/images (57).jpg", price: "5.00" },
            { src: "rweyet/images (58).jpg.webp", price: "5.00" },
            { src: "rweyet/images (59).jpg", price: "5.00" },
            { src: "rweyet/images (60).jpg", price: "5.00" },
            { src: "rweyet/images (61).jpg", price: "5.00" },
            { src: "rweyet/images (62).jpg", price: "5.00" },
            { src: "rweyet/images (63).jpg", price: "5.00" },
            { src: "rweyet/images (64).jpg", price: "5.00" },
            { src: "rweyet/images (65).jpg", price: "5.00" }
        ]
    }
];

//This code is used to make the shopping cart icon interactive, leading users to a cart page when clicked.
document.querySelector(".fas.fa-shopping-cart").onclick = function() {
    console.log("Cart icon clicked!"); 
    window.location.href = "cart.html";
}





//the entire books array is saved into the browser's localStorage using:
//setItem()  is a method of localStorage used to store data. It takes two arguments
//The key ('books' in this case
//'books' is the key used to store the array in localStorage.
//The value (the second argument): This is the actual data to be stored
localStorage.setItem('books', JSON.stringify(books));



//This function is used when a user selects or enters a category name to filter the books.
function selectCategory(category) {
    document.getElementById('authorInput').value = category;
}




//This function is triggered when the user performs a search by entering a category in the authorInput field.
function searchBooks() {
    const authorInput = document.getElementById("authorInput").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("bookResults");
    resultsContainer.innerHTML = '';
    if (authorInput === '') {
        resultsContainer.innerHTML = "Please enter a category to search.";
        return;
    }




//The books array is retrieved  the books array from localStorage using localStorage.getItem('books'), and JSON.parse() converts the string back into an array of objects.
    const books = JSON.parse(localStorage.getItem('books'));


    // filter and display books based on a search term 
    const filteredBooks = books.filter(book => book.author.toLowerCase().includes(authorInput));

    if (filteredBooks.length > 0) {
        localStorage.setItem('filteredBooks', JSON.stringify(filteredBooks)); // Store filtered books
        window.location.href = 'search.html';
    } else {
        resultsContainer.innerHTML = "No books found for this category.";
    }
}