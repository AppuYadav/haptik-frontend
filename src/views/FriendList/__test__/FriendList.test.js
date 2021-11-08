import { render, screen } from "@testing-library/react";
import FriendList from '../FriendList';
import { FriendContext } from '../../../contexts/FriendContext';

function renderComponent() {
    render(
        <FriendContext.Provider 
            value={{ 
                loader: true,
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
            <FriendList title="Friends List"/>
        </FriendContext.Provider>
    ); 
}

describe("FriendList", () => {
    it('Check that we see a loading message until the app is ready', () => {
        renderComponent();
        expect(screen.getByText("Loading...")).toBeInTheDocument();
        // await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
    });
})