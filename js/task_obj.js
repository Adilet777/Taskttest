var obj = {
    name: 'Mike',
    lastname: 'Mikelson',
    age: 19,
    union: function() {
        console.log('${this.name} ${this.lastname}')
    }
}


obj.union(); 


// for(item in obj) {
    // console.log(obj[item]);
// }