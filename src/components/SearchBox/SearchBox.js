import React, { useContext } from 'react';
import './SearchBox.css';
import { SearchNormal } from 'iconsax-react';
import { FriendContext } from '../../contexts/FriendContext';

const SearchBox = () => {
    const { searchFriend } = useContext(FriendContext);

    const search = (event) => {
        searchFriend(event.target.value);
    }

    return <div className="search">
        <SearchNormal color="#282c34" variant="Linear" size={20} className="search-icon"/>
        <input type="text" id="search" name="search" placeholder="Enter your friend's name" onChange={search}/>
    </div>
}

SearchBox.propTypes = {};

export default SearchBox;