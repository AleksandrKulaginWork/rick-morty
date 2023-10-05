import React from 'react';
import { PaginationContent, Button, Paragraph, Span } from './style';
import { TfiAngleDoubleLeft as PrevIcon, TfiAngleDoubleRight as NextIcon } from "react-icons/tfi"
import { PaginationProps } from './interface';

export const Pagination = ({ currentPage, maxPages, onPageChange }: PaginationProps) => {
    return (
        <PaginationContent>
            <Button 
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}>
                <PrevIcon size={25} /> 
                PREV
            </Button>

            <Paragraph>PAGE <Span>{currentPage}</Span> OF <Span>{maxPages}</Span> </Paragraph>

            <Button 
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === maxPages}>
                NEXT 
                <NextIcon size={25} />
            </Button>
        </PaginationContent>
    )
}