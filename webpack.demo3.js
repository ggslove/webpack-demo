/**
 * 将多个文件生成一个bundle文件
 */
module.exports={
    entry:[
        './src/index.js',
        './src/say.js'
    ],
    output:{
        filename:"bundle.js"
    }
}