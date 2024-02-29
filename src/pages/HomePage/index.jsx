import { useEffect, useState } from 'react';
import './style.css';

export const HomePage = () => {
  const [datetime, setDatetime] = useState('');
  const [timezone, setTimezone] = useState('Europe/Prague');
    useEffect(() => {
    const fetchTime = async () => {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      const data = await response.json();
      setDatetime(data.datetime);
    };
    fetchTime();
  }, [timezone]);
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          {" "}
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
        <div>Hodnota datetime: {datetime}</div>
        Vyberte zónu: <select value = {timezone} onChange = {(e) => setTimezone(e.target.value)}>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Europe/Prague">Praha</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

