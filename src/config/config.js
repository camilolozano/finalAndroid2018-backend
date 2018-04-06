module.exports = {
  'development': {
    'username': 'postgres',
    'password': 'root',
    'database': 'big-app2',
    'host': 'localhost',
    'cliente': 'http://192.168.0.16:8080',
    'dialect': 'postgres',
    'port': '5431'
  },
  'test': {
    'username': 'root',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'production': {
    'username': 'postgres',
    'password': '92110230020',
    'database': 'usa-proyect',
    'host': 'localhost',
    'cliente': 'http://localhost:8080',
    'dialect': 'postgres'
  }
};
