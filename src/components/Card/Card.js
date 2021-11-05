import React from 'react';
import './Card.css';
import { TrushSquare, Star, Star1 } from 'iconsax-react';
import { capitalize } from '../../utils/utils';
import Popup from 'react-popup';

const Card = ({friend, removeFriend, favoriteFriend, id}) => {
    const deleteFriend = () => {
        Popup.create({
            title: 'Remove Friend',
            onShow: (id, title) => {
                // console.log('Callback: onShow', id, title);
            },
            onClose: (id, title) => {
                // console.log('Callback: onClose', id, title);
            },
            content: (
                <div>
                    Are you sure to remove this friend?
                </div>
            ),
            className: 'alert',
            buttons: {
                left: [{
                    text: 'Cancel',
                    action: function () {
                        Popup.close();
                    }
                }],
                right: [{
                    text: 'Remove',
                    className: 'danger',
                    key: 'ctrl+enter',
                    action: function () {
                        Popup.close();
                        removeFriend(id);
                    }
                }]
            }
        });
    }

   
    return <div className="card-change">
        <div className="grid-item">
            <h4>{capitalize(friend.name)}</h4>
            <span>is your friend</span>
        </div>
        <div className="grid-item">
            <div style={{float: 'right', marginTop: '9px'}}>
                {
                    friend.favorite ? <Star1 color="#ff8a65" variant="Bold" size={28} onClick={() => favoriteFriend(id)}/> : <Star color="#ff8a65" variant="Outline" size={28} onClick={() => favoriteFriend(id)}/>
                }
                
                <TrushSquare style={{marginLeft: 12}} color="#ff8a65" variant="Linear" size={28} onClick={deleteFriend}/>
            </div>
        </div>
    </div>;
}

Card.propTypes = {};

export default Card;