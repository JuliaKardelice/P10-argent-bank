import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { updateUserProfile } from '../../reducers/auth/authAction';
import './EditUserInfo.scss';
import { selectError, selectInfoUser, selectLoading } from '../../reducers/auth/authSelector';
import { cancelProfileEdit } from '../../reducers/auth/authSlice';


export const EditUserInfo: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  // We retrieve user profile, loading, and error states from Redux store

  // We set local state for user information fields
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const infoUser = useSelector(selectInfoUser);
  
  // Effect to update local fields when userProfile changes
  useMemo(() => {
    if (infoUser) {
      setUserName(infoUser.userName || '');
      setFirstName(infoUser.firstName || '');
      setLastName(infoUser.lastName || '');
    }
  }, [infoUser]);


  // We handle the save action to update the userName
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // We dispatch the action to update userName
      // unwrap() is used to directly get the result of the action (success or failure)
      await dispatch(updateUserProfile(userName)).unwrap();
      console.log('UserName updated successfully');
      dispatch(cancelProfileEdit());
    } catch (error) {
      console.error('Error while updating user profile:', error);
    }
  };
  // We handle the cancel action to exit edit mode
  const handleCancel = () => {
    dispatch(cancelProfileEdit());
  };


  // We display loading and error messages if necessary
  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error loading profile: {error}</p>;

  
  return (
    <form className="edit-user-info" onSubmit={handleSave}>
      <h1>Edit user info</h1>
      <div className="form-element">
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="form-element">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" value={firstName} disabled />
      </div>
      <div className="form-element">
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" value={lastName} disabled />
      </div>
      <div className="button-container">
        <button type="submit" className="save-button">
          Save
        </button>
        <button type="button" onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
};