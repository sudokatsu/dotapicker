import { useEffect } from 'react';
import './App.css';
import alchemist from 'assets/images/vertical/alchemist_vert.jpg';
import aa from 'assets/images/vertical/ancient_apparition_vert.jpg';
import antiMage from 'assets/images/vertical/antimage_vert.jpg';
import arcWarden from 'assets/images/vertical/arc_warden_vert.jpg';
import axe from 'assets/images/vertical/axe_vert.jpg';
import { Link, Route, Routes } from 'react-router-dom';
import Abaddon from './pages/heroes/Abaddon';
import { heroes } from 'constants/hero';

function App() {

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
  useEffect(() => {
    fetch('https://api.opendota.com/api/heroes').then((data) => {
      data.json().then((value) => console.log(value));
    }).catch((error) => {
      console.log('error', JSON.stringify(error))
    });
  }, []);

  //TODO: Look at this https://stackoverflow.com/questions/45677164/reactjs-json-file-is-fetched-from-localhost-instead-of-project-directory
  // Remove jQuery dependency if you don't use this
  // const imageRenderer = useMemo(() => {
  //   return $.ajax({
  //     url: 'src/assets/images/vertical/',
  //     success: function (data) {
  //       console.log('data', data);
  //       $(data).each(function () {
  //         const filename = this;
  //         console.log('filename', filename);
  //         $('body').append(
  //           "<img src='" + 'src/assets/images/vertical/' + filename + "'>"
  //         );
  //       });
  //     },
  //   });
  // }, []);

  const onSelect = async () => {

  };

  return (
    <>
      <div>
        {heroes.map((hero) => (
          <Link to={`/${hero.name}`}>
            <img className='portrait' src={hero.profilePic} />
          </Link>
        ))}
        <Link to='/abaddon'></Link>
        <img className='portrait' src={alchemist} />
        <img className='portrait' src={aa} />
        <img className='portrait' src={antiMage} />
        <img className='portrait' src={arcWarden} />
        <img className='portrait' src={axe} />
      </div>
      <Routes>
        <Route path='/abaddon' element={<Abaddon />} />
      </Routes>
    </>
  );
}

export default App;
