import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import classNames from "classnames";
import "@spectrum-css/typography";

import pdfSolutionCardIcon from '../pages/images/pdfSolutionCardIcon.png'
import pdfContentIcon from '../pages/images/pdfContentIcon.png'
import doSomethingIcon from '../pages/images/doSomethingIcon.png'
import { AnchorButton } from '@adobe/gatsby-theme-aio/src/components/AnchorButton';

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
                console.log('');
            });
        }
    }, []);

    const activeFunc = (id) => {
        setSelects({ id })
        document.querySelector('.dcsdk-button')
            .setAttribute('daa-ll', id)
    }
    const getBaseURL = () => {
        const urlParams = window.location.search
        // stage
        let baseurl = `https://stage.acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html${urlParams ? urlParams : ''}`;

        // production
        if (
            window.location.host.indexOf("developer.adobe.com") >= 0 ||
            window.location.host.indexOf("adobe.io") >= 0
        ) {
            baseurl = `https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html${urlParams ? urlParams : ''}`;
        }

        return baseurl;

    }

    const onSignin = () => {
        if (select?.id === undefined) {
            alert("Please select one of the three options provided to proceed")
        } else {
            window.location.href = getBaseURL();
        }
    }

    const onSkip = () => {
        window.location.href = getBaseURL();
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

            <div
                css={css`
                  margin-top: 28px;
                  margin-left: var(--spectrum-global-dimension-size-300);
                  white-space: nowrap;
                `}>
                <AnchorButton
                    className='secondary-dcsdk-button'
                    variant="primary" href='javascript:void(0);' target='_parent'
                    onClick={() => onSkip()}
                >
                    Skip
                </AnchorButton>
            </div>
        </div>
    </div>

}

export default Interstitial