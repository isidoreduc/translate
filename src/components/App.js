import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

    state = {
        language: 'romana'
    }

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <div className='ui container'>
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                <br />

                {/* the Provider updates the value of the LanguageContext context. we can have multiple contexts that provide data to a component */}
                {/* color values: '' = grey, 'primary' = blue, 'red' */}
                <ColorContext.Provider value=''>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>

            </div>
        )
    }
}

export default App;