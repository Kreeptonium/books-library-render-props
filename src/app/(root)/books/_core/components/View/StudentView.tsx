'use client'
import { useState } from "react"
import { useBooks } from "../../hooks/useBooks"
import QuickSearch from "./QuickSearchView"

const StudentView = () => {
   const { books, error } = useBooks()
   const [searchQuery, setSearchQuery] = useState('')

   const filteredBooks = books.filter(book=>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())||
      book.isbn.toLowerCase().includes(searchQuery.toLowerCase())
   )

   if (error) return <div>Error: {error.message}</div>
   return (
      <div className="container mx-auto p-4">
        <QuickSearch onSearch={setSearchQuery} />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBooks.map((book) => (
               <div key={book.id} className="bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-black text-xl font-bold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2">By {book.author}</p>
                  <p className="text-sm text-gray-500 mb-2">ISBN: {book.isbn}</p>
                  <p className="text-sm text-gray-500 mb-4">Location: {book.location}</p>
                  <div className="flex justify-between items-center">
                     <span className={`px-2 py-1 rounded-full text-sm ${
                        book.isCheckedOut 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-green-100 text-green-800'
                     }`}>
                        {book.isCheckedOut ? 'Checked Out' : 'Available'}
                     </span>
                     <span className="text-blue-600">
                        {book.availableCopies} copies left
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default StudentView