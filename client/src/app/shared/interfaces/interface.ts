export interface IStudent {
    id?: number
    surname: string
    name: string
    patronymic: string
    born: number | string
    gender : string
    class_id : number | string
}

export interface IClass {

    id?: number
    year: number | string
    mnemo: string
    classroom_teacher_id: number | string
}

export interface ITeacher {
   id?: number
   surname: string
   name: string
   patronymic: string
   born: number | string
   gender : string
   subject: string
}
