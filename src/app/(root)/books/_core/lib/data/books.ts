import { Book } from '../../types/book';

export const mockBooks: Book[] = [
    {
        id: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "978-0743273565",
        coverImage: "/images/books/great-gatsby.jpg",
        description: "A story of decadence and excess, Gatsby captures the spirit of the Jazz Age.",
        publishDate: "1925-04-10",
        availableCopies: 3,
        location: "Fiction - Section A",
        isCheckedOut: false
    },
    {
        id: "2",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "978-0446310789",
        coverImage: "/images/books/mockingbird.jpg",
        description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.",
        publishDate: "1960-07-11",
        availableCopies: 5,
        location: "Fiction - Section B",
        isCheckedOut: true
    },
    {
        id: "3",
        title: "1984",
        author: "George Orwell",
        isbn: "978-0451524935",
        coverImage: "/images/books/1984.jpg",
        description: "A dystopian social science fiction novel and cautionary tale.",
        publishDate: "1949-06-08",
        availableCopies: 2,
        location: "Science Fiction - Section C",
        isCheckedOut: false
    },
    {
        id: "4",
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        isbn: "978-0547928227",
        coverImage: "/images/books/hobbit.jpg",
        description: "A fantasy novel about the adventures of hobbit Bilbo Baggins.",
        publishDate: "1937-09-21",
        availableCopies: 4,
        location: "Fantasy - Section D",
        isCheckedOut: true
    },
    {
        id: "5",
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "978-0141439518",
        coverImage: "/images/books/pride.jpg",
        description: "A romantic novel of manners that follows the character development of Elizabeth Bennet.",
        publishDate: "1813-01-28",
        availableCopies: 6,
        location: "Classic Literature - Section A",
        isCheckedOut: false
    },
    {
        id: "6",
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        isbn: "978-0316769488",
        coverImage: "/images/books/catcher.jpg",
        description: "A story of teenage alienation and loss of innocence in postwar America.",
        publishDate: "1951-07-16",
        availableCopies: 3,
        location: "Fiction - Section A",
        isCheckedOut: true
    },
    {
        id: "7",
        title: "Brave New World",
        author: "Aldous Huxley",
        isbn: "978-0060850524",
        coverImage: "/images/books/brave.jpg",
        description: "A dystopian novel about a futuristic World State and its citizens.",
        publishDate: "1932-01-01",
        availableCopies: 4,
        location: "Science Fiction - Section C",
        isCheckedOut: false
    },
    {
        id: "8",
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        isbn: "978-0544003415",
        coverImage: "/images/books/lotr.jpg",
        description: "An epic high-fantasy novel that follows the quest to destroy the One Ring.",
        publishDate: "1954-07-29",
        availableCopies: 2,
        location: "Fantasy - Section D",
        isCheckedOut: true
    },
    {
        id: "9",
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        isbn: "978-1451673319",
        coverImage: "/images/books/fahrenheit.jpg",
        description: "A dystopian novel about a future American society where books are outlawed.",
        publishDate: "1953-10-19",
        availableCopies: 5,
        location: "Science Fiction - Section C",
        isCheckedOut: false
    },
    {
        id: "10",
        title: "The Alchemist",
        author: "Paulo Coelho",
        isbn: "978-0062315007",
        coverImage: "/images/books/alchemist.jpg",
        description: "A philosophical novel about a young Andalusian shepherd and his journey to find treasure.",
        publishDate: "1988-01-01",
        availableCopies: 7,
        location: "Fiction - Section B",
        isCheckedOut: false
    }
];