#!/usr/bin/env node
const axios = require('axios')
const json2csv = require('json2csv')
const moment = require('moment')

function formatDate(dt) {
  return moment(dt).format('YYYY/MM/DD');
}

function getQuoteByDate(date) {
  const dt = formatDate(date)
  const url = `https://www.mercadobitcoin.net/api/btc/day-summary/${dt}/`
  return axios.get(url);
}

const [,, ...args] = process.argv
const [ initialDt, finalDt ] = args

const initialDate = moment(initialDt)
const finalDate = moment(finalDt)

const allPromises = [];
let currentDate = initialDate
while (currentDate <= finalDate) {
  allPromises.push(getQuoteByDate(currentDate))
  currentDate.add(1, 'day')
}

const allResults = [];
Promise.all(allPromises)
  .then(responses => {
    responses.map(resp => allResults.push(resp.data))
    const fields = ["date", "lowest", "volume", "amount", "avg_price", "opening", "closing", "highest", "quantity"]
    console.log(json2csv({data: allResults, fileds: fields}))
  })
