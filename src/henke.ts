import * as fs from "fs";
let plist = require("plist");

let white = "#FFFFFF";

let blueGrey300 = "#90A4AE";
let blueGrey600 = "#546E7A";
let blueGrey900 = "#263238";
let pink300 = "#F06292";
let purple300 = "#BA68C8";
let deepPurple300 = "#9575CD";
let indigo300 = "#7986CB";
let blue300 = "#64B5F6";
let lightBlue300 = "#4FC3F7";
let cyan300 = "#4DD0E1";
let teal300 = "#4DB6AC";
let green300 = "#81C784";

let theme = {
    "author": "henriiik",
    "comment": "Henke's Theme",
    "name": "Henke's Theme",
    "settings": [
        {
            "settings": {
                "foreground": white
            }
        },
        {
            "name": "Parameter Type",
            "scope": "meta.parameter.type",
            "settings": {
                "foreground": white
            }
        },
        {
            "name": "Delimiter",
            "scope": "delimiter",
            "settings": {
                "foreground": blueGrey300
            }
        },
        {
            "name": "Comment",
            "scope": "comment, comment.block",
            "settings": {
                "foreground": blueGrey600
            }
        },
        {
            "name": "Whitespace",
            "scope": "whitespace",
            "settings": {
                "foreground": blueGrey900
            }
        },
        {
            "name": "Escape Charater, Constants",
            "scope": "string.escape, constant",
            "settings": {
                "foreground": pink300
            }
        },
        {
            "name": "Keyword, Storage",
            "scope": "keyword, storage, storage.modifier, storage.type, meta.parameter.storage.type",
            "settings": {
                "foreground": purple300
            }
        },
        {
            "name": "Operator",
            "scope": "keyword.operator",
            "settings": {
                "foreground": deepPurple300
            }
        },
        {
            "name": "Support",
            "scope": "function.support",
            "settings": {
                "foreground": indigo300
            }
        },
        {
            "name": "Variable",
            "scope": "variable, string.variable, declaration.variable, meta.parameter.variable",
            "settings": {
                "foreground": blue300
            }
        },
        {
            "name": "Class",
            "scope": "class.entity.name",
            "settings": {
                "foreground": lightBlue300
            }
        },
        {
            "name": "Function",
            "scope": "function.entity.name",
            "settings": {
                "foreground": cyan300
            }
        },
        {
            "name": "String",
            "scope": "string",
            "settings": {
                "foreground": teal300
            }
        },
        {
            "name": "This",
            "scope": "constant.this, predefined.variable",
            "settings": {
                "foreground": green300
            }
        }
    ]
};

fs.writeFileSync("themes/henke.tmTheme", plist.build(theme));