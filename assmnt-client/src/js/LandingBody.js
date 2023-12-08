import React, { useState } from 'react'
import axios from 'axios';
import { BarWave } from "react-cssfx-loading";

function LandingBody() {
    const [pitchDeckText, setPitchDeckText] = useState('');
    const [pitchDeckSummary, setPitchDeckSummary] = useState('');
    const [summaryState, setSummaryState] = useState(true);

    const handleInputChange = (e) => {
        setPitchDeckText(e.target.value);
    };

    const handleGenerateSummary = async (e) => {
        try {
            setSummaryState(false);
            console.log(process.env.API_URL)
            const response = await axios.post(`${process.env.REACT_APP_API_URL||'http://127.0.0.1:8008/api'}`, {text: pitchDeckText});
            setPitchDeckSummary(response.data.summary);
            setSummaryState(true);
            e.preventDefault();
            // console.log('Generated Summary:', pitchDeckText);
        } catch (error) {
            console.error('Error adding team:', error);
        }
    };

    return (
        <div className='landing__body'>
            <div className='landing__body__block'>
                <form className='pitch__text__form'>
                    <textarea
                        className='pitch__text__input'
                        value={pitchDeckText}
                        onChange={handleInputChange}
                    />
                    <button className="button-8" type="button" disabled={!summaryState} onClick={handleGenerateSummary}>
                        Generate Summary
                    </button>
                </form>
            </div>
            <div className='landing__body__block'>
                <h1 className='pitch__text__summary__header'>Summary:</h1>

                <p className={summaryState?'pitch__text__summary':'pitch__text__summary--loading'}>
                    {summaryState?`${pitchDeckSummary}`:(<div className='pitch__text__summary--loader'><BarWave/><h5>Generating summary...</h5></div>)}
                </p>
            </div>
        </div>
    )
}

export default LandingBody