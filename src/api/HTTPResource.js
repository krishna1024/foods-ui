import 'whatwg-fetch';
export default class HTTPResource {

  constructor(){
    this.baseURL = '//192.168.0.4:8000';
  }

  getAll() {
    return fetch(this.baseURL + '/foods')
            .then( data => { return data.json() } );
  }

  get($id) {

  }


  update() {

  }

  create($data) {
    console.dir($data);
    return fetch(this.baseURL + '/foods' , {
      method: 'POST',
      body: JSON.stringify($data)
  }).then( data => { return data.json() } );
  }

  delete($id) {

  }
}
