import { Pagination } from '@material-ui/lab';
import React from 'react'

export const Paging = ({postPerPage, totalPost, Paginate, currentPage}) => {
    
    const pages = Math.ceil(totalPost / postPerPage);
    return (
        <>
         
<Pagination count={pages}
          page={currentPage}
          onChange={Paginate}
         variant="outlined" shape="rounded" />
        </>
    )
}
