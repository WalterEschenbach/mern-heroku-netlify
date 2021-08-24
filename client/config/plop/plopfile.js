module.exports = function (plop) {
    // component generator
    plop.setGenerator('component', {
        description: 'Create React Component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What is your component name?'
        },
        {
            type: 'confirm',
            name: 'wantAxios',
            default: true,
            message: 'Do you want this component to use Axios?',
        }
        ],
        actions: data => {
            const actions = [{
                type: 'add',
                path: '../../src/components/{{camelCase name}}/{{pascalCase name}}.js',
                templateFile: './templates/component.js.hbs'
            },
            {
                type: 'add',
                path: '../../src/components/{{camelCase name}}/styles.js',
                templateFile: './templates/styles.js.hbs'
            }];

            return actions
        },
    });
};

