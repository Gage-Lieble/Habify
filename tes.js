console.log('wokrs')
axios.get('http://127.0.0.1:8000/api/csrf/').then(res => console.log(res.data.csrfToken))