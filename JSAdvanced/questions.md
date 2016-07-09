##Questions

1.

```
var Student=function (name,age,sex,a,b,c) {
    this.name=name;
    this.age=age;
    this.sex=sex;
    this.lesson={chinese: a,math: b,english: c};
    this.sayhello=function () {
        console.log();
    }
};
var p=new Student("aaa",18,"boy",100,100,100);

var p3=new Student();
var p4=new Student();
console.log(p3.sayhello===p4.sayhello);

```
false


2,

```
function fun(name) {
    this.name=name;
}
fun.prototype.sayhello=function () {

};

var p1=new fun("dsfs");
var p2=new fun("dsfdfsd");
console.log(p1.sayhello===p2.sayhello);
```
true

