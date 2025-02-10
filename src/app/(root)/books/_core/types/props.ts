import { Book,BookApiError } from './book';

export interface BookDataState {
    books: Book[];
    isLoading: boolean;
    error: BookApiError | null;
}

export interface RenderProps
extends BookDataState{
    refetch: () => Promise<void>;
}

export interface BookDataContainerProps{
    children: (props:RenderProps)
    => React.ReactNode;
}