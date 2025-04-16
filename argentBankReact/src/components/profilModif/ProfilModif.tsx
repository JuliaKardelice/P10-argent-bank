import React from "react";
import { startProfileEdit } from "../../reducers/auth/authSlice";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";




interface ProfileModifProps {
  firstName: string;
  userName: string;
}




const ProfileModif: React.FC<ProfileModifProps> = ({ firstName, userName }) => {
    
  const dispatch: AppDispatch = useDispatch();


  
  // We handle the click event to start editing the profile
  const handleEditClick = () => {
    dispatch(startProfileEdit());
  };



  return (
    <section>
      <div className="header">
        <h1>
          Welcome back
          <br />
          {`${firstName} ${userName} `}
          {/* Afficher le nom complet de l'utilisateur */}
        </h1>
        <button className="edit-button" onClick={handleEditClick}>
          Edit Name
        </button>
      </div>
    </section>
  );
};
export default ProfileModif;