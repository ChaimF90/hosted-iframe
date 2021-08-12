import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Iframe } from './Iframe';

function View() {
    const { id } = useParams<{ id: string }>();
    const [url, setUrl] = useState('');

    useEffect(() => {
        axios({
            url: `http://localhost:5000/api/solution/${id}`
        }).then((res) => setUrl(res.data.url));
    }, [id]);

    return (
        <div>
            {url && <Iframe url={url} id={id} />}
        </div>
    );
};

export {
    View,
}
