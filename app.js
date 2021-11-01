const axios = require('axios')

const endpoint = "https://api.monzo.com/"
const token = ''

axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

const getAccountID = async () => {
    const url = endpoint + 'accounts'
    const response = await axios.get(url)
    return response
}

const getBalance = async account_id => {
    const url = endpoint + 'balance'
    const config = { params: {account_id}}
    const response = await axios.get(url, config)
    return response
}

const getPots = async current_account_id => {
    const url = endpoint + 'pots'
    const config = { params: {current_account_id}}
    const response = await axios.get(url, config)
    return response
}

getAccountID()
    .then((response) => {
        console.log('Account ID: ' + response.data.accounts[0].id)
        //return getPots(response.data.accounts[0].id)
        return getBalance(response.data.accounts[0].id) 
    })
    .then((response) => {
        console.log(response.data.balance)
    })
    .catch((error) => {
        console.log(error)
    })

