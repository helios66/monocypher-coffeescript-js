// Generated by CoffeeScript 1.12.4
(function() {
  var UW, W, compare, dc, enc, revCompare;

  W = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '[', '-', '+', '.', '^', '@', '_', ':', '*', ',', ']'];

  UW = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '5', '9', '6', '7', '8', '1', '2', '3', '0', '4', '-', '_', ':', ',', '[', ']', '+', '.', '^', '*', '@'];

  compare = function(v, j) {
    if (v === W[j]) {
      return UW[j];
    }
  };

  revCompare = function(v, j) {
    if (v === UW[j]) {
      return W[j];
    }
  };

  enc = function(value) {
    var c, i, j, k, l, len, len1, v, w;
    c = [];
    for (i = k = 0, len = value.length; k < len; i = ++k) {
      v = value[i];
      for (j = l = 0, len1 = W.length; l < len1; j = ++l) {
        w = W[j];
        c.push(compare(v, j));
      }
    }
    return c.join("");
  };

  dc = function(value) {
    var i, j, k, l, len, len1, p1, v, w;
    p1 = [];
    for (i = k = 0, len = value.length; k < len; i = ++k) {
      v = value[i];
      for (j = l = 0, len1 = UW.length; l < len1; j = ++l) {
        w = UW[j];
        p1.push(revCompare(v, j));
      }
    }
    return p1.join("");
  };

  console.log(enc("user1234@abc.com"));

  console.log(dc(enc("user1234@abc.com")));

}).call(this);
