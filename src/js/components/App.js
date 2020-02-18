import React from 'react';
import data from '../../../data';
import Loader from './Loader';

function App () {
    const [loaderList, setLoaderList] = React.useState([]);
    const handleClick = () => {
        setLoaderList(data.loaders);
    };

    return (
        <div>
            <p>Que linda aplicación en React.js</p>
            <ul>
                {
                    loaderList.map((loader) => {
                        return (<Loader {...loader} key={loader.id}/>);
                    })

                }
            </ul>
            <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
        </div>
    );
}

export default App;
