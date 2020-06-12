 function $(pa) {
     var re = document.querySelectorAll(pa);
     if (re.length == 1){
         return re[0];
    }
    else{
        return re;
    }
}