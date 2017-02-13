module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "react": true
    },
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "rules": {
      "no-use-before-define": ["error", { "functions": false }]
    }
};