async function lookforprice(){
    var numEl = '';

    if(parseInt(texthtml.match(/\d{4}/)) ){
        numEl = parseInt(texthtml.match(/\d{4}/));
    }
    else if(parseInt(texthtml.match(/\d{3}/)) ) {
        numEl = parseInt(texthtml.match(/\d{3}/));
    }
    else{
        numEl = '-';
    }
    return numEl
}

module.exports = {
    lookforprice
}