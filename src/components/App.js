import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

    render() {
        return (
            <div className='ui container'>
                <LanguageStore>
                    <LanguageSelector onLanguageChange={this.onLanguageChange} />
                    <br />
                    {/* the Provider updates the value of the LanguageContext context. we can have multiple contexts that provide data to a component */}
                    {/* color values: '' = grey, 'primary' = blue, 'red' */}
                    <ColorContext.Provider value='primary'>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>


            </div>
        )
    }
}

export default App;