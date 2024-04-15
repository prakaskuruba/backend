function rev(n){
    let ori=n;
    let r=0;
    while(n>0){
        let ld=n%10;
        r=parseInt(r*10+ld);
        n= Math.floor(n/10);

    }
    return ` ${r} `;

}


function fact(n){
    let f=1;
    for(var i=1;i<=n;i++){
        f*=i;
    }
    return ` ${f}`
}


module.exports={
    r:rev,
    f:fact
}