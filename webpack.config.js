module.exports = {
 entry:{
 userlist: "./src/userlist.js",
 signin: "./src/signin.js",
 company: "./src/components/ListManager.jsx"
},
 output: {
   filename: "public/js/[name].min.js"
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