const request = new XMLHttpRequest()
request.open('GET', 'data.json');
request.setRequestHeader("Content-Type","application_json")
request.send()
request.onload
request.response
JSON.parse
console.log(request)