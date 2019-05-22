const merge = require('webpack-merge');
const path = require('path')
const commonConfig = require('./webpack.common')
module.exports = merge(commonConfig,{
    devServer:{
        open:true,
        contentBase:path.join(process.cwd(),'dist')
    }
})