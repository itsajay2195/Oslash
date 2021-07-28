import React from 'react'
import {render} from "@testing-library/react-native"
import Poster   from "../src/components/Poster";
import Movies from "../src/screens/MoviesPage"

it("renders default elements",()=>{
    render(<Movies></Movies>);
});