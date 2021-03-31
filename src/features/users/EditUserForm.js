import { colors } from "../../ui";
import styled from "@emotion/styled";
import uploadPhotoIcon from "../../assets/Group_78.svg";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { fetchProfile, FetchUpdateProfile } from "./usersSlice";
import Button from "../../UI/Button";

export default function EditUserForm({ id }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const profile = useSelector((state) => state.users.profile);
  const status = useSelector((state) => state.users.status);

  if (status === "idle") {
    dispatch(fetchProfile(token));
  }

  const [form, setForm] = useState({
    name: profile.name,
    birth_date: profile.birth_date,
    avatar: profile.avatar_url,
  });

  

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    let fd = new FormData();
    for (let key in form) {
      fd.append(key, form[key]);
      
    }
    // const newDate = form.birth_date.split(/-|\/|_/).reverse().join("-")
    // console.log(form.birth_date)
    // fd.set("birth_date", newDate)
   dispatch(FetchUpdateProfile({fd, token}));
 
  };

  const { name, birth_date, avatar } = form;
  return (
    <ProfileForm onSubmit={handleProfileSubmit} id={id} >
      <Header>
        <StyledDiv isFile>
          <label htmlFor="avatar">
            <img alt="upload icon" src={uploadPhotoIcon} />
          </label>
          <input
            id="avatar"
            accept="image/*"
            name="avatar"
            type="file"
            form="profile-form"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
       
        </StyledDiv>
        <Titles>
          <h5>Edit Your Profile</h5>
          <p>You can edit your public name or your image in Your Profile.</p>
        </Titles>
      </Header>
      <div>
        <UserInput>
          <label>Username</label>
          <input
            value={name}
            name="name"
            placeholder="Write your name"
            type="text"
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
        </UserInput>
        <UserInput>
          <label>Birth date</label>
          <input
            min="1900-01-01"
            max="2010-12-31"
            type="date"
            name="birth_date"
            value={birth_date}
            onChange={(e) =>
              setForm({ ...form, [e.target.name]: e.target.value })
            }
          />
        </UserInput>
      </div>
     
      <Button type="submit" form="profile-form">
        Save
      </Button>
    </ProfileForm>
  );
}
const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 25px;
  & > a {
    display: flex;
    text-decoration: none;
    font-size: 14px;
    line-height: 108.1%;
    letter-spacing: 0.05em;
    color: ${colors.dark0};
    justify-content: flex-end;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  gap: 20px;
`;
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > h5 {
    font-size: 26px;
    line-height: 29px;
    color: ${colors.dark0};
  }
  & > p {
    font-size: 16px;
    line-height: 15px;
    color: ${colors.gray};
    text-align: center;
  }
`;
const UserInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${colors.gray};
  & > label {
    font-size: 16px;
    line-height: 29px;
    color: ${colors.gray};
    font-family: "Abel", sans-serif;
  }
  & > input {
    align-items: flex-start;
    padding: 8px 0px;
    background: ${colors.white};
    color: ${colors.dark0};
    border: none;
    box-sizing: border-box;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${colors.gray};
    }
  }
`;

const StyledDiv = styled.div`
  border-bottom: ${(props) => (props.isFile ? "none" : "1px solid #333333")};
  padding: 2px 0;
  display: flex;
  flex-direction: column;

  justify-content: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: palegoldenrod;
  label {
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #b8b8bb;
    display: flex;
    justify-content: center;
    img {
      cursor: pointer;
    }
  }
  input {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: #333333;
    border: none;
    background-color: transparent;
    &[type="file"] {
      display: ${(props) => (props.isFile ? "none" : "initial")};
    }
    &:focus {
      outline: none;
    }
  }
  p {
    color: #b8b8bb;
    text-align: center;
  }
`;
