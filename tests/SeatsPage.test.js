import React from 'react'
import { render } from "@testing-library/react-native"
import SeatsPage from "../src/screens/SeatsPage"


describe('SeatPage', () => {
    const mockedParams = {
        route: { params: { title: 'Ajay', poster: 'https://i.imgur.com/BTexHYJ.jpg', genre: 'Comedy/Adventure', } },
        navigation: ''
    };

    it("renders default elements", () => {
        render(<SeatsPage {...mockedParams} />);

    });

    test('renders approrpiate items', async () => {
        const { getByText } = render(<SeatsPage {...mockedParams} />);
        getByText('All Eyes here!')
        getByText('Booking Details')
        getByText('Ajay')
        getByText('Comedy/Adventure')
    });



    
}

)