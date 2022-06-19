import express  from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import {createRoles} from './libs/inicialroles'
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auths.routes'
import usersRoutes from  './routes/users.routes'
import eventRoutes from './routes/Event.route'
import ordensRoutes from './routes/Pedidos.route'
const app = express ()
createRoles();

app.set('pkg', pkg)
app.use(morgan('dev'));
app.use(express.json());

app.get('/',(req, res) =>{
    res.json({
        name: app.get ('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/products', productsRoutes)
app.use('/api/login', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/ordens', ordensRoutes)
export default app;
