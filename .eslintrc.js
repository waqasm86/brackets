module.exports = {
    "rules": {
        "no-bitwise": 2,
        "curly": 2,
        "eqeqeq": 2,
        "guard-for-in": 0,
        "wrap-iife": [2, "outside"],
        "no-use-before-define": 0,
        "new-cap": [0, {
            "capIsNewExceptions": [
                "$.Deferred",
                "$.Event",
                "CodeMirror.Pos",
                "Immutable.Map",
                "Immutable.List",
                "JSLINT"
            ]}],
        "no-caller": 2,
        "no-empty": 0,
        "no-new": 2,
        "no-invalid-regexp": 2,
        "no-control-regex": 2,
        "no-regex-spaces": 2,
        "no-undef": 2,
        "strict": 2,
        "no-unused-vars": [0, {"vars": "all", "args": "none"}],
        "semi": 2,

        "no-iterator": 2,
        "no-loop-func": 2,
        "no-multi-str": 2,
        "no-fallthrough": 2,
        "no-proto": 2,
        "no-script-url": 2,
        "no-shadow": 0,
        "no-shadow-restricted-names": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new-require": 2,
        "new-parens": 2,
        "no-new-object": 2,
        "no-invalid-this": 0,
        "indent": [0, 4],

        "valid-jsdoc": 0,
        "valid-typeof": 2,

        "no-trailing-spaces": 0,
        "eol-last": 0,
        "max-len": [1, 120],

        // the rules below should be sorted in a same way they are sorted on http://eslint.org/docs/rules page
        // http://eslint.org/docs/rules/#best-practices
        "no-else-return": 1
    },
    "globals": {
        "brackets": false,

        "require": false,
        "define": false,
        "$": false,

        "window": false,
        "console": false,
        "setTimeout": false,
        "clearTimeout": false,

        "ArrayBuffer": false,
        "XMLHttpRequest": false,
        "Uint32Array": false,
        "WebSocket": false
    }
};
