import React from 'react';
import './ItemCard.scss';
import LazyImage from '../lazy-image/LazyImage';
export default function ItemCard(props) {
    return (
        <div className={`item ${props.type}`}>
            <div className="item-content">
                <h3>Cheese Burst</h3>
                <p>24 mins</p>
                <p>Lorem ipsum Note that the development build is not optimized.
                To create a production build, use yarn build. </p>
            </div>
            <div className="gradient-background"></div>
            <LazyImage 
                className="background-image"
                parentRef={props.parentRef} 
                src={props.imageSrc} />
        </div>
    )
}