W = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
     'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
     '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
     '[', '-' , '+' , '.' , '^' , '@' , '_' , ':' , '*' ,',' ,']']

UW = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
      'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 
      '5', '9', '6', '7','8', '1', '2', '3','0', '4', 
      '-' , '_' , ':' , ',', '[' ,']', '+' , '.' , '^', '*' , '@']

compare = (v, j) ->
  if v == W[j]
    return UW[j]
    
revCompare = (v, j) ->
  if v == UW[j]
    return W[j]

enc = (value) ->
  #alert(value)
  c = []
  c.push compare(v, j) for w, j in W for v, i in value;
  return c.join("")
  
dc = (value) ->
  p1 = []
  p1.push revCompare(v, j) for w, j in UW for v, i in value;
  return p1.join("")
  

console.log enc "user1234@abc.com"
console.log dc enc "user1234@abc.com"