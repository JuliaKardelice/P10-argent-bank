import {useEffect, useState} from "react";
///import { EditUserInfo } from "../../components/userEditForm/EditUserInfo";
import Navigation from "../../components/navigation/Navigation";
import { AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectInfoUser, selectIsEditingProfile, selectLoading } from "../../reducers/auth/authSelector";
import { fetchUserProfile } from "../../reducers/auth/authAction";
import { EditUserInfo } from "../../components/userEditForm/EditUserInfo";
import ProfileModif from "../../components/profilModif/ProfilModif";
import Account from "../../components/account/Account";
import "./Profile.scss"
// import {Account} from "../../components/account/Account";

const accountsData = [
    {
      id: 1,
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      id: 2,
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      id: 3,
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];


export const Profile: React.FC = ()=> {

const dispatch : AppDispatch = useDispatch();
const error = useSelector(selectError);
const loading = useSelector(selectLoading);
const infoUser = useSelector(selectInfoUser);
const isEditingProfile = useSelector(selectIsEditingProfile);

// We set local state for displaying user information
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");



  // Effect to fetch user profile when the component mounts
  useEffect(() => {
    // We dispatch fetchUserProfile to load the profile on startup
    dispatch(fetchUserProfile());
  }, [dispatch]);

  // Effect to update local fields when the userProfile changes
  useEffect(() => {
    if (infoUser) {
      setUserName(infoUser.userName || "");
      setFirstName(infoUser.firstName || "");
    }
  }, [infoUser]);


  if (loading) return <p>Loading accounts...</p>;
  if (error) return <p>Error loading accounts: {error}</p>;

return (
<>
<Navigation/>


<main className="bg-dark main ">
{isEditingProfile ? (
          <EditUserInfo />
        ) : (
          <ProfileModif userName={userName} firstName={firstName} />
        )}
<section className="transactions-container">
        <h2 className="sr-only">Accounts</h2>
        {accountsData.map((accountData) => (
            <Account account={accountData} key={accountData.title} />
          ))}
      </section>
</main>
</>

)


}