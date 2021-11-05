import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './Pagination.css';
import { ArrowCircleLeft, ArrowCircleRight } from 'iconsax-react';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <ArrowCircleLeft
          size="32"
          color={ currentPage === 1 ? "#6b6b6b" : "#FF8A65" }
        />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={pageNumber}>&#8230;</li>;
        }

        return (
          <li
            key={pageNumber}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            <span>{pageNumber}</span>
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <ArrowCircleRight
          size="32"
          color={ currentPage === lastPage ? "#6b6b6b" : "#FF8A65" }
        />
      </li>
    </ul>
  );
};

export default Pagination;
