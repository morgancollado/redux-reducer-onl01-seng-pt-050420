import React from 'react'

export function manageFriends(state = {friends: []}, action){
    switch (action.type){
        case 'ADD_FRIEND':
            let newFriend = Object.assign({}, state)
            newFriend.friends.push(action.friend)
            return newFriend

            case 
            "REMOVE_FRIEND":
            let oldFriend = Object.assign({}, state)
            oldFriend.friends.map((friend, index)=>{
                if (friend.id === action.id){
                    oldFriend = {
                        ...state,
                        friends: [
                            ...state.friends.slice(0, index),
                            ...state.friends.slice(index + 1)
                        ]
                    }
                }
            })
            return oldFriend
            default: 
            return state
    }

}
