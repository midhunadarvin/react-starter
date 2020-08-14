import React, { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function LazyImage(props) {
    const { 
        src,
        alt,
        parentRef,
        loadingClassName = 'loading',
        loadedClassName = 'loaded'
    } = props;

    let element = useRef();
    let [loaded, setLoaded] = useState(false)

    useEffect(() => {
        let observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const { isIntersecting } = entry;
                    if (isIntersecting) {
                        element.src = src;
                        setLoaded(true);
                        observer = observer.disconnect();
                    }
                });
            },
            {
                root: parentRef.current,
                rootMargin: "0px 0px 200px 0px"
            }
        );
        observer.observe(element);
    });

    const className = `${props.className} ${loaded ? loadedClassName : loadingClassName}`;
    return <img className={className} ref={el => element = el} alt={alt} />;
}

LazyImage.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string
}

export default memo(LazyImage);