import React from 'react'
import { render, waitFor, fireEvent } from "@testing-library/react-native"
import Poster from "../src/components/Poster";
import Movies from "../src/screens/MoviesPage"
import { act } from 'react-test-renderer';

describe('Poster', () => {
    
    it("renders default elements",()=>{
        render(<Movies/>);
      
      });

    test('renders the poster', async () => {
        const { getByText, getByTestId } = render(<Poster movie={
            { title: 'Ajay', poster: 'https://i.imgur.com/BTexHYJ.jpg', genre: 'Comedy/Adventure', }} />);

        getByText('Ajay')
        getByText('Comedy/Adventure')
    });

    test('clicking on one item takes you to the seats screen', async () => {
        const navigateMock = jest.fn();
        const mockedParams = {
            route: { params: { title: 'Ajay', poster: 'https://i.imgur.com/BTexHYJ.jpg', genre: 'Comedy/Adventure', } },
            navigation: {navigate:navigateMock}
          };
       
        const { getByTestId } = render(<Poster movie={
            { title: 'Hey', poster: 'https://i.imgur.com/BTexHYJ.jpg', genre: 'Comedy/Adventure', }}  {...mockedParams} />);
        fireEvent.press(getByTestId('SeatsPage.Button'))
        expect(navigateMock).toBeCalledWith('Choose Seats',{"genre": "Comedy/Adventure", "poster": "https://i.imgur.com/BTexHYJ.jpg", "title": "Hey"})

    })


});





