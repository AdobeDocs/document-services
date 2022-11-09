import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import classNames from "classnames";
import "@spectrum-css/typography";

import pdfSolutionCardIcon from '../pages/images/pdfSolutionCardIcon.png'
import pdfContentIcon from '../pages/images/pdfContentIcon.png'
import doSomethingIcon from '../pages/images/doSomethingIcon.png'

const contentData = [
    {
        id: 'Develop a PDF solution (using APIs).',
        title: 'Develop a PDF solution (using APIs).',
        img: `${pdfSolutionCardIcon}`
    },
    {
        id: 'Simply extract PDF content (not using APIs).',
        title: 'Simply extract PDF content (not using APIs).',
        img: `${pdfContentIcon}`
    },
    {
        id: 'Do something else.',
        title: 'Do something else.',
        img: `${doSomethingIcon}`
    }
]

const Interstitial = () => {
    const [select, setSelects] = useState()

    useEffect(() => {
        document.addEventListener('mouseup', function (e) {
            var container = document.getElementById('container');
            var container = document.getElementById('btns');
            if (!container.contains(e.target)) {
                setSelects({})
            }
        });

        return () => {
            document.removeEventListener('mouseup', function (e) {
                console.log('test----------------------');
            });
        }
    }, []);

    const activeFunc = (id) => {
        setSelects({ id })
        document.querySelector('.dcsdk-button')
        .setAttribute('daa-ll',id)
    }

    const onSignin = () => {
        const urlParams = window.location.search
        if (select?.id === undefined) {
            alert("Please select anyone of the options you prefered")
        } else {
            window.location.href = `https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html${urlParams ? urlParams : ''}`;
        }
    }

    return <div>
        <div className="intertitialWrapper">
            {contentData.map((data, index) => {
                return <div className={`interstitialBox ${select?.id === data.id ? "active" : ''}`} onClick={() => activeFunc(data.id)} id='container'>
                    <p>{data.title}</p>
                    <div className="interstitialImgBox">
                        <img src={data.img} alt="Adobe logo partnership banner" className="interstitialImg" />
                    </div>
                </div>
            })
            }
        </div>
        <div className='btnWrapper'>
            <div className="primary-button" style={{ cursor: 'pointer' }} onClick={() => onSignin()} id="btns">
                <div className="dcsdk-button primary">
                    Sign in to get started
                </div>
            </div>
            <div className="primary-button" style={{ cursor: 'pointer' }}>
                <a className="secondary-dcsdk-button secondaryBtn" href='https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html' target='_parent'>
                    Skip
                </a>
            </div>
        </div>
    </div>

}

export default Interstitial