const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

// Add a XSRF-TOKEN cookie in development
if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        const csrfToken = req.csrfToken()
      res.cookie('XSRF-TOKEN', csrfToken);
      return res.json({
        'XSRF-Token': csrfToken
      });
    });
}

router.use('/api', apiRouter);

module.exports = router;
