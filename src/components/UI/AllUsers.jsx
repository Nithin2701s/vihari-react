import React, { useState, useEffect } from 'react';
import UserAvatar from '../../Assets/User_avatar.jpg'
import { Link } from 'react-router-dom';
import AdminNavbar from "./AdminNavbar";
const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleDeleteUser = (userId) => {
    fetch(`http://localhost:8000/users/${userId}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("User deleted successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
  };

  return (
    
    <div>
        <AdminNavbar/>
        <div>
        <h1>User Details</h1>
      </div>
      <Link to="/admindb/adduser">
        <button className="addnew btn btn-success" type="button">
          <i className="fa fa-user-plus"></i>&nbsp; Add New User
        </button>
      </Link>
      <hr />
      {users.length===0 && (<h1>No Users Found</h1>)}
      {users.map((user,index) => (
        <div className="row col-md-12 justify-content-center" key={user.id}>
          <div className="col-md-1"></div>
          <div className="col-md-10" id={`user-item-${user._id}`}>
            <div className="item-container">
              <div className="item-image col-md-3">
                <img
                  className="img-thumbnail item-image"
                  src={UserAvatar}
                  style={{ width: '200px' }}
                  alt="Cannot display"
                />
              </div>
              <div className="item-content col-md-6">
                <div>
                  <h3>Student {index+1}</h3>
                </div>
                <div>
                  <b>Firstname:</b> {user.firstName}
                </div>
                <div>
                  <b>Lastname:</b> {user.lastName}
                </div>
                <div>
                  <b>Email:</b> {user.email}
                </div>
                
              </div>
              <div className="col-md-1">
                <div>
                  <button
                    type="button"
                    className="delete-user-btn btn btn-danger"
                    data-user-id={user.id}
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            <div>
              <hr />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
