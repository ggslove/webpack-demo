/**
 * 将多个文件生成一个bundle文件
 */

 /**
  * a2
  * window.aTest=function(){
    console.log("我被修改了");
    }
  * b2 
  */
module.exports={
    entry:{
        a2:'./src/a2.js',
        b2:{
            dependOn:"a2",
            import :"./src/b2.js"
        }
    }
}
  