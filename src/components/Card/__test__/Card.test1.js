import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../Card';


describe("Card", () => {
    it('should render multiple items', () => {
        render(
            <Card />
        );
        // addTask(["Go Grocery Shopping", "Go Grocery Shopping", "Go Grocery Shopping"])
        // const divElements = screen.queryAllByText(/Go Grocery Shopping/i);
        // expect(divElements.length).toBe(3)
    });
})