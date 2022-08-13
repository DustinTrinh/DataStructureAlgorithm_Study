function reverse(str){
    if(!str || typeof str != 'string' || str.length < 2 ) return str;
    
    const backwards = [];
    const totalItems = str.length - 1;
    for(let i = totalItems; i >= 0; i--){
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
  
  function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  
  const reverse3 = str => [...str].reverse().join('');
  
  a = reverse('Timbits Hi');
  b = reverse('Timbits Hi');
  c = reverse3('Timbits Hi');

  console.log(c);