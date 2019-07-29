import React from 'react';
import LanguageContext from '../context/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div>
                <h5>Select language</h5>
                <i className='flag us'
                    onClick={() => this.context.onLanguageChange('english')} />
                <i className='flag ro'
                    onClick={() => this.context.onLanguageChange('romana')} />
                <i className='flag dk'
                    onClick={() => this.context.onLanguageChange('dansk')} />
            </div>
        )
    }
}

export default LanguageSelector;