import React from 'react';
import data from '../../../data';
import Loader from './Loader';
import logo from '../../../url-loader/images/platzi.png';
import video from '../../../url-loader/video/que-es-core.mp4'

function App () {
    const [loaderList, setLoaderList] = React.useState([]);
    const handleClick = () => {
        setLoaderList(data.loaders);
    };

    return (
        <div>
            <p>Que linda aplicación en React.js</p>
            <video src={video} width={360} controls poster={logo}/>
            <div>
                <img src={logo} alt="logo" width={100}/>
            </div>
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
