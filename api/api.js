import uniRequest from 'uni-request';
uniRequest.defaults.baseURL = 'http://39.96.64.126:3000';
// uniRequest.defaults.baseURL = 'http://127.0.0.1:3000';
function getImportantDays() {
	return uniRequest.get('users/getImportantDays')
}
function addImportantDays(data) {
	return uniRequest.post('users/addImportantDays', data)
}
function deleteImportantDays(data) {
	return uniRequest.post('users/deleteImportantDays', data)
}
function updateImportantDays(data) {
	return uniRequest.post('users/updateImportantDays', data)
}
export { getImportantDays, addImportantDays, deleteImportantDays, updateImportantDays }