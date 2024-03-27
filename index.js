// code your solution here

function saturdayFun (string = "roller-skate"){

    return `This Saturday, I want to ${string}!`;

}
saturdayFun ('bathe my dog!');



mondayWork = (activiTY = 'go to the office') => {

    return `This Monday, I will ${activiTY}.`;
}
mondayWork ("work from home");



function wrapAdjective (name1){
    
    return function mySpecial (name = "special") {
        return `You are ${name1}${name}${name1}!`
        
    }
    
    
    
}
 console.log(wrapAdjective("*")("a hard worker")); //=> "You are %a dedicated programmer%!"
