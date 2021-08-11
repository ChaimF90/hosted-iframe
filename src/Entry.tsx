import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Entry() {
    const history = useHistory();
    const [url, setUrl] = useState('');

    function setUrlAndGoToViewPage() {
        localStorage.setItem('url', url);
        history.push(`/view`);
    }

    return (
        <div>
            <input data- type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={setUrlAndGoToViewPage}>Set</button>
        </div>
    );

};

export {
    Entry
}