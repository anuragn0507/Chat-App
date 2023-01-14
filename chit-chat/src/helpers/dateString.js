
const dateString = (datenumber) =>{
    if (datenumber) {
        let d = new Date(datenumber);
        let x = d.toString();
        let result = x.substring(0, x.length-18);
        console.log("date ka result kya hai //////// ", result);
        return result;
      } else {
        return '';
      }
}

export default dateString;