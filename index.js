var postcss = require('postcss');

var processors = [
    {
        plugin:    require('postcss-variables'),
        namespace: 'variables',
        defaults:  {}
    },
    {
        plugin:    require('postcss-each'),
        namespace: 'each',
        defaults:  {}
    },
    {
        plugin:    require('postcss-conditionals'),
        namespace: 'conditionals',
        defaults:  {}
    },
    {
        plugin:    require('postcss-math'),
        namespace: 'math',
        defaults:  {}
    },
    {
        plugin:    require('postcss-mixins'),
        namespace: 'mixins',
        defaults:  {}
    },
    {
        plugin:    require('postcss-nested'),
        namespace: 'nested',
        defaults:  {}
    },
];

module.exports = postcss.plugin('postcss-evokit', function (rawoptions) {
    var options = rawoptions || {};
    var instance = postcss();

    processors.forEach(function (processor) {
        var namespaceOptions = processor.namespace in options ? options[processor.namespace] : options;
        var processorOptions = {};

        Object.keys(processor.defaults).forEach(function (key) {
            processorOptions[key] = processor.defaults[key];
        });

        Object.keys(namespaceOptions).forEach(function (key) {
            processorOptions[key] = namespaceOptions[key];
        });

        if (namespaceOptions && !processorOptions.disable) {
            instance.use(processor.plugin(processorOptions));
        }
    });

    return instance;
});
