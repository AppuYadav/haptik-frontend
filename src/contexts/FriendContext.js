import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import toast from 'react-hot-toast';
import { capitalize, PageSize } from '../utils/utils';
import axios from 'utils/axios';

export const FriendContext = createContext();

const FriendContextProvider = (props) => {
    const [original, setOriginal] = useState([]);
    const [friends, setFriends] = useState(original);
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        let mounted = true;
    
        const fetchData = () => {
          axios.get('/api/friends').then(response => {
            if (mounted) {
                setOriginal(response.data.lists);
                setFriends(response.data.lists);
                setLoader(false);
            }
          });
        };
    
        fetchData();
        return () => {
          mounted = false;
        };
    }, []);    

    const sortFavorite = (data) => {
        data.sort(value => {
            return value.favorite ? -1 : 1
        })
        setFriends(data);
    }

    const createFriend = (name) => {
        let allFriends = [{name, id: uuid(), favorite: false}, ...original];
        if(searchText.length > 0) {
            setOriginal(allFriends);
            sortFavorite(allFriends.filter(friend => {
                return friend.name.startsWith(searchText);
            }));
        } else {
            sortFavorite(allFriends);
            setOriginal(allFriends);
        }
        toast.success(`${capitalize(name)} Friend Created Successfully`, {
            position: "bottom-center"
        })
    };

    const removeFriend = (id) => {
        let allFriends = original.filter(friend => friend.id !== id);
        if(searchText.length > 0) {
            setOriginal(allFriends);
            sortFavorite(allFriends.filter(friend => {
                return friend.name.startsWith(searchText);
            }));
        } else {
            sortFavorite(allFriends);
            setOriginal(allFriends);
        }
        console.log(allFriends)
        console.log('>>>>', allFriends.length % PageSize === 0 ? Math.floor(allFriends.length / PageSize) : currentPage);
        setCurrentPage(allFriends.length % PageSize === 0 ? Math.floor(allFriends.length / PageSize) : currentPage)
        toast.success('Friend Deleted Successfully', {
            position: "bottom-center"
        })
    }

    const favoriteFriend = (id) => {
        let friendFavorite = friends.map((friend) => {
            if (friend.id === id) {
                friend.favorite = !friend.favorite;
            }
            return friend;
        })
        sortFavorite(friendFavorite);
        toast.success(friends.find(friend => friend.id === id).favorite ? 'Friend Add Favorite' : 'Friend Remove Favorite', {
            position: "bottom-center"
        })
    }

    const searchFriend = (value) => {
        setSearchText(value);
        let searchFriendsList = [];
        if(value.length > 0) {
            searchFriendsList = friends.filter(friend => {
                return friend.name.startsWith(value);
            })
        } else {
            searchFriendsList = original;
        }
        
        sortFavorite(searchFriendsList);
    }

    return (
        <FriendContext.Provider value={{ original, friends, loader, createFriend, removeFriend, favoriteFriend, searchFriend, currentPage, setCurrentPage }}>
            {props.children}
        </FriendContext.Provider>
    );
}

export default FriendContextProvider;