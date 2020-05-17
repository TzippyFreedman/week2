document.getElementById("btnCallPromise").addEventListener('click',function(){
    // promiseExample().then(function(result){alert(result);});
    promiseExample().then(alert);
});
function promiseExample()
{
     return new Promise(
        function(resolve,reject){
        setTimeout(function(){ resolve(Math.floor(Math.random() * Math.floor(10))); }, 3000);  
      });

}

function makeAllCaps(myWords)
{
    myWordsUpperCased=[];
    return new Promise((resolve,reject)=>{
        myWords.forEach(element => {
    if(typeof element!=="string")
           reject(new Error("the array should contain only letters"));
    else
    {
        myWordsUpperCased.push(element.toUpperCase());
    }
        
        });
         
         resolve(myWordsUpperCased);
    });
       
}
function sortWords(myWords)
{
    return new Promise((resolve)=>{
        myWords.forEach(element => {
            if(typeof elemnt==="string")
                   reject(new Error("the array should contain only letters"));
                });
        myWords.sort();
         resolve(myWords);
    });
 
}
const myWords=["tz111ippy","estherrivka","9"];
makeAllCaps(myWords).then((data)=>{
    sortWords(data).then((data)=>
        console.log(data));
},(data)=>{console.log(data);});
