import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

function Entry() {
    const [url, setUrl] = useState('');
    const [testsRunning, setTestsRunning] = useState(false);

    function setUrlAndGoToViewPage() {
        const id = uuid();
        axios({
            method: 'post',
            data: {
                id,
                url
            },
            url: 'http://localhost:5000/api/solution'
        }).then(() => {
            setTestsRunning(true);
            axios.post(`http://localhost:5000/api/cypress/${id}`)
                .then(res => console.log(res))
                .catch(res => console.log(res))
                .finally(() => setTestsRunning(false));
        })
    }

    return (
        <div>
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            <button onClick={setUrlAndGoToViewPage}>Set</button>
            {testsRunning && <h1>The tests are running.....</h1>}
        </div>
    );

};

export {
    Entry
}