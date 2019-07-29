import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

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
                <div>
                    <h5>Select language</h5>
                    <i className='flag us' onClick={() => this.onLanguageChange('english')} />
                    <i className='flag ro' onClick={() => this.onLanguageChange('romana')} />
                    <i className='flag dk' onClick={() => this.onLanguageChange('dansk')} />
                </div>
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