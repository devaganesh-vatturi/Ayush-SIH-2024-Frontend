import React, { useState } from 'react';
import axios from 'axios';

function Translate() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [language, setLanguage] = useState('hi'); // default to Hindi

    const handleTranslate = async () => {
        try {
            const response = await axios.post('http://localhost:5000/translate', {
                text: text,
                targetLanguage: language,
            });

            setTranslatedText(response.data.translatedText);
        } catch (error) {
            console.error('Error translating text:', error);
        }
    };

    return (
        <div className="App">
            <h1>Web Page Translator</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate"
            />
            <div>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value="hi">Hindi</option>
                    <option value="bn">Bengali</option>
                    <option value="te">Telugu</option>
                    <option value="ta">Tamil</option>
                    <option value="gu">Gujarati</option>
                    <option value="kn">Kannada</option>
                    <option value="mr">Marathi</option>
                    <option value="pa">Punjabi</option>
                    {/* Add more languages as needed */}
                </select>
                <button onClick={handleTranslate}>Translate</button>
            </div>
            <div>
                <h2>Translated Text:</h2>
                <p>{translatedText}</p>
            </div>
        </div>
    );
}

export default Translate;
