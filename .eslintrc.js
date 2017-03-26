module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "arrow-parens": [2, "as-needed"]
    },
    "arrow-body-style": [1, "always"],
    "no-confusing-arrow": [
        "error",
        {
            "allowParens": false
        }
    ]
};