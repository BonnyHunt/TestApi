const boom = require('@hapi/boom');
const fs = require('fs');

//Constructor Service
class StudenService {
  constructor() {
    this.students = [];
    this.generate();
  }

  async getStudents() {
    const data = await fs.readFileSync(__dirname + '/../db/students.json', { encoding: "utf-8" })
    const students = JSON.parse(data);
    return students;
  }

  generate() {
    try {
      const limit = 5;
      for (let i = 0; i < limit; i++) {
        this.students.push({
        })
      };
    } catch (error) {
      console.log(error)
    }
  };

  async create(data) {
    const newStudent = {
      ...data
    };
    this.students.push(newStudent);
    return newStudent;
  };

  async find() {
    const students = await this.getStudents();
    return students;
  };

  async findOne(id) {
    const students = await this.getStudents();
    const student = students.find(item => item.ID === id);
    return student;
  };

  update(id, changes) {
    const index = this.students.findIndex(item => item.id === id);
    if (id === -1) {
      throw boom.notFound('ID not found');
    } else {
      const student = this.students[index];
      this.students[index] = {
        ...student,
        ...changes
      };
      return this.students[index];
    }
  };

  delete(id) {
    const index = this.students.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Student not found');
    } else {
      this.students.splice(index, 1)
      return { id };
    }
  };

}

module.exports = StudenService;
