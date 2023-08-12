import { useState } from 'react';
import PropTypes from 'prop-types';




export const AddCategory = ({onNewCategory}) => {
const [inputValue, setInputValue] = useState('');
const onInputChange  = ({target}) => {   //event without deconstructing it, and then event.target.value
  
    setInputValue(target.value);
  
}

const onSubmit = (event) => {


   event.preventDefault();  
   if(inputValue.trim().length <=1) return;     // so that it doesnt refresh the web browser
   //setCategories( (categories) => [inputValue, ...categories, ]);
   onNewCategory(inputValue.trim());
   setInputValue('');

}

    return (
        <form onSubmit={onSubmit}  aria-label="form">
            <input 
                type= "text"
                placeholder="Buscar Gifs"
                value= {inputValue}
                onChange={ onInputChange}
            />
        </form>
        

    )
   
    
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}