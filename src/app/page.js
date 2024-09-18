export default function Home() {
  const Day = (props) => {
    return (
    <div style={{width: '270px', height: '350px'}} className="bg-white border-2 border-gray-400 rounded-xl "></div>
  )}

  return (
<body style={{height: '1700px', gridTemplateColumns: '1fr 450px 50px 450px 1fr', gridTemplateRows: '50px 500px 50px 500px 50px 500px'}}
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
    <section style={{gridColumnStart: '2', gridRowStart: '4'}} className="border-2 border-gray-400 rounded-3xl bg-gray-100 shadow-2xl shadow-gary-900 flex justify-center">
    <span style={{marginTop: '20px'}} className="text-5xl font-semibold">WYNIKI
        <a href="/">(+)</a>
      </span>
    </section>
    <section style={{gridColumnStart: '4', gridRowStart: '4'}} className="border-2 border-gray-400 rounded-3xl bg-gray-100 shadow-2xl shadow-gary-900 flex justify-center">
    <span style={{marginTop: '20px'}} className="text-5xl font-semibold">CELE
        <a href="/">(+)</a>
      </span>
    </section>

    <footer style={{gridColumn: '2 / span 3', gridRowStart: '6'}} className="border-2 border-gray-400 rounded-3xl bg-gray-100 shadow-2xl shadow-gary-900 flex justify-center">
    <span style={{marginTop: '20px'}} className="text-5xl font-semibold">KALKULATOR
        <a href="/">(+)</a>
      </span>
    </footer>
</body>
  );
}
