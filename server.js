var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(3000, '192.168.3.8', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Listening at localhost:3000');
});

// var gracefulShutdown = function() {  
//     console.log("Received kill signal, shutting down gracefully.");  
//     server.close(function() {  
//       console.log("Closed out remaining connections.");  
//       process.exit()  
//     });  
      
//      // if after   
//      setTimeout(function() {  
//          console.error("Could not close connections in time, forcefully shutting down");  
//          process.exit()  
//     }, 10*1000);  
//   }  
    
//   // listen for TERM signal .e.g. kill   
//   process.on ('SIGTERM', gracefulShutdown);  
    
//   // listen for INT signal e.g. Ctrl-C  
//   process.on ('SIGINT', gracefulShutdown); 