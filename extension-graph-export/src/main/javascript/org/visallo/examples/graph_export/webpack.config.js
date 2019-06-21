/* eslint-env node */
const path = require('path');
const { shared, externals } = require('../../../../../../../../webpack.shared.js');

module.exports = {
    ...shared({
       publicPath: '/jsc/org/visallo/examples/graph_export/dist/',
       dir: __dirname
    }),
    entry: {
        plugin: './src/plugin.js',
        Export: './src/Export.jsx',
    },
    externals: externals(
        'public/v1/api',
        'react'
    )
}