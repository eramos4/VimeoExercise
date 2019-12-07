import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const flexContainer = () => {
    return (
        <div className='holding-container'>
            
            <div className='inner-containerL'>
            <img className='image' src="https://i.vimeocdn.com/video/595198868_505x160.jpg" alt="monsoon"></img>
            </div>
            <div className='inner-containerR'>
            <h1>MONSOON III</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                

        </div>
        
    )
}



export default flexContainer;