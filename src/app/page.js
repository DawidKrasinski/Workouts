"use client"
import { useState } from 'react';

export default function Home() {
  const [kgInput, setKgInput] = useState(0)
  const kgInputChange = (e) => {
    setKgInput(e.target.value)
  }

  const [repsInput, setRepsInput] = useState(0)
  const repsInputChange = (e) => {
    setRepsInput(e.target.value)
  }

  const [bodyWeightInput, setBodyWeightInput] = useState(0)
  const bodyWeightInputChange = (e) => {
    setBodyWeightInput(e.target.value)
  }

  const values = {
    1: 1,
    2: 1.06,
    3: 1.09,
    4: 1.12,
    5: 1.15,
    6: 1.19,
    7: 1.22,
    8: 1.25,
    9: 1.28,
    10: 1.31,
    11: 1.34,
    12: 1.38
  }

  function oneRepMax () {
    return kgInput && repsInput ? Math.floor(kgInput * values[repsInput]*100)/100 : 0
  }

  function oneRepMaxBW () {
    return kgInput && repsInput && bodyWeightInput ? Math.floor(kgInput * values[repsInput]*100/bodyWeightInput) : 0
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
        <div style={{paddingTop: '30px'}} className="text-5xl font-semibold flex justify-around flex-wrap">DANE: 
          <input onChange={kgInputChange} type="number" style={{width: '250px', height: '70px'}} className="border-2 border-black rounded-xl"/>
          <input onChange={repsInputChange} type="number" style={{width: '250px', height: '70px'}} className="border-2 border-black rounded-xl"/>
          <input onChange={bodyWeightInputChange} type="number" style={{width: '250px', height: '70px'}} className="border-2 border-black rounded-xl"/>
        </div>
      </div>
      <div style={{gridRow: '3 / -2', gridColumn: '11 / span 8'}} className="bg-white border-2 border-gray-400 rounded-2xl">
        <div style={{paddingTop: '30px'}}className="text-5xl font-semibold flex justify-around flex-wrap">
          <span className="w-full text-center">WYNIKI:</span>
          <div className="w-full text-center">{oneRepMax()}KG</div>
          <div className="w-full text-center">{oneRepMaxBW()}%BW</div>
        </div>
      </div>
    </footer>
</div>
  );
}
