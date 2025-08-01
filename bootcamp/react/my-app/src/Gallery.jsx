import Profile from "./Profile";

export default function Gallery() {
  const profile = {
    name: "Kathleen",
    age: 30,
    url: "https://i.imgur.com/MK3eW3As.jpg",
  };
  const profile2 = {
    name: "Albert",
    url: "https://i.imgur.com/3X9z5s7s.jpg",
  };

  const showTitle = true;
  const profileCount = 4;
  return (
    <div>
      {showTitle ? <h1>Gallery of Amazing Scientists</h1> : <h1>Scientist</h1>}
      {profileCount > 0 ? (
        <p>We have {profileCount} profiles</p>
      ) : (
        <p>No profiles available</p>
      )}
      <Profile size={1000} prof={profile} />
      <Profile size="medium" prof={profile2} />
      <Profile size="large" prof={profile} />
    </div>
  );
}
