
const books = [
    {
        author: "كتب دينية", // Author of the books
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
            { src: "din/images (6).jpg", price: "11.00" },
        ]
    },
    {
        author: "كتب ثقافية", // Author of the books
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
        author: "كتب اطفال", // Author of the books
        images: [
            { src: "atfal/7d40c77a9eff12918f4b8bfb725d37ac.png.webp", price: "10.00" },
            { src: "atfal/7409b601-4d35-4c9c-94a2-572e42be31e5.webp", price: "10.00" },
            { src: "atfal/8164589.jpg", price: "5.00" },
            { src: "atfal/Harry_potter_and_the_philosophers_stone_(Arabic).jpg", price: "5.00" },
            { src: "atfal/images (23).jpg", price: "10.00" },
            { src: "atfal/images (24).jpg", price: "10.00" },
            { src: "atfal/images (25).jpg", price: "10.00" },
            { src: "atfal/images (26).jpg", price: "10.00" },
            { src: "atfal/images (27).jpg", price: "15.00" },
            { src: "atfal/images (28).jpg", price: "18.00" },
            { src: "atfal/images (29).jpg", price: "14.00" },
            { src: "atfal/images (30).jpg", price: "10.00" },
            { src: "atfal/images (31).jpg", price: "10.00" },
            { src: "atfal/images (32).jpg", price: "11.00" },
            { src: "atfal/images (33).jpg", price: "20.00" },
            { src: "atfal/images (34).jpg", price: "5.00" },
            { src: "atfal/images (35).jpg", price: "5.00" },
            { src: "atfal/images (36).jpg", price: "4.00" },
            { src: "atfal/images (37).jpg", price: "4.00" }
        ]
    },
    {
        author: "كتب حب", // Author of the books
        images: [
            { src: "7ob/92e215caed8ad19d0a175e16bc07e148.png.webp", price: "5.00" },
            { src: "7ob/260px-Asr_elhob.jpg", price: "5.00" },
            { src: "7ob/153037.jpeg.webp", price: "5.00" },
            { src: "7ob/images (1).png", price: "5.00" },
            { src: "7ob/images (38).jpg", price: "5.00" },
            { src: "7ob/images (40).jpg", price: "5.00" },
            { src: "7ob/images (41).jpg", price: "5.00" },
            { src: "7ob/images (42).jpg", price: "5.00" },
            { src: "7ob/images (43).jpg", price: "5.00" },
            { src: "7ob/images (44).jpg", price: "5.00" },
            { src: "7ob/images (45).jpg", price: "5.00" },
            { src: "7ob/images (46).jpg", price: "5.00" },
            { src: "7ob/images (47).jpg", price: "5.00" },
            { src: "7ob/images (48).jpg", price: "5.00" },
            { src: "7ob/images (49).jpg", price: "5.00" },
            { src: "7ob/images (50).jpg", price: "5.00" },
            { src: "7ob/images (51).jpg", price: "5.00" },
            { src: "7ob/images (52).jpg", price: "5.00" },
            { src: "7ob/images (53).jpg", price: "5.00" },
            { src: "7ob/images (54).jpg", price: "5.00" },
            { src: "7ob/images (55).jpg", price: "5.00" },
            { src: "7ob/images (56).jpg", price: "5.00" }
        ]
    },
    {
        author: "روايات", // Author of the books
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
// Function to save books to localStorage
function saveBooksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

// Admin check (you can replace this with an actual authentication mechanism)
const isAdmin = true; // Set to true if the user is an admin

if (!isAdmin) {
    alert("أنت غير مخول لإضافة كتب!");
    document.getElementById('book-form').style.display = 'none'; // Hide the form if not an admin
}

// Handle form submission (Admin adds new books)
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Only allow admin to submit
    if (!isAdmin) {
        alert('أنت غير مخول لإضافة كتب!');
        return;
    }

    // Get the form data
    const category = document.getElementById('category').value;
    const imageSrc = document.getElementById('image-src').value; 
    const price = document.getElementById('price').value;

    // Validate the inputs
    if (!imageSrc || !price || !category) {
        alert("يرجى تعبئة جميع الحقول.");
        return;
    }

    // Find the correct category in the books array
    const categoryIndex = books.findIndex(book => book.author === category);

    if (categoryIndex !== -1) {
        // Create a new book object
        const newBook = { src: imageSrc, price: price };

        // Add the new book to the category's images array
        books[categoryIndex].images.push(newBook);

        // Alert success and update localStorage
        alert('تم إضافة الكتاب بنجاح!');
        saveBooksToLocalStorage();

        // Reset the form after submission
        document.getElementById('book-form').reset();
    } else {
        alert('فئة الكتاب غير موجودة!');
    }

    console.log(books); // Log the updated books array
});