class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static titleCapitalize(string){
    if(Formatter.capitalizeExceptions.includes(string)){
     return string
    }else{
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    const splitString = string.split(" ")
    const firstWord = Formatter.capitalize(splitString[0])
    if(splitString[1]){
      const restOfSentence = splitString.slice(1).map(Formatter.titleCapitalize).join(" ")
      return firstWord + " " + restOfSentence
    }else{
      return firstWord
    }
  }

}

Formatter.capitalizeExceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']