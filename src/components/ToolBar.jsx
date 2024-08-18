import { useContext } from 'react'
import { ProductContext } from '../context/productContext';
import SearchComp from './SearchComp';
import Filters from './Filters';

const ToolBar = () => {
    const {previousPage, nextPage,pageInfoText } = useContext(ProductContext);
    return (
        <div className='row align-items-center justify-content-between'>
            <div className='col-4'>
                <h5>{pageInfoText}</h5>
                <div className='d-flex align-items-center gap-3'>
                    <button className='btn btn-warning' onClick={previousPage}>PREV</button>
                    <button className='btn btn-warning' onClick={nextPage}>NEXT</button>
                </div>
            </div>
            <div className='col-5'>
            <SearchComp />
            </div>
            <div className='col-3'>
            <Filters />
            </div>
        </div>
    )
}

export default ToolBar