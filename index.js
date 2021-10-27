const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { pool } = require('./config')

const app = express()
const port = parseInt(process.env.PORT, 10) || 9001;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const addAnalyticsData = (req, res) => {
  const { language, platform, userAgent, latitude, longitude, ipAddress,  city, country} = req.body

  pool.query('INSERT INTO analyticsTable (language, platform, userAgent, latitude, longitude, ipAddress,  city, country) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [language, platform, userAgent, latitude, longitude, ipAddress,  city, country], error => {
    if (error) {
      throw error
    }
    res.status(201).json({ status: 'success', message: 'Analytics Information added successfully.' })
  })
}

app
  .route('/analytics')
  // POST endpoint
  .post(addAnalyticsData)

// Start server
app.listen(port, () => console.log(`server is up and running on localhost: ${port}`));