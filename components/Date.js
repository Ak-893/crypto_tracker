import React from 'react'

var date = ()=>
{
  var date=new Date();
  var displaytodaysdate=date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
  return(
    <div>
        <input type="text" value={displaytodaysdate} readOnly="true"/>
    </div>
  );
}

export default date;
