import dbConnection from "../Config/db.js";


const funcion1= (req,res)=> {
    res.send ("ingreso por /")
};

const funcion2= (req,res)=> {
    res.send ("ingreso por Info")
};

const funcion3= (req,res)=> {
    res.status (204).json ({'message': "probando"})
};

const actualizar= (req,res)=>{
let filtro= req.params.id;
let infoNueva=req.body;
res.send ("Actualización realizada")
};






const getAllProducts= (req,res)=> {

dbConnection.query("select * from productos", (err,data)=>{
   if(err){
        res.status(500).json({mensaje:"error interno, no se ubica la info"})
}else {
      console.log(data)
      res.status(200).json({mensaje: "productos encontrados","info":data})
    }
})
}


const agregarProducto=(req, res) => {
    const producto = req.body;


    const query = "INSERT INTO productos (Nombre, Categoria, Descripcion, Peso, Precio, Stock) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [producto.Nombre, producto.Categoria, producto.Descripcion, producto.Peso, producto.Precio, producto.Stock];

    dbConnection.query(query, values, (err, data) => {
        if (err) {
            console.error("Error al insertar el producto: ", err);
            res.status(500).json({ message: "Error interno, no se encuentra la información" });
        } else {
            res.status(201).json({ message: "Producto ingresado", data: data });
        }
    });
};





const getbyId = (req, res) => {
    const id = req.params.id; 
    console.log(req.params.id)
    const query = 'SELECT * FROM productos WHERE id = ?';
    
    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }

        if (results.length > 0) {
            
            res.json({ producto: results[0] });
        } else {
            
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    });
};




const deleteById = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM productos WHERE id = ?';

    dbConnection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }

        if (results.affectedRows > 0) {
            res.json({ message: 'Producto eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    });
};



const patchById = (req, res) => {
    const id = req.params.id;
    const { Nombre, Categoria, Descripcion, Peso, Precio, Stock } = req.body;
    
    let updates = [];
    let params = [];

    if (Nombre) { updates.push('nombre = ?'); params.push(Nombre); }
    if (Categoria) { updates.push('categoria = ?'); params.push(Categoria); }
    if (Descripcion) { updates.push('descripcion = ?'); params.push(Descripcion); }
    if (Peso) { updates.push('peso = ?'); params.push(Peso); }
    if (Precio) { updates.push('precio = ?'); params.push(Precio); }
    if (Stock) { updates.push('stock = ?'); params.push(Stock); }

    
    const query = `UPDATE productos SET ${updates.join(', ')} WHERE id = ?`;
    params.push(id);  // Agrega el ID al final del array de parámetros

    dbConnection.query(query, params, (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }

        if (results.affectedRows > 0) {
            res.json({ message: 'Producto actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    });
};






export default {funcion1, funcion2, funcion3, actualizar, getAllProducts, agregarProducto, getbyId, deleteById, patchById};

