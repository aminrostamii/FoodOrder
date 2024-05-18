import MenuPage from '@/Components/Template/MenuPage';
import { revalidatePath } from 'next/cache';
import React from 'react';

const Index = ({data}) => {
    return (
    <MenuPage data={data}/>
    );
}

export default Index;

export async function getStaticProps(){
    const res=await fetch("http://localhost:4000/data")
    const data= await res.json()

    return{
        props:{data},
        revalidate: 30*60 ,
    }
}