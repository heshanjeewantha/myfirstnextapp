import React from 'react'
import Link from "next/link";

function page() {
  const vegis = [

    { id:1,
      name: "brocoli"
    },
    {
      id:2, 
      name: "potato"
    }, 
    {
      id:3, 
      name: "carrot"
    },


  ]
  return (
    <>
    <div>vegis page</div>
     
     <ul>

      {vegis.map((vegi) => (
        <li key={vegi.id}><Link href={`/products/vegis/${vegi.id}`}>{vegi.name}</Link></li>
      ))}
    </ul>
    </>
  )
}

export default page