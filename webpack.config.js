module.exports = {
 entry: "./js/userlist.js",
 output: {
   filename: "js/userlist.min.js"
 },
 module: {
   loaders: [
     {
       // test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}