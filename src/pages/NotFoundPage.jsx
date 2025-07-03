import { Link } from 'react-router-dom';
import './PageNotFound.css';
import { route } from '../data';

export const NotFoundPage = () => {

    return (
        <div className="page-not-found">
            <Link to = { `/${route}` } replace >
                <img 
                    src={ process.env.PUBLIC_URL + '/notFoundPageImg.png' } 
                    alt = "This page is empty"
                    className='page-not-found__src'
                />
            </Link>
        </div>
    )
}