import React from 'react';
import LanguageContext from '../context/LanguageContext';

/// the defaultValue - this.context approach
class Field extends React.Component {
    static contextType = LanguageContext;

    render() {
        const name = this.context === 'english' ? 'Name' : this.context === 'romana' ? 'Nume' : 'Navn';

        return (
            <div className='ui field' >
                <div className='label'>
                    {name}
                </div>
                <input></input>
            </div>
        )
    }
}

export default Field;