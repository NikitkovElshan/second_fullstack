import { errorHandler } from '../utils/errorHandler'
import { Student } from '../models/student';
import { Teacher } from '../models/teacher';
import { Class } from '../models/classes';


//============================================================Student=========//
export const studentAdd = async (req, res) => {
    try {

        const studentFind = await Student.findOne({where: {surname: req.body.surname, name: req.body.name, patronymic: req.body.patronymic}})
        if(!studentFind  && req.body.surname
            && req.body.name
            && req.body.patronymic
            && req.body.born
            && req.body.gender
        )  {

            const student = await Student.create({
                name: req.body.name,
                surname: req.body.surname,
                patronymic: req.body.patronymic,
                born: req.body.born,
                gender: req.body.gender,
                class_id: req.body.class_id
            })
            return  res.status(200).json({success:true, student})

        } else {
            return res.status(404).json({success:false, message: 'student incorrect'})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}


export const studentsGet = async (req, res) => {
    try {
        const students = await Student.findAll({})
        if (students.length)  {
            return res.status(200).json(students)
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

export const studentEdit = async (req, res) => {
    try {
        const student = await Student.findOne( {where: {id: +req.body.id}} )
        if (student)  {
            student.name = req.body.name
            student.surname = req.body.surname
            student.patronymic = req.body.patronymic
            student.born = req.body.born
            student.gender = req.body.gender

            await student.save()

            return  res.status(200).json({success:true})
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

export const studentRemove = async (req, res) => {
    try {
        const student = await Student.findOne({where: {id: +req.params.id}})
        if (student)  {
            await Student.destroy({where: {id: +req.params.id}})

            return res.status(200).json({success:true})
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

//============================================================Teacher=========//

export const teacherAdd = async (req, res) => {
    try {
        const teacherFind = await Teacher.findOne({where: {surname: req.body.surname, name: req.body.name, patronymic: req.body.patronymic }})
        if(!teacherFind
            && req.body.surname
            && req.body.name
            && req.body.patronymic
            && req.body.born
            && req.body.gender
            && req.body.subject
        )  {
            const teacher = await Teacher.create({
                surname: req.body.surname,
                name: req.body.name,
                patronymic: req.body.patronymic,
                born: +req.body.born,
                gender: req.body.gender,
                subject: req.body.subject

            })
            return  res.status(200).json({success:true, teacher})
        } else {
            return res.status(404).json({success:false, message: 'teacher incorrect'})
        }
    } catch (e) {
        console.log(e);
        errorHandler(res, e)
    }
}


export const teachersGet = async (req, res) => {
    try {
        const teachers = await Teacher.findAll({})
        if (teachers.length)  {
            return res.status(200).json(teachers)
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

export const teacherEdit = async (req, res) => {
    try {
        const teacher = await Teacher.findOne( {where: {id: +req.body.id}} )
        if (teacher)  {
            teacher.surname = req.body.surname
            teacher.name = req.body.name
            teacher.patronymic = req.body.patronymic
            teacher.born = req.body.born
            teacher.gender = req.body.gender
            teacher.subject = req.body.subject

            await teacher.save()

            return  res.status(200).json({success:true})
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

export const teacherRemove = async (req, res) => {
    try {
        const teacher = await Teacher.findOne({where: {id: +req.params.id}})
        if (teacher)  {
            await Teacher.destroy({where: {id: +req.params.id}})

            return res.status(200).json({success:true})
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}
//============================================================Class==========//

export const classAdd = async (req, res) => {
    try {
        const classFind = await Class.findOne({where: {year: req.body.year, mnemo: req.body.mnemo}})
        if(!classFind
            && req.body.year
            && req.body.mnemo
            && req.body.classroom_teacher_id
        )  {
            const clas = await Class.create({
                year: req.body.year,
                mnemo: req.body.mnemo,
                classroom_teacher_id: req.body.classroom_teacher_id
            })
            return  res.status(200).json({success:true, clas})
        } else {
            return res.status(404).json({success:false, message: 'class incorrect'})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

export const classesGet = async (req, res) => {
    try {
        const classes = await Class.findAll({})
        if (classes.length)  {
            return res.status(200).json(classes)
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

export const classEdit = async (req, res) => {
    try {
        const class_ = await Class.findOne( {where: {id: +req.body.id}} )
        if (class_)  {
            class_.year = req.body.year
            class_.mnemo = req.body.mnemo
            class_.classroom_teacher_id = req.body.classroom_teacher_id

            await class_.save()

            return  res.status(200).json({success:true})
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}

export const classesRemove = async (req, res) => {
    try {
        const classes = await Class.findOne({where: {id: req.params.id}})
        if (classes)  {
            await Class.destroy({where: {id: +req.params.id}})

            return res.status(200).json({success:true})
        } else {
            return res.status(404).json({success:false})
        }
    } catch (e) {
        errorHandler(res, e)
    }
}