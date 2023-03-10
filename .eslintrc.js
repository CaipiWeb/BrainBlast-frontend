module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
    // Verify platform the User is using (WINDOWS || MAC) and change the linebreack configuration
        'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        // allow jsx syntax in js files (for next.js project)
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    },
};
