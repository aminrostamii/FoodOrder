import React from 'react';

const Index = ({data}) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map(img=>
  <div className="group cursor-pointer relative">
    <img
      src={`images/${img.id}.jpeg`}
      alt="Image"
      className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
    )}
  </div>
    );
}

export default Index;

// Fetch data from "http://localhost:4000/data"
export async function getStaticProps(){
  const res=await fetch("http://localhost:4000/data")
  const data= await res.json()

  return{
      props:{data},
  }
}
