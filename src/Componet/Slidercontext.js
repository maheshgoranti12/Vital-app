import React, {createContext, useContext, useState} from 'react';

const Slidercontext =createContext();

export function useSlider()
{
    return useContext(Slidercontext);
}
export function SliderProvider ({children}) {
    const [isSliderEnabled, setIsSliderEnabled] = useState(true);
  return (
   <Slidercontext.Provider value={{isSliderEnabled, setIsSliderEnabled}}>
    {children}
   </Slidercontext.Provider>
  );
}


