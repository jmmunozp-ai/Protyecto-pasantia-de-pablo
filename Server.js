const express = require('express');
const app = express();

const PORT = 3000;

// Servir archivos estáticos (HTML)
app.use(express.static('public'));

// Ruta de prueba (API)
app.get('/api/mensaje', (req, res) => {
    res.json({ mensaje: "Hola desde el backend 🚀" });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});