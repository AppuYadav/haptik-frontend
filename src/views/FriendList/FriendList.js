import React, { Fragment, useContext, useMemo } from 'react';
import { SearchBox, Card } from './../../components'
import { FriendContext } from '../../contexts/FriendContext';
import { Pagination, Loader } from '../../components';
import './FriendList.css';
import { PageSize } from './../../utils/utils';

const FriendList = () => {
    const { loader, friends, removeFriend, favoriteFriend, currentPage, setCurrentPage } = useContext(FriendContext);

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return friends.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, friends]);

    return <Fragment>
        {
            loader ? <Loader title="loading..."/> :
            <React.Fragment>
                <SearchBox />
                {
                    currentData.map((friend) => (<Card friend={friend} id={friend.id} key={friend.id} removeFriend={removeFriend} favoriteFriend={favoriteFriend}/>))
                }
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={friends.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </React.Fragment>
        }
    </Fragment>
}

FriendList.propTypes = {};

export default FriendList;