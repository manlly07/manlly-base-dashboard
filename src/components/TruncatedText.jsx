// components
import TextTruncate from 'react-text-truncate';

// hooks
import {useState, useEffect} from 'react';

// utils
import PropTypes from 'prop-types';

const TruncatedText = ({text, lines = 2, className, width}) => {
    const [truncated, setTruncated] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        return () => setMounted(false);
    }, []);

    return (
        <span className={className ? className : ''}>
            {
                mounted && (
                    <TextTruncate line={lines}
                            textTruncateChild={(<span>...</span>)}
                            text={text}
                    />
                )
            }
        </span>
    )
}


export default TruncatedText