function getData(cb) {

var xhr = new  XMLHttpRequest();

xhr.open("GET", "https://swapi.co/api/");
xhr.send();


xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //setData(JSON.parse(this.responseText));
        //data=this.responseText;
        //console.log(data);
        cb(console.log(JSON.parse(this.responseText)));
        //console.log(typeof(JSON.parse(this.responseText)));
        //document.getElementById("data").innerHTML = this.responseText;
    }
};
}

getData(function(data) {
    console.log(data)
});