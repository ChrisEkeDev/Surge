const express = require('express');
const router = express.Router();
const apiRouter = require('./api');
const { User } = require('../db/models')

// // Add a XSRF-TOKEN cookie in development
// if (process.env.NODE_ENV !== 'production') {
//     router.get('/api/csrf/restore', (req, res) => {
//         const csrfToken = req.csrfToken()
//       res.cookie('XSRF-TOKEN', csrfToken);
//       return res.json({
//         'XSRF-Token': csrfToken
//       });
//     });
// }

router.use('/api', apiRouter);

router.get('/', (req, res) => {
  return res.status(200).send('Hello World.')
})

router.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json({
    status: 200,
    message: "Users retrieved successfully",
    data: users
  })
})

// // Serve React build files in production
// if (process.env.NODE_ENV === 'production') {
//   const path = require('path');
//   // Serve the frontend's index.html file at the root route
//   router.get('/', (req, res) => {
//     // res.cookie('XSRF-TOKEN', req.csrfToken());
//     return res.sendFile(
//       path.resolve(__dirname, '../../frontend', 'build', 'index.html')
//     );
//   });

//   // Serve the static assets in the frontend's build folder
//   router.use(express.static(path.resolve("../frontend/build")));

//   // Serve the frontend's index.html file at all other routes NOT starting with /api
//   router.get(/^(?!\/?api).*/, (req, res) => {
//     // res.cookie('XSRF-TOKEN', req.csrfToken());
//     return res.sendFile(
//       path.resolve(__dirname, '../../frontend', 'build', 'index.html')
//     );
//   });
// }


module.exports = router;
