export interface PaginationProps {
    currentPage: number;
    maxPages: number;
    onPageChange: (newPage: number) => void;
}