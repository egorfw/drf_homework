import React from "react";


const UserItem = ({user}) => {

    return(
        <tr>
            <td>
                {user.firstName}
            </td>
            <td>
                {user.lastName}
            </td>
            <td>
                {user.gender}
            </td>
            <td>
                {user.function}
            </td>
        </tr>
    )

}

const UsersList = ({users}) => {

    return(
        <table>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Gender
            </th>
            <th>
                Function
            </th>
            {users.map((object) => <UserItem user={object}/>)}
        </table>
    )
}

export default UsersList;