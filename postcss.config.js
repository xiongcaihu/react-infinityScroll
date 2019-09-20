module.exports = {
    plugins: {
        'postcss-partial-import': {}, // import 支持
        'postcss-nested': {}, // 嵌套支持
        'postcss-preset-env': {}, // 变量支持
        'cssnano': { // 对css进行后期处理，加prefixer，消除重复的样式
            preset: 'advanced'
        }
    }
}
