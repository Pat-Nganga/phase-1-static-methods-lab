class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }
  static titleize(str) {
    const words = str.split(' ');
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const titleizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
  
      if (i === 0) {
        titleizedWords.push(this.capitalize(word));
      } else if (exceptions.includes(word)) {
        titleizedWords.push(word);
      } else {
        titleizedWords.push(this.capitalize(word));
      }
    }
  
    return titleizedWords.join(' ');
  }
  
}
