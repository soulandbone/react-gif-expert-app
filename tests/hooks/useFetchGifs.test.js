import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Tests in hook useFetchGifs', () => {

test('should return the initial state', () => { 

        const {result} = renderHook( () => useFetchGifs('One Punch') );
        console.log(result);
        const {images, isLoading } = result.current; 
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
        
 });

 test('should return an images array and the isLoading in false', async() => { 

    const {result} = renderHook( () => useFetchGifs('One Punch') );

    await waitFor(
        () => expect(result.current.images.length).toBeGreaterThan(0), //wait for this condition to happen. there is a second argument as timeout, if not specified it goes by default to 1
        
    );
    const {images, isLoading} = result.current;
   
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  })

 })