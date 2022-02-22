import * as express from 'express';
import * as path from 'path'
import {connectSequelize} from "./shared/PostgreSQL/PostgreSQL";
import {router as apiRoutes} from "./routes/api";
import * as bodyParser from "body-parser";


const app = express()
const port = process.env.PORT ||  5000
const server = require('http').createServer(app)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', apiRoutes)
app.use(express.static(path.resolve(
    path.dirname(require.main.filename), '..', 'client', 'dist', 'client'
)))
app.get('/', (req, res) => {
    res.sendFile(
        path.resolve(
            path.dirname(require.main.filename), '..', 'client', 'dist', 'client', 'index.html'
        )
    )
})


connectSequelize()
server.listen(port, () => console.log(`Сервак пашет через порт ${port}`))







// WEB интерфейс дожен позволять просматривать информацию об объектах учета в лайф гриде.
// Должна иметься возможность сортировок и отбора по любым из полей.
// Возможные действия над объектами учета - Добавление, размножение, удаление.
//
// Приложение должно работать в сервере приложений Tomcat, использовать в качестве СУБД PostgreSQL.
// Приветствуется использование методологии разработки Spring, OS Linux.
//
// Для демонстрации работы разработку можно разместить в сети Интернет или на мобильном компьютере.
// При собеседовании необходимо продемонстрировать исходные коды, в случае возникновения вопросов у работодателя
// продемонстрировать и пояснить работу компонетов приложения.
