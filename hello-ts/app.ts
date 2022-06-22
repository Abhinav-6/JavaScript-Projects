console.log("Namaste TypeScrit")

function add(n1:number,n2:number, showPhrase: boolean, phrase: string){
    if(showPhrase){
        var result:number = n1 + n2;
        console.log(phrase + result)
    }
}

var printResult : boolean = true
var resultPhrase:string = "The Result : "
add(5,12,printResult,resultPhrase)
