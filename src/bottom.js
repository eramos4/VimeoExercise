import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const bottomContainer = () => {
    return (

        <div className='bottom-holding-container'>

            <div className='beams-text-containerL'>
            <p id='padding-text'>
                <h2>BEAMS</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div >
                        
                            <img  src="https://i.vimeocdn.com/video/589972810_530x315.jpg" className='bottom-images' alt="beams"></img>
                    
                    </div>
            </div>

            <div className='move-text-containerR'>
               
                <img  src="https://i.vimeocdn.com/video/590587169_530x315.jpg" className='bottom-images' alt="monsoon"></img>
               
                <p id='padding-text'>
                    <h3>Move 2</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    

            </div>

        </div>


    )
}

export default bottomContainer;