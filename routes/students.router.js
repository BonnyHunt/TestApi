const express = require('express');
const studentService = require('../services/studens.services');
const validatorHanddler = require('../middlewares/validator.handdler');
const { getStudentSchema, createStudentSchema, updateStudentSchema } = require('../schemas/students.schema');

const router = express.Router();
const service = new studentService();

router.get('/', async (req, res) => {
  const students = await service.find();
  res.status(200).json(students);
});

//ID
router.get('/:id',
async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await service.findOne(id);
    res.status(200).json(student);
  } catch (error) {
    next(error)
  }
});

//POST
router.post('/',
validatorHanddler(createStudentSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newStudent = service.create(body);
  res.status(200).json(newStudent);
});

//PATCH
router.patch('/:id',
validatorHanddler(getStudentSchema, 'params'),
validatorHanddler(updateStudentSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const student = await service.update(id, body);
    res.status(200).json(student);
  } catch (error) {
    next(error)
  }
});

//DELETE
router.delete('/:id',
validatorHanddler(getStudentSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = service.delete(id);
    res.status(200).json(student);
  } catch (error) {
    next(error)
  }
})

module.exports = router;
