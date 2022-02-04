// 解决跨域问题
module.exports = {
  devServer: {
    disableHostCheck: true,//允许穿透
    proxy: {  
      '/info': {
        ws:true,
        target: 'http://www.chinaso.com/', //这里后台的地址模拟的;应该填写你们真实的后台接口
        changOrigin: true,  //允许跨域
        pathRewrite: {
          '^/info': '' 
        }
      },
      '/api': {
        ws:true,
        target: 'https://movie.douban.com/', //这里后台的地址模拟的;应该填写你们真实的后台接口
        // target : 'http://shop.boqii.com/search', /*宠物食品*/
        changOrigin: true,  //允许跨域
        pathRewrite: {
        //   /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
        //     实际上访问的地址是：http://127.0.0.1:7002/core/getData/userInfo,因为重写了 /api
          '^/api': '' 
        }
      },
      
    },
    // port: 4000,  // 此处修改你想要的端口号，
    // compress: true, // 自动压缩
		open: true, // 自动打开浏览器
		// inline: true, // 页面自动刷新
		// hot: true //热更新,实时更新
  }
}