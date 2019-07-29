import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

// the Provider - Consumer approach is useful when we have multiple context objects
class Button extends React.Component {
    static contextType = LanguageContext;
    render() {
        const lang = this.context.language === 'english' ? 'Submit' : this.context.language === 'romana' ? 'Trimite' : 'Afsend'

        return (
            <div>
                <ColorContext.Consumer>
                    {color =>
                        <button className={`ui button ${color}`}>
                            {lang}
                        </button>
                    }
                </ColorContext.Consumer>
            </div >
        )
    }
}

export default Button;