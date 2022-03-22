const express = require('express');
const employeeController = require('../controllers/employee.controller')
const router = express.Router();


router.get('/', (req, res) => {
    employeeController.getAllemployees(req, res);
}).post('/', (req, res) => {
    employeeController.addNewEmployee(req, res);
}).put('/:id', (req, res) => {
    employeeController.updateEmployee(req, res);
}).delete('/:id', (req, res) => {
    employeeController.deleteEmployee(req, res);
});

module.exports = router;