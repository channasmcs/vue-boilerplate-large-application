/* 
eslint-disable 
*/
import axios from 'axios'
import { configAuthToken,	configLoopPath }	from '@/library/Helper/Config'

const headers = () => {
		const header = {
				'Accept': 'application/json'
		}

	if (configAuthToken) {
			header.Authorization = `Bearer ${configAuthToken}`
	}
		return header
}

const HTTP = axios.create ({
		baseURL: configLoopPath,
		headers: headers()
})

export default {
		setHeaders (item, value) {
				HTTP.defaults.headers.common[item] = value;
		},
		getRequest (url, cb, cbError) {
				HTTP.get(url)
				.then(response => {
						cb(response)
				})
				.catch(error => {
						this.errorHandling(error, cb, cbError)
				})
		},
		getFileRequest (url, cb, cbError) {
				HTTP.get(url, {
						responseType: 'blob'
				})
				.then(response => {
						cb(response)
				})
				.catch(error => {
						this.errorHandling(error, cb, cbError)
				})
		},
		postRequest (url, post, cb, cbError) {
				HTTP.post(url, post)
				.then(response => {
						cb(response)
				})
				.catch(error => {
						this.errorHandling(error, cb, cbError)
				})
		},
		putRequest (url, put, cb, cbError) {
				HTTP.put(url, put)
				.then(response => {
						cb(response)
				})
				.catch(error => {
						this.errorHandling(error, cb, cbError)
				})
		},
		patchRequest (url, patch, cb, cbError) {
				HTTP.patch(url, patch)
				.then(response => {
						cb(response)
				})
				.catch(error => {
								this.errorHandling(error, cb, cbError)
				})
		},
		deleteRequest (url, del, cb, cbError) {
				HTTP.delete(url, { data: del })
				.then(response => {
						cb(response)
				})
				.catch(error => {
						this.errorHandling(error, cb, cbError)
				})
		},
		errorHandling (error, cb, cbError) {
				if (error) {
						var errorResponse = null
						if (error.response) {
								console.log("Error Response", error.response)
								errorResponse = error.response
						} else if (error.request) {
								console.log("Error Request", error.request)
								errorResponse = error.request
						} else if (error.message) {
								console.log('Error', error)
								//errorResponse = error.message
						}
						if (errorResponse && cbError) {
								cbError(errorResponse)
						}
				}
		}
}