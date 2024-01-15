const express = require('express');
const connection = require('../connection');
const router = express.Router();

// API for Create product (POST Request)
router.post('/create', (req,res,next)=>{
    let product = req.body;
    query = "insert into product (name,description,price) values(?,?,?)";
    connection.query(query, [product.name, product.description, product.price], (err,results) =>{
        if (!err) 
        {
            return res.status(200).json({message: "Product Added Successfully!"});
        }
        else
        return res.status(500).json(err);
    });
});


//  API for Returning all rows of DB (GET Request)
router.get('/read',(req,res,next)=>{
    let query = "select *from product";
    connection.query(query,(err,results)=>{
        if (!err) 
        {
            return res.status(200).json(results);   
        }
        else
        {
            return res.status(500).json(err);
        }
    });
});

// API for updating values (PATCH Request)
router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let product = req.body;
    let query = "update product set name=?,description=?,price=? where id=?";
    connection.query(query,[product.name, product.description, product.price, id], (err,results)=>{
        if (!err) 
        {
            if (results.affectedRows == 0) 
            {
                return res.status(404).json({message: "Product ID not found"});
            }
            return res.status(200).json({message: "Product Update Successfully"});
        }
        else
        {
            return res.status(500).json(err);
        }
    });
})

// API for delete (DELETE Request)
router.delete('/delete/:id',(req, res, next)=>{
    const id = req.params.id;
    let query = "delete from product where id=?";
    connection.query(query, [id], (err, results)=>{
        if (!err) 
        {
            if (results.affectedRows == 0) 
            {
                return res.status(404).json({message: "Product ID not found"});
            }
            return res.status(200).json({message: "Product Deleted Successfully from products list."});
        }
        else
        {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;