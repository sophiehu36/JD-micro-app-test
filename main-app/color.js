const { generateTheme } = require('antd-theme-generator');
const path = require('path');

const options = {
  stylesDir: path.join(__dirname, './src/styles/theme'),   //主题文件所在文件夹
  antDir: path.join(__dirname, './node_modules/ant-design-vue'),  //antd包位置
  varFile: path.join(__dirname, './src/styles/theme/variables.less'), // 自定义默认的主题色
  mainLessFile: path.join(__dirname, './src/styles/theme/index.less'), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
  themeVariables: [ '@primary-color'], //要改变的主题变量
  indexFileName: 'index.html', // index.html所在位置
  outputFilePath: path.join(__dirname, './public/theme.less'), // 是否只生成一次
}

generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
.catch(error => {
  console.log('Error', error);
})
