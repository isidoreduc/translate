import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        return (
            <div>
                <h5>Select language</h5>
                <i className='flag us'
                    onClick={() => this.props.onLanguageChange('english')} />
                <i className='flag ro'
                    onClick={() => this.props.onLanguageChange('romana')} />
                <i className='flag dk'
                    onClick={() => this.props.onLanguageChange('dansk')} />
            </div>
        )
    }
}

export default LanguageSelector;