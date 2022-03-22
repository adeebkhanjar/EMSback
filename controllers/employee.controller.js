const employeeModel = require('../models/employee.model');


const getAllemployees = async(req, res) => {
    const data = await employeeModel.Employee.find({});
    return res.status(200).send(data)
}

const addNewEmployee = (req, res) => {
    const { firstName, lastName, adress, jobPosition, dateOfBirth, joinDate, salary, isAdmin } = req.body;

    const employee = new employeeModel.Employee({
        firstName,
        lastName,
        adress,
        jobPosition,
        dateOfBirth,
        joinDate,
        salary,
        isAdmin
    })


    employee.save((err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });


}

const deleteEmployee = (req, res) => {
    const { id } = req.params;
    employeeModel.Employee.findByIdAndDelete(id, (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}

const updateEmployee = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, adress, jobPosition, dateOfBirth, joinDate, salary, isAdmin } = req.body;

    employeeModel.Employee.findByIdAndUpdate(id, { firstName: firstName, lastName: lastName, adress: adress, jobPosition: jobPosition, dateOfBirth: dateOfBirth, joinDate: joinDate, salary: salary, isAdmin: isAdmin }, { new: true, runValidators: true }, (err, data) => {
        if (err) return res.status(404).send(err);
        return res.status(200).send(data);
    });
}



module.exports = {
    getAllemployees,
    addNewEmployee,
    deleteEmployee,
    updateEmployee
}