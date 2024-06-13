let x=()=>{
    console.log("array function");
}
x();
y=[1,2,3,4,5];
y.forEach(element => {
    console.log(element);
});
console.log("for of in js");
for(index of y){
    console.log(index);
}
console.log("for loop");
for(i=0; i<y.length; i++){
    console.log(y[i]);
}
