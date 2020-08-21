module.exports = {
    entry: './src/app.tsx',
    mode: 'development',
    devServer: {
        contentBase: './public',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript'],
                        plugins: [
                            [
                                '@babel/plugin-transform-react-jsx',
                                {
                                    pragma: 'Trs.createElement'
                                }
                            ],
                            ['transform-class-properties']
                        ]
                    }
                }
            }
        ]
    }
};
