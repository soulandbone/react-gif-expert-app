import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');


describe('Testing in <GifGrid/>', () => { 

    const category = 'One Punch';



    test('should show Loading initially', () => { 

useFetchGifs.mockReturnValue({
    images: [],
    isLoading: true
});

        render(<GifGrid category={category} />) ;
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        screen.debug();

     });

     test('should show items when images are loaded using useFetchGifs ', () => { 

        const gifs=[{
            id: 'ABC',
            title: 'Saitama',
            url:'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url:'https://localhost/goku.jpg'
        }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />) ;
        expect(screen.getAllByRole('img').length).toBe(2);

     })
 }) 