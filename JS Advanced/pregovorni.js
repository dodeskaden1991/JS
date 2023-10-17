function squareOfStar(n) {
  for (let i = 0; i < n; i++)
    console.log("*".repeat(n));
}

//squareOfStar(5);

function fromJSONToHTMLTable(input) {
  let obj = JSON.parse(input);
  let keys = Object.keys(obj[0]);
  let result = "";
  let special_symbols = /['&<>"–—©®™≈≠£€° ]/mg;
  let xxx = (x) => {
    switch (x) {
      case "&": return "&amp;"
      case "<": return "&lt;"
      case ">": return "&gt;"
      case "\"": return "&quot;"
      case "–": return "&ndash;"
      case "—": return "&mdash;"
      case "©": return "&copy;"
      case "®": return "&reg;"
      case "™": return "&trade;"
      case "≈": return "&asymp;"
      case "≠": return "&ne;"
      case "£": return "&pound;"
      case "€": return "&euro;"
      case "°": return "&deg;"
      case "'": return "&quot;"
      default: return "&nbsp;"
    }
  }
  result += "<table>\n\t<tr>"
  for (let key of keys) {
    result += "<th>" + key.replace(special_symbols, xxx) + "</th>";
  }
  result += "</tr>\n"
  obj.forEach(element => {
    result += "\t<tr>"
    for (keys_element in element) {
      if (keys.includes(keys_element)) {
        let word = element[keys_element].toString();
        word = word.replace(special_symbols, xxx)
        result += `<td>${word}</td>`;
      } else {
        result += `<td></td>`;
      }
    }
    result += "</tr>\n"
  });

  return result += "</table>\n"
}

console.log(fromJSONToHTMLTable(`[{"Name":"Sta  mat",

"Score":5.5},

{"Name":"Rumen",

"Score":66}]`))


function cars(input) {
  database = {};

  function created(name, value, name2) {
    if (value) {
      database[name] = Object.create(database[name2]);
    } else {
      database[name] = {};
    }
  }

  function seted(obj, key, value) {
    obj[key] = value;
  }

  function print(input) {
    let result = []
    for (let print in input) {
      result.splice(0, 0, `${print}:${input[print]}`);
    }
    console.log(result.reverse().join(","));
  }

  for (let line of input) {
    line = line.split(" ");
    if (line[0] == "create") {
      created(line[1], line[2], line[3]);
    } else if (line[0] == "set") {
      seted(database[line[1]], line[2], line[3]);
    } else if (line[0] == "print") {
      print(database[line[1]]);
    }
  }
}

cars(['create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2']);