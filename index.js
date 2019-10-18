class Formatter {
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  static sanitize(word){
    //- ' space 
    return word.replace(/[^a-z\ '-]/gim,"");
  }
  
  static titleize(word){
    const wordArr = word.split(" ");
    const except = ["the", 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    let result = [];
    
    wordArr.forEach((word)=>{
      if(except.includes(word)){
        
        result.push(word);
      }
      else
        result.push(word.charAt(0).toUpperCase()+word.slice(1));
      
    })
    result[0] = result[0].charAt(0).toUpperCase()+result[0].slice(1)
    return result.join(" ");
  }
}