const mainController = {
    index : function(req, res){
        return res.render('index');
    },
    productCart : function(req, res){
        return res.render('productCart');
    },
    productDetail : function(req, res){
        return res.render('productDetail');
    },
    login : function(req, res){
        return res.render('login');
    },
    register : function(req, res){
        return res.render('register');
    }
    
}

module.exports = mainController;