var mas =[];
var proffesion = ["слесарь", "инженер", "водитель", "бухгалтер"];
function getProff() {
    for (var i = 0; i < proffesion.length; i++) {
        document.getElementById("prof").innerHTML +="<option value='"+i+"'>"+proffesion[i]+"</option>";
    }
}
getProff();
function Person() {
    this.form = document.getElementById("addForm");
    this.name = form.name.value;
    this.lastname = form.lastname.value;
    this.age = form.age.value;
    this.profes = form.prof.options[form.profession.selectedIndex].text;

    this.setString = function () {
        return this.name+"/"+this.lastname+"/"+this.age+"/"+this.profes;
    }
}
function validateForm() {
    Person.call(this);
    return this.form.checkValidity();

}
function delPerson(index) {
    return mas.splice(index, 1);
}

function showTabble() {
    function stringTD(str){
        this.string="";
        arr = str.split("/");
        for (i=0;i<arr.length;i++){
            this.string +="<td>"+arr[i]+"</td>";
        }
        return string;
    }

    function echoRow(){
        var string="";
        for(var i=0;i<mas.length; i++){
            string += "<tr>"+stringTD(mas[i])+"<td><button onclick='delPerson("+i+")' class='btn btn-danger'>delete</button></td><td><button name='replase' value='"+i+"' form='addForm' class='btn btn-warning' onclick='udetePerson("+i+");'>Изменить</button></td><tr>";
        }
        return string;
    }

    return document.getElementById("table").innerHTML=echoRow();

}

function udetePerson(id) {
    Person.call(this);
    if(validateForm()){
        var string =this.setString();
        mas[id] = string;
    }else {
        return ;
    }

}
function addPerson() {
    Person.call(this);
    if(validateForm()){
        var string =this.setString();
        mas.push(string);
    }else {
        return ;
    }

}

