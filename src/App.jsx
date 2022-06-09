import './App.css';
import React, { useState } from 'react';
import products from './products';
import IconSwitch from './components/IconSwitch/IconSwitch';
import CardsView from './components/CardsView/CardsView';
import ListView from './components/ListView/ListView';

function App() {
   const [selected, setSelected] = useState('view_module');
   const onSwitch = (icon) => {
      const iconView = icon === 'view_list' ? 'view_module' : 'view_list';
      setSelected(() => iconView);
   };

   return (
      <div className="App">
         <IconSwitch icon={selected} onSwitch={onSwitch} />
         {selected === 'view_list' ? (
            <ListView products={products} />
         ) : (
            <CardsView products={products} />
         )}
      </div>
   );
}

export default App;
