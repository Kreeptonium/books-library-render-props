'use client'
import { useBooks } from "../../hooks/useBooks"

const LibrarianView = () => {
   const { books, error } = useBooks()

   if (error) return <div>Error: {error.message}</div>
   return (
      <div className="container mx-auto p-4">
         <table className="min-w-full border-collapse border bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
               <tr className="bg-blue-600 text-white">
                  <th className="border p-3">Title</th>
                  <th className="border p-3">Author</th>
                  <th className="border p-3">ISBN</th>
                  <th className="border p-3">Location</th>
                  <th className="border p-3">Available Copies</th>
                  <th className="border p-3">Status</th>
               </tr>
            </thead>
            <tbody>
               {books.map((book) => (
                  <tr key={book.id} className="border hover:bg-gray-50 text-black">
                     <td className="border p-3">{book.title}</td>
                     <td className="border p-3">{book.author}</td>
                     <td className="border p-3">{book.isbn}</td>
                     <td className="border p-3">{book.location}</td>
                     <td className="border p-3">{book.availableCopies}</td>
                     <td className="border p-3">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                           book.isCheckedOut 
                             ? 'bg-red-100 text-red-800' 
                             : 'bg-green-100 text-green-800'
                        }`}>
                           {book.isCheckedOut ? 'Checked Out' : 'Available'}
                        </span>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   )
}

export default LibrarianView
