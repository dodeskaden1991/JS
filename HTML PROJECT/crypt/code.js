function code() {
    let text = encodeURI(document.getElementById("text").value);
    let key = encodeURI(document.getElementById("key").value);
    let what = document.getElementsByName("function");
    let value = "";
    
    for (let i = 0; i < what.length; i++) {
        if (what[i].checked){
            value = what[i].value;
        }
    }
    
    if (value == "decode"){
        text = hexDecode(text);
    }

    text = Array.from(text);

    for (let i = 0; i < text.length; i++) {
        let j = i % key.length;
        let cText = text[i].charCodeAt(0);
        let cKey = key.charCodeAt(j);
        cText = cText ^ cKey;
        text[i] = String.fromCharCode(cText);
    }
    
    text = text.join('');
    
    if (value == "code"){
        text = hexEncode(text); 
        document.getElementById("text").value = text;
    }
    if (value == "decode"){
        document.getElementById ("text").value = decodeURI(text);
    }

}
    
function hexEncode(data) {
    data = Array.from(data);
    
    for (let i = 0; i < data.length; i++) {
        let hexString = data[i].charCodeAt(0).toString(16);
        if (hexString.length < 2) {
            hexString = "0" + hexString;
        }
        data[i] = hexString;
    }
    
    return data.join('');
}

function hexDecode(hex) {
    let data = [];
    hex = Array.from(hex);
    
    for (let i = 0; i < hex.length; i += 2) {
        let hexValue = hex.slice(i, i+2).join("");
        let char = String.fromCharCode(parseInt (hexValue, 16));
        data.push(char)
    }
    
    return data.join(''); 
}