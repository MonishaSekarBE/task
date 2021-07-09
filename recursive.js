function dn(x) {
    if(x>10){
        return;
    }else{
        console.log(x);
        x++;
        dn(x);
    }
    
}
dn(5);
