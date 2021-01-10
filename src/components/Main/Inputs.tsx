import React from 'react';
import CheckBox from './CheckBox';
import './Main.css';

export default function Inputs() {
    const listOfTopics = [
        'tech', 'news', 'business', 'science', 'finance', 
        'food', 'politics', 'economics', 'travel', 'entertainment', 
        'music', 'sport', 'world'
    ];

    return(
        <form className="inputs-container">
            <div className="email-input-container">
                {/* <label htmlFor="email">Make your route!</label> */}
                <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email: "
                />
            </div>

            <div className="inputs-radio-buttons">
                <div className="radio-button-container">
                    <input
                        type="radio"
                        name="radio"
                        id="radio-en"
                    />
                    <label htmlFor="radio-en">EN</label>
                </div>
                <div className="radio-button-container">
                    <input
                        type="radio"
                        name="radio"
                        id="radio-de"
                    />
                    <label htmlFor="radio-de">DE</label>
                </div>
                <div className="radio-button-container">
                    <input
                        type="radio"
                        name="radio"
                        id="radio-ru"
                    />
                    <label htmlFor="radio-ru">RU</label>
                </div>
            </div>

            <div className="inputs-checkboxes">
                {
                    listOfTopics.map((topic: string) => <CheckBox name={topic} /> )
                }
            </div>
        </form>
    );
} 