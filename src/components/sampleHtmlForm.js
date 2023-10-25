import React, { useEffect } from 'react';
import jQuery from 'jquery';

const JqueryFormAccess = () => {
    useEffect(() => {
        jQuery(document).ready(function () {
            // Your jQueryForm function here
            jQueryForm()
                .then((content) => {
                    console.log('Returned Content:', content);
                    var form = document.getElementById("form");
                    form.innerHTML += content;
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
    }, []); // Empty dependency array ensures the effect runs after the component mounts

    const jQueryForm = () => {
        return new Promise((resolve) => {
            jQuery(document).ready(function () {
                resolve(jQuery("#form").faas({
                    "id": 67, //formtemplate id
                    "l": "en_us", //local - optional
                    "d": "/training.html", // destination url
                    "as": false, //autosubmit - optional
                    "pc": {
                        "1": "js",
                        "2": "faas_submission",
                        "3": "sfdc",
                        "4": "demandbase"
                    },
                    "p": {
                        "js": {
                            "36": "70114000002XWHZAA4", //
                            "77": "1",
                            "78": "1",
                            "79": "1",
                            "90": "DESBU",
                            "92": "2846", //form_type
                            "93": "2851", //form_subtype
                            "94": "3084" // product of interest
                            //"6": "marketing_web_form",
                            //"7": "whitepaper_form",
                            //"31": "Acrobat",
                        }
                    }
                }));
            });
        });
    }

    return (
        <div>
            <form id="form">
            </form>
        </div>
    );
};

export { JqueryFormAccess }
