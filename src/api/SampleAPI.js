import HttpHandler from '@/library/Common/HttpHandler'

const postSampleAction = (postData, cb, cbError) => {
  HttpHandler.postRequest(`/post_url`, postData, cb, cbError)
}
const getSampleAction = (Id, cb, cbError) => {
  HttpHandler.getRequest(`/get_url/${Id}`, cb, cbError)
}
const updateSampleAction = (Id, postData, cb, cbError) => {
  HttpHandler.putRequest(`/update_url${Id}`, postData, cb, cbError)
}
const deleteSampleAction = (Id, del, cb, cbError) => {
  HttpHandler.deleteRequest(`delete_url/${Id}`, del, cb, cbError)
}
/* 
eslint-disable 
*/
export {
		postSampleAction,
		getSampleAction,
		updateSampleAction,
		deleteSampleAction
}
