const manager = require('../business/usersManager');

function usersController() {
  async function post(req, res) {
    if (!req.user.roles.includes('SUPERADMIN')) {
      res.status(403);
      res.send('UNAUTHORIZED');
    }

    manager.
  }

  async function get(req, res) {
    if (!req.user.roles.includes('SUPERADMIN')) {
      res.status(403);
      res.send('UNAUTHORIZED');
    }
  }

  async function query(req, res) {
    if (!req.user.roles.includes('SUPERADMIN')) {
      res.status(403);
      res.send('UNAUTHORIZED');
    }
  }

  async function put(req, res) {
    if (!req.user.roles.includes('SUPERADMIN')) {
      res.status(403);
      res.send('UNAUTHORIZED');
    }
  }

  async function del(req, res) {
    if (!req.user.roles.includes('SUPERADMIN')) {
      res.status(403);
      res.send('UNAUTHORIZED');
    }
  }

  return {
    post, get, query, put, del,
  };
}

module.exports = usersController();
