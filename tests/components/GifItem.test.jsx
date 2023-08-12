import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';


describe('Tests en <GifItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'
    
    test('Has to match the snapshot', () => {

      


        const {container} = render( <GifItem title={title} url={url}/> );
        expect(container).toMatchSnapshot();
     });

     test('should show image with the indicated URL and alt ', () => { 

            render( <GifItem title={title} url={url}/> );
        //screen.debug();
        //console.log(screen.getByRole('img').alt);
        //console.log(screen.getByRole('img').alt);

            const {src, alt} = screen.getByRole('img');

            expect(src).toBe(url);
            expect(alt).toBe(title);


            // expect(screen.getByRole('img').src).toBe(url);
            // expect(screen.getByRole('img').alt).toBe(title);
      })


      test('should show title in the component', () => { 

        render( <GifItem title={title} url={url}/> );
        expect(screen.getByText(title)).toBeTruthy();

       })
    
 });