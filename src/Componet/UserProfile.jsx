import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookOpen, faBell, faSignOutAlt, faCamera } from '@fortawesome/free-solid-svg-icons';
import './UserProfile.css';
const UserProfile = () => {

    const fileInputRef = useRef();

    const [state, setState] = useState({
        fullName: '',
        user: '',
        mobileno: '',
        codeforcesprofileId: '',
        githubprofileId: '',
        linkedinprofileId: '',
        leetcodeprofileId: '',
        codechefprofileId: '',
        userFullName: '',
        isEditing: false,
        avatarImage: './img/avatar.png',
    });

    const handleTextChange = (field, e) => {
        const newValue = e.target.value;

        setState((prevState) => ({
            ...prevState,
            [field]: newValue,
            user: field === 'user' ? newValue : prevState.user,
            userFullName: field === 'fullName' ? newValue : prevState.userFullName,
        }));
    };

    const handleInputChange = (field, e) => {
        setState({ ...state, [field]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            handleImageUpload(file);
        }
    };

    const handleImageUpload = (file) => {
        const image = new Image();

        image.onload = () => {
            const { size, width, height } = image;

            if (isValidImage(size, width, height)) {
                const reader = new FileReader();

                reader.onloadend = () => {
                    setState({ ...state, avatarImage: reader.result });
                };

                reader.readAsDataURL(file);
            } else {
                showImageError();
            }
        };

        image.src = URL.createObjectURL(file);
    };

    const isValidImage = (size, width, height) => {
        const maxSize = 100 * 1024; // 10kb
        const maxDimension = 120;

        return size <= maxSize && width <= maxDimension && height <= maxDimension;
    };

    const showImageError = () => {
        alert('Please re-upload the icon. Image size must be below 10kb and dimensions below 180x180.');
    };

    const handleEditClick = () => {
        setState((prevState) => ({
            ...prevState,
            isEditing: !prevState.isEditing,
        }));
    };

    const handleSubmitClick = () => {
        console.log('Data saved:', state);
        setState((prevState) => ({
            ...prevState,
            isEditing: !prevState.isEditing,
        }));
    };

    const renderNavItem = (icon, label) => {
        return (
            <div className="nav-item_user">
                <FontAwesomeIcon icon={icon} className="white-icon" />
                <label>{label}</label>
            </div>
        );
    };

    const { isEditing, user, userFullName, avatarImage } = state;

    return (
        <>
            <div className="profile-container_user">
                <div className="sidebar_user">
                    <div className="avatar-container_user">
                        <img src={avatarImage} alt="" />
                        <div
                            className="upload-icon_user"
                            onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        >
                            <FontAwesomeIcon icon={faCamera} />
                        </div>
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                        <p className={`user ${isEditing ? 'editing' : ''}`}>
                            {userFullName || 'Full Name'}
                        </p>
                        <p className={`useri ${isEditing ? 'editing' : ''}`}>
                            @ {user || 'username'}
                        </p>
                    </div>

                    <div className="nav-items_user">
                        <label className="dash_user">Dashboard</label>
                        {renderNavItem(faUser, 'Profile')}
                        {renderNavItem(faBookOpen, 'Courses')}
                        {renderNavItem(faBell, 'Notification')}
                        {renderNavItem(faSignOutAlt, 'Log Out')}
                    </div>
                </div>

                <div className="main-content_user">
                    <div className="card-header_user">
                        <label>Basics</label>
                    </div>
                    <div className="card-body_user">
                        <div className="profile-card_user">
                            <div className="form-row">
                                <label>Full Name:</label>
                                <input
                                    type="text"
                                    value={state.fullName}
                                    onChange={(e) => handleTextChange('fullName', e)}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="form-row_user">
                                <label>User Name:</label>
                                <input
                                    type="text"
                                    value={state.user}
                                    onChange={(e) => handleTextChange('user', e)}
                                    readOnly={!isEditing}
                                />
                            </div>
                            <div className="form-row_user">
                                <label>Mobile No:</label>
                                <input
                                    type="text"
                                    value={state.mobileno}
                                    onChange={(e) => handleTextChange('mobileno', e)}
                                    readOnly={!isEditing}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card-header_user">
                        <label>Links</label>
                    </div>
                    <div className="card-body_user">
                        <div className="profile-card_user">

                            <div className="form-row_user">
                                <label>Codeforces:</label>
                                <input
                                    type="text"
                                    className="form-control_user"
                                    placeholder={`https://codeforces.com/profile/${state.codeforcesprofileId || 'user'}`}
                                    value={state.codeforcesprofileId}
                                    onChange={(e) => handleInputChange('codeforcesprofileId', e)}
                                    readOnly={!isEditing}
                                />
                            </div>

                            <div className="form-row_user">
                                <label>GitHub:</label>
                                <input
                                    type="text"
                                    className="form-control_user"
                                    placeholder={`https://github.com/${state.githubprofileId || 'user'}`}
                                    value={state.githubprofileId}
                                    onChange={(e) => handleInputChange('githubprofileId', e)}
                                    readOnly={!isEditing}
                                />
                            </div>

                            <div className="form-row_user">
                                <label>Linkedin:</label>
                                <input
                                    type="text"
                                    className="form-control_user"
                                    placeholder={`https://in.linkedin.com/in/${state.linkedinprofileId || 'user'}`}
                                    value={state.linkedinprofileId}
                                    onChange={(e) => handleInputChange('linkedinprofileId', e)}
                                    readOnly={!isEditing}
                                />
                            </div>

                            <div className="form-row_user">
                                <label>Leetcode:</label>
                                <input
                                    type="text"
                                    className="form-control_user"
                                    placeholder={`https://leetcode.com/${state.leetcodeprofileId || 'user'}`}
                                    value={state.leetcodeprofileId}
                                    onChange={(e) => handleInputChange('leetcodeprofileId', e)}
                                    readOnly={!isEditing}
                                />
                            </div>

                            <div className="form-row_user">
                                <label>CodeChef:</label>
                                <input
                                    type="text"
                                    className="form-control_user"
                                    placeholder={`https://www.codechef.com/users/${state.codechefprofileId || 'user'}`}
                                    value={state.codechefprofileId}
                                    onChange={(e) => handleInputChange('codechefprofileId', e)}
                                    readOnly={!isEditing}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="buttons-container_user">
                        <button onClick={handleEditClick}>
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                        {isEditing && (
                            <button onClick={handleSubmitClick}>
                                Save
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
