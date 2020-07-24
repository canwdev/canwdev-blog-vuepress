const fs = require('fs');
const path = require('path')

const excludes = ['.DS_Store']  // 排除检查的文件
const sidebarHelper = {
  /**
   * 自动获取文件名生成适用于sidebar的children数组
   * https://fangzheng.xyz/Other/VuePress/1.vuepress-auto-sidebar.html
   */
  getChildren: function (rpath) {
    console.log(rpath)
    let filenames = [];
    fs.readdirSync(__dirname + '/../' + rpath).forEach(fileName => {
      if (excludes.indexOf(fileName) < 0) {
        const fullPath = rpath + fileName

        const fileInfo = fs.statSync(__dirname + '/../' + fullPath)
        if (fileInfo.isFile() && fileName.indexOf('.md')!==-1 ) {
          if (fileName === 'README.md') {
            fileName = fullPath.replace('README.md', '')
            filenames.unshift(fileName)
          } else {
            fileName = fullPath.replace('.md', '')
            filenames.push(fileName)
          }

        }
      }
    })
    return filenames;
  },

  /**
   * https://fangzheng.xyz/Other/VuePress/1.vuepress-auto-sidebar.html#_1-getfilenames-js
   */
  getFileName:function(rpath) {
    let filenames = [];
    fs.readdirSync(rpath).forEach(file => {
      if (excludes.indexOf(file) < 0 ) {
        var fullpath = rpath+"/"+file
        var fileinfo = fs.statSync(fullpath)
        if(fileinfo.isFile()){
          if (file === 'README.md') {
            file = '';
          } else {
            file = file.replace('.md', '');
          }
          filenames.push(file);
        }
      }
    })
    // console.log(filenames)
    filenames.sort(); // 排序
    return filenames;
  }
}

const genSidebar = function (title, children = [''], collapsable = true, sidebarDepth = 2) {
  var arr = [];
  arr.push({
    title,
    collapsable,
    sidebarDepth,
    children
  })
  return arr;
}

module.exports = {
  sidebarHelper,
  genSidebar
}
