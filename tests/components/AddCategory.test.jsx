import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('Tests in <AddCategory/>', () => { 

    test('should change the value of the TextBox', () => {

        render( <AddCategory onNewCategory={()=> {}}/> );
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Saitama'}});

        expect(input.value).toBe('Saitama');
        screen.debug();
        //console.log(input);
        //screen.debug();

     });

     test('should call onNewCategory if the input has a value', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}/> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        //screen.debug();
     })

     test('should not call onNewCategory if input is empty', () => { 
        
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}/> );
        
        const form = screen.getByRole('form');

     
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);





      })

 })