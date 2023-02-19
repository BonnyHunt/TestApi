const Joi = require('joi');

const id = Joi.number().integer().min(100);
const active = Joi.boolean();
const grades = Joi.number().min(0).max(5);
const Name = Joi.string().min(3).max(15);
const Gender = Joi.number().integer().min(0).max(1);
const Class = Joi.number().integer().min(1).max(32);
const Club = Joi.number().integer().min(0).max(10);
const Persona = Joi.number().integer().min(0).max(1);
const ScheduleTime = Joi.number().positive().precision(2).min(0).max(100);

///Schemas

const getStudentSchema = ({
  id: id.required(),
});

const createStudentSchema = ({
  id: id.required(),
  active: active.required(),
  grades: grades.required(),
  Name: Name.required(),
  Gender: Gender.required(),
  Class: Class.required(),
  Club: Club.required(),
});

const updateStudentSchema = ({
  id: id.required(),
  active: active.required(),
  grades: grades,
  Name: Name,
  Gender: Gender,
  Class: Class,
  Club: Club,
  Persona: Persona,
  ScheduleTime: ScheduleTime
});

module.exports = { getStudentSchema, createStudentSchema, updateStudentSchema };
