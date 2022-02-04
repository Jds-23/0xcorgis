import Head from 'next/head'
import { useState } from 'react'

export default function Test() {
    const [phrase, setPhrase] = useState([]);
    const [wordbank, setWordBank] = useState([{
        word: "Metamask",
        disabled: false,
    },
    {
        word: "is",
        disabled: false
    },
    {
        word: "a",
        disabled: false,
    },
    {
        word: "crypto",
        disabled: false
    },
    {
        word: "wallet",
        disabled: false
    }
    ]);

    return <>
        <div >
            <h1>What is Metamask?</h1>
            <div>
                {phrase.map((d, index) => {
                    return <button key={index} onClick={() => {
                        setPhrase(phrase.filter(item => item.word !== d.word));
                        d.disabled = false;
                    }
                    }>{d.word}</button>
                })}
            </div>
            <div>
                {wordbank.map((d, index) => {
                    return <button  key={index} disabled={d.disabled} onClick={() => {
                        setPhrase([...phrase, d])
                        d.disabled = true;
                    }
                    }>{d.word}</button>
                })}
            </div>
        </div>
    </>
}