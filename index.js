const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');
const rootDirectory = require('./util/path');

//--------------------Setups--------------------
const app = express();
app.use(bodyParser.urlencoded({extended:false}));

//app.set = allows us to set any values globally on our express application
app.set('view engine', 'ejs');
//views is set to default path of views but I am just implicitly showing
app.set('views','views');

//serve file statically
app.use(express.static(path.join(__dirname, 'public')))

//--------------------Middleware--------------------
app.use('/admin',adminRouters);
app.use(shopRouters);

// catch all middleware
app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not found</h1>');
    // res.sendFile(path.join(rootDirectory, 'views', '404.html'));
    res.render('404', {
        pageTitle: 'Page not found'
    });
});
//----------------End of Middleware-----------------

app.listen(5000);
