let articles=[
    {title:"election",
     writer:"adavid",
    date:"21/2/21"},
    {title:"new mayor",
     writer:"avi",
    date:"01/2/01"},
    {title:"race winner",
     writer:"haim",
    date:"11/9/11"},
    {title:"discovery",
     writer:"dani",
    date:"21/03/05"}
]
//////////////////1/////////////////////
articles.forEach((article) => {
    console.log(article);
});

for (const article of articles) {
    console.log(article);
}
/////////////////////////////2////////////
articles.forEach((article) => {
   for (const key in article) {
     console.log(key+" :"+article[key]);
} 
});
/////////////////////////3///////////////////

let books=[
    {name:"dracula",
     writer:"barm stroker",
    price:20},
    {name:"moby dick",
     writer:"herman melville",
    price:25},
    {name:"the odyssey",
     writer:"homer",
    price:80},
    {name:"a farewell to arms",
     writer:"ernest hemingway",
    price:40}
]
books.forEach((book) => {
    console.log(book);
});
books.forEach((book) => {
    console.log(book.writer);
});
///////////////////////////4/////////////////////
var nums=[34,45,67,89]
let sum=0;
nums.forEach(num => {
    sum+=num
    
});
console.log(sum);

for (const num of nums) {
    sum+=num
}
console.log(sum);