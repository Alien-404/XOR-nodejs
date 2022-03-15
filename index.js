// algoritma XOR 
// ambil 2 parameter yaitu string dan key
function xor(string, key) {
    // init data untuk menyimpan hasil xor nya
    let data = '';
    // looping setiap string yang ada 
    for (const e of string) {
        // xor string dengan key nya
        data += String.fromCharCode(e.charCodeAt(0) ^ key);
    }
    // return data xor
    return data;
}

const key = 123;
const encrypt = xor('Hello World', key);
const decrypt = xor(encrypt, key)
console.log(`Encrypted : ${encrypt}`);
console.log(`Decrypt : ${decrypt}`);