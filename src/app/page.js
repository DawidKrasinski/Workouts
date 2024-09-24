"use client"
import { useState } from 'react';

export default function Home() {
  const [kgInput, setKgInput] = useState('')
  const InputChange = (e) => {
    setKgInput(e.target.value)
  }

  const Day = () => {
    return (
    <div style={{width: '270px', height: '350px'}} className="bg-white border-2 border-gray-400 rounded-xl"></div>
  )}

  return (
<div style={{height: '1700px', gridTemplateColumns: '1fr 450px 50px 450px 1fr', gridTemplateRows: '50px 500px 50px 500px 50px 500px'}}
 className="bg-gray-200 flex justify-center grid">
    <header style={{gridColumn: '2 / span 3', gridRowStart: '2'}} className="border-2 border-gray-400 rounded-3xl bg-gray-100 shadow-2xl shadow-gary-900 flex justify-around flex-wrap">
      <span style={{marginTop: '20px'}} className="text-5xl font-semibold">PLAN TRENINGOWY
        <a href="/">(+)</a>
      </span>
      <div style={{width: '880px', height: '350px'}} className="flex justify-between">
        <Day/>
        <Day/>
        <Day/>
      </div>
    </header>
    <section style={{gridColumnStart: '2', gridRowStart: '4'}} className="border-2 border-gray-400 rounded-3xl bg-gray-100 shadow-2xl shadow-gary-900 flex justify-center flex-wrap">
    <span style={{marginTop: '20px'}} className="text-5xl font-semibold">WYNIKI
        <a href="/">(+)</a>
      </span>
      <div style={{height: '370px', width: '350px'}} className="bg-white border-2 border-gray-400 rounded-2xl"></div>
    </section>
    <section style={{gridColumnStart: '4', gridRowStart: '4'}} className="border-2 border-gray-400 rounded-3xl bg-gray-100 shadow-2xl shadow-gary-900 flex justify-center flex-wrap">
    <span style={{marginTop: '20px'}} className="text-5xl font-semibold">CELE
        <a href="/">(+)</a>
      </span>
      <div style={{height: '370px', width: '350px'}} className="bg-white border-2 border-gray-400 rounded-2xl"></div>
    </section>

    <footer style={{gridColumn: '2 / span 3', gridRowStart: '6', gridTemplateColumns: 'repeat(19, 1fr)', gridTemplateRows: 'repeat(10, 1fr)'}} className="border-2 border-gray-400 rounded-3xl bg-gray-100 shadow-2xl shadow-gary-900 grid">
    <div style={{gridRow: '1 / 3', gridColumn: '4 / -4'}} className="text-5xl font-semibold flex justify-center items-center">KALKULATOR 1RM
        <a href="/">(+)</a>
      </div>
      <div style={{gridRow: '3 / -2', gridColumn: '2 / span 8'}} className="bg-white border-2 border-gray-400 rounded-2xl">
        <div className="text-5xl font-semibold">DANE: 
          <input onChange={InputChange} type="number" style={{width: '250px', height: '70px'}} className="border-2 border-black rounded-xl"/>
          <input type="number" style={{width: '250px', height: '70px'}} className="border-2 border-black rounded-xl"/>
          <input type="number" style={{width: '250px', height: '70px'}} className="border-2 border-black rounded-xl"/>
        </div>
      </div>
      <div style={{gridRow: '3 / -2', gridColumn: '11 / span 8'}} className="bg-white border-2 border-gray-400 rounded-2xl">
        <div className="text-5xl font-semibold">WYNIKI:
          <div>{kgInput}</div>
        </div>
      </div>
    </footer>
</div>
  );
}
