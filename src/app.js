import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';

// WEB
import login from './routes/login';
import logout from './routes/logout';
import users from './routes/users';
import recuperarContrasena from './routes/recover-password';
import tagSelects from './routes/get-tag-selects';
import createCompany from './routes/create-company';
import listOffers from './routes/list-offers';
import chatWeb from './routes/chat-web';
// Api mobil
import chatMobil from './routes/mobil/chat';
import crateUserApp from './routes/mobil/crateUser';
import productos from './routes/mobil/products';
import offerts from './routes/mobil/offerts';
import loginApp from './routes/mobil/login-app';
import searchCompanies from './routes/mobil/searchCompanies';
import notificationsOffersCompany from './routes/mobil/notifications-app';
import solicitorsOffers from './routes/solicitor-offers';

const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
};

app.use(helmet());
app.use(cors(corsOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('globalViews', path.join(__dirname, 'globalViews'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'globalViews')));
app.use('/storage', express.static(path.join(__dirname, '../uploads')));

// web
app.use('/login', login);
app.use('/log-out', logout);
app.use('/users', users);
app.use('/recover-pass', recuperarContrasena);
app.use('/tags', tagSelects);
app.use('/company', createCompany);
app.use('/list-offers', listOffers);
app.use('/solicitor-offers', solicitorsOffers);
app.use('/chat-web', chatWeb);
// app mobil
app.use('/chat', chatMobil);
app.use('/app-login', loginApp);
app.use('/create-user-app', crateUserApp);
app.use('/products', productos);
app.use('/offerts', offerts);
app.use('/search-companies', searchCompanies);
app.use('/offers', notificationsOffersCompany);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
