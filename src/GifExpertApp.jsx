const apiKey = 'ngB2sCGHPWX2SGWlz5qe0Dwz8MNRn9Pp';

import { useState } from 'react';
import { AddCategory, GiFGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
       
        setCategories([newCategory,...categories]);
    }


    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        // setCategories={setCategories} 
        onNewCategory={value => onAddCategory(value)}  //same as {event => onAddCategory(event)}
        />
        
    

     {
     categories.map(category =>(
               <GiFGrid 
                    key={category} 
                    category={category}/>
               
            )

                
            )}


           
      
        </>
    )
}