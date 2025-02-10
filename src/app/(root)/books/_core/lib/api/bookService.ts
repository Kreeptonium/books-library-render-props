import {Book,BookApiResponse,BookApiError}from "../../types/book"
import {mockBooks} from "../data/books"

// Simulates API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const bookService = {
    async getBooks(delayMs: number = 2000): Promise<BookApiResponse> {
        try {
            await delay(delayMs);
            return {
                data: mockBooks,
                status: 200,
                message: "Books fetched successfully"
            };
        } catch (error) {
            throw {
                status: 500,
                message: "Failed to fetch books",
                code: "FETCH_ERROR"
            } as BookApiError;
        }
    }
};

