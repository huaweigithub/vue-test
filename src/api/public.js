import axios from 'axios';
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

export default {
    fetGet (url, params ={}) {
        return new Promise((resolve, reject) =>{
            axios.get(url,{params}).then(res =>{
                resolve(res.data)
            }).catch(error =>{
                reject(error)
            })
        })
    },
    fetPost (url, params={}) {
        return new Promise((resolve, reject) =>{
            axios.post(url, params).then(res =>{
                resolve(res.data)
            }).catch(error =>{
                reject(error)
            })
        })
    }
}