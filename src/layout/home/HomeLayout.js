import React, { useRef } from 'react';
import ItemCard from '../../components/item-card/ItemCard';
import './HomeLayout.scss';
import { items } from '../../utils/MockData'
function HomeLayout() {
    let homeLayoutRef = useRef();
    return (
        <div className="home grid-container" ref={(el) => homeLayoutRef = el}>
            <div className="grid-header">
                Search
            </div>
            <div className="grid-content">
                <div className="items-container">
                    {
                        items.map((item, index) => (
                            <ItemCard
                                key={index}
                                parentRef={homeLayoutRef}
                                type={index % 2 ? 'even' : 'odd'}
                                imageSrc={`https://picsum.photos/id/${index % 100 + 1}/800/600`}
                                content={item.content} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default HomeLayout;
