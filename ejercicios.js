function ensure(value) {
    if(value === undefined ){
      throw new error();
    }
      return value;
  
  }
  ensure(2);

//*************************************************
  
function formatDate(userDate) {

    var u = userDate.split('/', 3);
    var date;
    if(u[0].length ==1){
  
     date = u[2]+"0"+u[0]+u[1];
    }else if(u[1].length ==1){
  
       date = u[2]+u[0]+"0"+u[1];
    }else{
  
        date = u[2]+u[0]+u[1];
  }
        console.log(userDate);
        return date;
  }
