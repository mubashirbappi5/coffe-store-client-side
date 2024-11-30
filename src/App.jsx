
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const coffeedata = useLoaderData()
  const[coffees,setcoffees]=useState(coffeedata)

  return (
    <div>
    
      <Banner/>
      <Features/>
      <section className='min-h-screen mt-10'>
       <div className='flex flex-col items-center justify-center gap-4'>
       <h4 className='text-sm font-thin'>--- Sip & Savor ---</h4>
       <h1 className='text-2xl font-bold'>Our Popular Products</h1>
       <button className="btn bg-[#E3B577]"><Link to={'/addcoffee'}>Add Coffee</Link></button>
       </div>
       <section className='w-11/12 mx-auto grid grid-cols-2 gap-5 mt-6'>

        {
       coffees.map(coffe => <CoffeeCard key={coffe._id} coffe={coffe} coffees={coffees} setcoffees={setcoffees}/>)

        }
       </section>


      </section>
    </div>
  );
};

export default App;