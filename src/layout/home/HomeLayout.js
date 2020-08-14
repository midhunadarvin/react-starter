import React, { useRef } from 'react';
import ItemCard from '../../components/item-card/ItemCard';
import './HomeLayout.scss';
import { items, autoCompleteOptions } from '../../utils/MockData'
import Autocomplete from '../../components/auto-complete/AutoComplete';

function HomeLayout() {
    let homeLayoutRef = useRef();
    return (
        <div className="home grid" ref={(el) => homeLayoutRef = el}>
            <div className="grid-header flex align-center justify-center">
                <Autocomplete options={autoCompleteOptions} />
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
