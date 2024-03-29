import React from 'react'

function Alert(props) {

  const capitalise =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
  <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
  </div>
//   props.alert &&<div className={`alert  alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//   {/* <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg> */}
//   <strong>{capitalise(props.alert.type)}</strong>:{props.alert.msg}
  
// </div>
   
  )
}

export default Alert
