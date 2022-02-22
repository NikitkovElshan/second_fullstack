import * as express from 'express';
import {studentAdd,
        studentsGet,
        studentEdit,
        studentRemove,

        teacherAdd,
        teachersGet,
        teacherEdit,
        teacherRemove,

        classAdd,
        classesGet,
        classEdit,
        classesRemove
} from "../controlers/api";

const router = express()


router.post('/student', studentAdd)
router.get('/student', studentsGet)
router.put('/student', studentEdit)
router.delete('/student/:id', studentRemove)


router.post('/teacher', teacherAdd)
router.get('/teacher',teachersGet)
router.put('/teacher',teacherEdit)
router.delete('/teacher/:id',teacherRemove)


router.post('/class',classAdd)
router.get('/class',classesGet)
router.put('/class',classEdit)
router.delete('/class/:id',classesRemove)



export {router}

