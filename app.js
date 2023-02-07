console.log('wokr')
axios.get('http://127.0.0.1:8000/api/getcsrf/').then(res => console.log(res.headers.set_cookie) )