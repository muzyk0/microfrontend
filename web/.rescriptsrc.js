const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {name, dependencies: deps} = require('./package.json')

const addPlugins = config => {
    config.plugins.unshift(
        new ModuleFederationPlugin({
            name,
            filename: 'remoteEntry.js',
            shared: {...deps},
            exposes: {
                './App': './src/App',
            },
            remotes: {}
        })
    )
    return config
}

module.exports = [
    config => {
        config.output.publicPath = `//localhost:3002/` // Адрес на котором развернут наще приложение, необходимо в случае , если мы захотим передать наш хост еще куда нибудь
        return addPlugins(config)
    },
]
