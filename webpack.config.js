module.exports = {
 entry:{
 userlist: "./js/userlist.js",
 signin: "./js/sign-in.js"
},
 output: {
   filename: "js/[name].min.js"
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