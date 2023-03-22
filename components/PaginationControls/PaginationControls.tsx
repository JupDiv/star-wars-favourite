import { useEffect, useState } from 'react';
import getPagination from '../../utlis/FetchPaginatedData/FetchPaginatedData';
import Data from '../../entites/types/CommonTypes';
import { BlockButton, ButtonStyle } from './PaginationControls.styles';

type paginationResponse = Pick<Data, 'next' | 'previous'>;

interface DirectionProps {
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

const initialState = {
  next: null,
  previous: null,
};

export default function PaginationControls({
  currentPage,
  setCurrentPage,
}: DirectionProps): JSX.Element {
  const [pagination, setPagination] =
    useState<paginationResponse>(initialState);

  useEffect(() => {
    getPagination(currentPage).then((response) => setPagination(response));
  }, [currentPage]);

  return (
    <BlockButton>
      {pagination.previous ? (
        <ButtonStyle
          title="Back"
          onPress={() => setCurrentPage(currentPage - 1)}
        />
      ) : null}
      {pagination.next ? (
        <ButtonStyle
          title="Next"
          onPress={() => setCurrentPage(currentPage + 1)}
        />
      ) : null}
    </BlockButton>
  );
}