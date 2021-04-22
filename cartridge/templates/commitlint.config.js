module.exports = {
    extends: ['@commitlint/config-conventional'],
    plugins: ['jira-issue-in-scope'],
    rules: {
        'jira-issue-in-scope': [2, 'always']
    }
};
