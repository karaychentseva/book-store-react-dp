import { BookCardType } from "./BookCardType"

export type SearchResultType = {
    total: number,
    page: number,
    books: BookCardType[]
}