import React from 'react'

function page({ params }) {
  console.log(params);
  return (
    <div>cathch all routes 
      {params.dpath.map((item, index) => 
       <div key={index}>{item}</div> 
    )}
    </div>
  )
}

export default page