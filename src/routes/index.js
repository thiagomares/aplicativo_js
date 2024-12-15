import express from "express";

const routes = (app) => {
    // Definindo a rota raiz
    app.get("/", (req, res) => {
        res.status(200).send("Olá, mundo");
    });

    // Middleware para lidar com JSON
    app.use(express.json());
};

export default routes;
