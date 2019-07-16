'use strict'

const controller = {};

//Listar 
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer',(err, customers) => {
            if (err){
                res.json(err);
                //next(err);
            }
            //console.log(customers);
            res.render('customers',{
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
        //almacenamos los datos para insert en data
        const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            console.log(customer);
            //res.send('Works');
            res.redirect('/');
        });
    });
    /*console.log(req.body);
    res.send('works');*/
 }

 controller.delete = (req, res) => {
    //const id = req.params.id;
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id],(err, customer) =>{
            res.redirect('/');
        });
    });
 }


module.exports = controller;