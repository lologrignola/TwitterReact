import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "axios";

function ModalEditUser() {

  const token = useSelector((state) => state.user.token);

  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    fullname:'', 
    email:'', 
    username:'',
    bio:'', 
    avatar:'',
    password:'',
  });

  const [file, setFile] = useState('');
  const handleShow = () => setShow(!show);

  const {fullname, email, username, bio, avatar,password} = formValues;

  const hadleChange = ({target}) =>{
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const handleImage = ({target}) =>{
    setFile(target.files[0])
  }

  const handleSubmit = e =>{
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
  
      axios.post(`${process.env.REACT_APP_URL_BACKEND}/user/edit-user`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
  }

  return (
    <>
      <span className="mx-auto" onClick={handleShow}>
        Set up profile
      </span>

      <Modal show={show} onHide={handleShow}>
        <div id="modal-negro">
          <Modal.Header closeButton className="d-flex justify-content-between">
            <Modal.Title style={{ color: "" }}>Update your info:</Modal.Title>
          </Modal.Header>
          <form  
            onSubmit={handleSubmit}
          >
            <Modal.Body>
              <label for="name" class="form-label mt-3">
                Full Name
              </label>
              <input type="text" id="name" name="fullname" class="form-control" value={fullname} onChange={hadleChange}/>
              <label for="username" class="form-label mt-3">
                Create a Username (must be unique)
              </label>
              <input type="text" id="username" name="username" class="form-control" value={username} onChange={hadleChange}/>
              <label for="email" class="form-label">
                Enter your email
              </label>
              <input type="email" id="email" name="email" class="form-control" value={email} onChange={hadleChange}/>
              <label for="password" class="form-label">
                Create a password
              </label>
              <input type="text" id="password" name="password" class="form-control" value={password} onChange={hadleChange}/>
              <label for="bio">Tell us about yourself:</label>
              <textarea class="form-control" name="bio" id="bio" cols="60" rows="5" value={bio} onChange={hadleChange}></textarea>
              <label for="img" class="form-label">
                Upload image
              </label>
              <input id="image" name="img" type="file" class="form-control" onChange={handleImage}/>
              <div class="form-text">Accepted formats: .jpg, .jpeg, .svg, .png</div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save changes
              </button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>

      {/* <Modal show={show} onHide={handleClose} className="px-0">
        
        <div
          className="modal fade"
          id="editUserModal"
          tabindex="-1"
          aria-labelledby="editUserModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header px-0">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <h5 className="modal-title ms-5" id="editUserModalLabel">Update your info:</h5>
              </div>

              <form action="/profile" method="POST" enctype="multipart/form-data">
                <div className="modal-body">
                  <label for="name" className="form-label mt-3">Full Name</label>
                    <input type="text" id="name" name="name" className="form-control" value="<%= userProfile.fullname %> "/>
                  <label for="username" className="form-label mt-3">Create a Username (must be unique)</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value="<%= userProfile.username %> "
                  />
                  <label for="email" className="form-label">Enter your email</label>
                  <input type="email" id="email" name="email" className="form-control" value="<%= userProfile.email %>"/>
                  <label for="password" className="form-label">Create a password</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="form-control"
                  />
                  <label for="bio">Tell us about your self:</label>
                  <textarea
                    className="form-control"
                    name="bio"
                    id="bio"
                    cols="60"
                    rows="5"
                    placeholder="<%= userProfile.bio %>"
                  ></textarea>
                  <label for="img" className="form-label">Upload image</label>
                  <input id="image" name="img" type="file" className="form-control" />
                  <div className="form-text">Accepted formats: .jpg, .jpeg, .svg, .png</div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default ModalEditUser;
