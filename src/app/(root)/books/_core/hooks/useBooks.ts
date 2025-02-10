
"use client";

import { useState, useEffect } from "react";
import { bookService } from "../lib/api/bookService";
import { Book, BookApiError  } from "../types/book"

export const useBooks =()=>{

    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<BookApiError | null>(null);

    const fetchBooks = async()=>{
        try {
            setIsLoading(true)
            setError(null)
            const response = await bookService.getBooks()
            setBooks(response.data)
        } catch (error) {
            setError(error as BookApiError)
        } finally {
            setIsLoading(false)
        }
    };
    useEffect(()=>{
        fetchBooks()
    },[])

    return{
        books, isLoading, error, refetch:fetchBooks}
}