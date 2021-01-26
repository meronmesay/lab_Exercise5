/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/




// Define UI Variables  here 
collection=document.querySelectorAll('.collection-item')
collection.forEach(function (element,index) {
   const attributee=element.firstChild.textContent
   let value =element.firstElementChild
   if (index<=4) {
       value.innerHTML=location[attributee]
   } else if(index<=9) {
    value.innerHTML=navigator[attributee]
       
   } else if (index<=12){
    value.innerHTML=screen[attributee]
   }else{
    value.innerHTML=history[attributee]
   }
 
    
});
