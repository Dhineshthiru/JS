function outerParent(){
    var one = "I was created using var";
    let two = "I was created using let";
    function innerChild(){
        console.log(one);
        console.log(two);
    }
    innerChild();
}
outerParent();