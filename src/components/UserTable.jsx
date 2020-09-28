import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react';

const UserTable = ( props ) => {
    console.log(props.users)
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>Action</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>NO users</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}


export default UserTable