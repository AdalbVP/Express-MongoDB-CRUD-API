const express = require('express');
const router = express.Router();
const User = require('../model/User');

// GET - Obtener todos los usuarios (sin contraseñas)
router.get('/users', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).send('Error al obtener usuarios');
  }
});

// GET - Obtener un usuario por ID
router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).send('Usuario no encontrado');
    res.json(user);
  } catch (err) {
    res.status(400).send('ID inválido');
  }
});

// PUT - Actualizar un usuario por ID
router.put('/user/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email
      },
      { new: true }
    ).select('-password');
    if (!updatedUser) return res.status(404).send('Usuario no encontrado');
    res.json(updatedUser);
  } catch (err) {
    res.status(400).send('Error al actualizar usuario');
  }
});

// DELETE - Eliminar un usuario por ID
router.delete('/user/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send('Usuario no encontrado');
    res.send('Usuario eliminado correctamente');
  } catch (err) {
    res.status(400).send('Error al eliminar usuario');
  }
});

module.exports = router;