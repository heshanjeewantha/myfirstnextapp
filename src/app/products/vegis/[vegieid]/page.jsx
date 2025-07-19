import React from 'react'
import Link from "next/link";

function page({ params }) {
  return (
    <>
    <div>vegitable {params.vegieid}</div>
    <div>
    <Link href="/">Back to Home</Link>
    </div>
    </>
  )
}

export default page