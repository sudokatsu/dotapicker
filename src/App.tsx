import { useEffect, useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import $ from 'jquery'; 

function App() {
  const [count, setCount] = useState(0);

  //successfully fetches hero data
  /*
  attack_type: "Melee"
id: 1
legs: 2
localized_name: "Anti-Mage"
name: "npc_dota_hero_antimage"
primary_attr: "agi"
roles: (3) ['Carry', 'Escape', 'Nuker']
  */
  // useEffect(() => {
  //   fetch('https://api.opendota.com/api/heroes').then((data) => {
  //     data.json().then((value) => console.log(value));
  //   }).catch((error) => {
  //     console.log('error', JSON.stringify(error))
  //   });
  // }, []);

  //TODO: Look at this https://stackoverflow.com/questions/45677164/reactjs-json-file-is-fetched-from-localhost-instead-of-project-directory

  const imageRenderer = useMemo(() => {
    return $.ajax({
      url: 'src/assets/images/vertical/',
      success: function (data) {
        console.log('data', data);
        $(data).each(function () {
          const filename = this;
          console.log('filename', filename);
          $('body').append(
            "<img src='" + 'src/assets/images/vertical/' + filename + "'>"
          );
        });
      },
    });
  }, []);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>{imageRenderer}</div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
