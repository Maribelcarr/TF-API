import express from "express";
const router= express.Router();
import misFunciones from "../Controllers/controllers.js";
const { funcion1, funcion2, funcion3, actualizar, getAllProducts, agregarProducto, getbyId, deleteById, patchById} = misFunciones;
import dbConnection from "../Config/db.js";


router.get ("/", funcion1);

router.get ("/info", funcion2);

router.post ("/", funcion3);


router.put ("/info/:id", actualizar);




router.get ("/todos", getAllProducts);

router.get ("/info/:id", getbyId);


router.post("/agregarProducto", agregarProducto);


router.delete("/eliminarProducto/:id", deleteById);

router.patch("/editarProducto/:id", patchById);


export default router;
