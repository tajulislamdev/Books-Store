import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Book4 from "../../assets/books/book4.jpg";
import Book5 from "../../assets/books/book5.jpg"; 
import { FaStar } from "react-icons/fa6";

const booksData = [
  { id: 1, img: Book1, title: "Who's There", rating: 5.0, author: "Someone" },
  { id: 2, img: Book2, title: "His Life", rating: 4.5, author: "John" },
  { id: 3, img: Book3, title: "Lost Boys", rating: 4.7, author: "Lost Girl" },
  { id: 4, img: Book4, title: "New Story", rating: 4.4, author: "Someone" },
  { id: 5, img: Book5, title: "Final Book", rating: 4.5, author: "Someone" },

];

const Books = () => {
  // Example function for button click
  const handleViewAll = () => {
    alert("Redirect to All Books Page"); // এখানে চাইলে React Router দিয়ে navigate করতে পারবে
  };

  return (
    <section className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Top Books for you
          </p>
          <h1 className="text-3xl font-bold mt-2">Top Books</h1>
          <p className="text-xs text-gray-400 mt-1">
            Discover the top books carefully selected for you. Enjoy the latest reads.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">
          {booksData.map(({ id, img, title, rating, author }) => (
            <div
              key={id}
              className="group space-y-3 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="overflow-hidden rounded-md shadow-lg">
                <img
                  src={img}
                  alt={title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-700">{author}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <FaStar className="text-yellow-500" />
                  <span>{rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={handleViewAll}
            className="bg-primary text-white py-2 px-6 rounded-md hover:scale-105 transition-transform duration-300"
          >
            View All Books
          </button>
        </div>
      </div>
    </section>
  );
};

export default Books;

