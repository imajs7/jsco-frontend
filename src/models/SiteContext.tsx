import { createContext } from "react";

const SiteContext = createContext( {
    "siteLogo": {
        "image": {
            "light": "",
            "dark": ""
        },
        "text": ""
    },
    "siteInfo": {
        "siteTitle": "",
        "siteShortTitle": "",
        "siteTagline": "",
        "shortIntro": ""
    },
    "socialMedia": {
        "facebook": "",
        "twitter": "",
        "github": "",
        "telegram": "",
        "linkedin": ""
    },
    "techDetail": {
        "author": "",
        "authorProfile": "",
        "stack": "",
        "firstRelease": "",
        "lastUpdate": "",
        "version": ""
    },
    "communication": {
        "notice": "",
        "offers": {
            "hosting": "",
            "development": "",
            "manage": ""
        }
    },
    "sponsor": {
        "show": 0,
        "sponsors": [
            {
                "sname": "",
                "banner": "",
                "link": ""
            },
            {
                "sname": "",
                "banner": "",
                "link": ""
            }
        ]
    }
} );

export default SiteContext;