import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconSearch from '../../assets/icons/icon-search.png';
import './AutoComplete.scss';

export function Autocomplete(props) {
    let [filteredOptions, setFilteredOptions] = useState(props.options);
    let [searchText, setSearchText] = useState('');
    let [activeOption, setActiveOption] = useState(0);
    let [showOptions, setShowOptions] = useState(false);

    const filterOptions = () => {
        if (searchText) {
            setFilteredOptions(props.options.filter((item) => {
                return item.value.toLowerCase().includes(searchText.toLowerCase());
            }));
        } else {
            setFilteredOptions(props.options);
        }
        if (filteredOptions.length) {
            setShowOptions(true);
        } else {
            setShowOptions(false);
        }
    }

    const optionClick = (option) => {
        setActiveOption(option.id);
        setShowOptions(false);
    };

    const onChange = (e) => {
        setSearchText(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            // Enter
            setShowOptions(false);
        } else if (e.keyCode === 38) {
            // Up arrow
            if (activeOption === 0) {
                return;
            }
            setActiveOption(activeOption - 1);
        } else if (e.keyCode === 40) {
            // Down arrow
            if (activeOption === filteredOptions.length - 1) {
                console.log(activeOption);
                return;
            }
            setActiveOption(activeOption + 1);
        }
    };

    const onBlur = () => {
        setShowOptions(false);
    }

    const onFocus = () => {
        if (searchText) {
            filterOptions()
        }
    }

    useEffect(() => {
        filterOptions();
    }, [searchText]);

    return (
        <div className="auto-complete-wrapper">
            <div className={`input-wrapper ${props.className}`} style={props.style}>
                <input
                    type="text"
                    className="input-box"
                    onBlur={onBlur}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    onFocus={onFocus}
                />
                <button className="search-btn"><img src={IconSearch} className="icon-search" alt="icon-search" /></button>
            </div>
            {
                showOptions &&
                <div className="options-wrapper">
                    <ul>
                        {filteredOptions.map((option, index) => {
                            let className = 'option';
                            if (index === activeOption) {
                                className = 'option active';
                            }
                            return (
                                <li className={className} key={option.id} onClick={optionClick}>
                                    {option.value}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            }

        </div>
    );
}

Autocomplete.propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
}

export default Autocomplete;