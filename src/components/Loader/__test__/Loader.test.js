import { render, screen } from "@testing-library/react";
import Loader from '../Loader';

function renderComponent() {
    render(
        <Loader title="Loader..."/>
    ); 
}

describe("Loader", () => {
    it('should render same text passed into title prop', () => {
        renderComponent();
        const spanElement = screen.getByText(/Loader.../i);
        expect(spanElement).toBeInTheDocument();
    })
})