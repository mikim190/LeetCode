function match(prefixes, numbers) {
    let {log} = console
    let result = new Array(numbers.length).fill('');
    let sortedPrefixes = prefixes.sort((a,b) => b.length - a.length);
    log(sortedPrefixes)
    let testing = [];
  for (let i = 0 ; i < numbers.length; i++) {
    for (let j = 0 ; j < sortedPrefixes.length; j++) {
      if (numbers[i].includes(sortedPrefixes[j])) {
        result[i] = (sortedPrefixes[j]);
        break;
      } 
    }
  }
  return result;
}


var prefixes = ['+1415123','+1415000','+1412','+1510','+1','+44'];
var numbers = ['+9990','+14151234567','+14151224983']

match(prefixes,numbers)

//Output: [ '', '+1415123', '+1' ]

//Explaination:
'+9990': no prefixes match with this number => return ''
'+14151234567:only matches 1 prefix '+1415123' => return '+1415123'
'+14151224983': only matches 1 prefix '+1' => return '+1'
