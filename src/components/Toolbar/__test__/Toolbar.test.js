import { render, screen } from "@testing-library/react";
import Toolbar from '../Toolbar';
import { FriendContext } from '../../../contexts/FriendContext';

function renderComponent() {
    render(
        <FriendContext.Provider 
            value={{ 
                original: [], 
                friends: [], 
                createFriend: jest.fn(), 
                removeFriend: jest.fn(), 
                favoriteFriend: jest.fn(), 
                searchFriend: jest.fn(), 
                currentPage: jest.fn(), 
                setCurrentPage : jest.fn()
            }}
        >
            <Toolbar title="Friends List"/>
        </FriendContext.Provider>
    ); 
}

describe("Toobar", () => {
    it('should render same text passed into title prop', () => {
        renderComponent();
        const spanElement = screen.getByText(/Friends List/i);
        expect(spanElement).toBeInTheDocument();
    });
})