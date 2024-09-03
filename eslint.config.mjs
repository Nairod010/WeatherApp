import globals from "globals";
import pluginJs from "@eslint/js";
import airbnbBase from "eslint-config-airbnb-base";

// Extract the rules from the airbnb-base config
const airbnbBaseConfig = airbnbBase;

export default [
    // Start with ESLint's recommended rules
    {
        ...pluginJs.configs.recommended,
        languageOptions: {
            globals: { ...pluginJs.configs.recommended.languageOptions?.globals, ...globals.browser,
            },
        },
    },
    {
        rules: {
            ...airbnbBaseConfig.rules,
            "quotes": ["error", "double"],
            "no-console": "warn",
            "indent": ["error", 4],
            "no-unused-vars": ["error"],
            // Add additional custom rules here
        },
    },
];

