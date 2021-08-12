import { useState, useEffect } from 'react';
import axios from 'axios';

function View() {
    const [url, setUrl] = useState('');

    useEffect(() => {
        const url = localStorage.getItem('url');
        if (url) {
            setUrl(url);
        } else {
            setUrl('http://localhost:3000');
        }
    }, []);

    useEffect(() => {
        if (url) {
            axios.post('http://localhost:5000/api/cypress')
                .then(res => console.log(res))
                .catch(res => console.log(res));
        }
    }, [url]);

    return (
        <iframe data-cy="iframe" title="iframe" style={{ height: '100%', width: '100%' }} src={url} />
    );
};

export {
    View,
}
