import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

// the Provider - Consumer approach is useful when we have multiple context objects
class Button extends React.Component {
    static contextType = LanguageContext;
    render() {
        const lang = this.context === 'english' ? 'Submit' : this.context === 'romana' ? 'Trimite' : 'Afsend'
        return (
            <div>
                <ColorContext.Consumer>
                    {color =>
                        <button className={`ui button ${color}`}>
                            {lang}
                            {/* <LanguageContext.Consumer>
                                {lang => lang === 'english' ? 'Submit' : lang === 'romana' ? 'Trimite' : 'Afsend'}
                            </LanguageContext.Consumer> */}
                        </button>
                    }
                </ColorContext.Consumer>
            </div >
        )
    }
}

export default Button;