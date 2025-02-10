export interface Book{

    id:string;
    title: string;
    author: string;
    isbn: string;
    coverImage: string;
    description: string;
    publishDate: string;
    availableCopies: number;
    location: string;
    isCheckedOut: boolean;
}

export interface ApiResponse<T>{
    data: T;
    status: number;
    message: string;
}

export interface BookApiResponse
extends ApiResponse<Book[]>{}

export interface BookApiError{
    status: number;
    message: string;
    code: string;
}