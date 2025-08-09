import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/v2/D5603AQHKY7O5Ok84Gw/profile-displayphoto-crop_800_800/B56ZhkLqw_HMAI-/0/1754027438318?e=1756944000&v=beta&t=0LZlz5I1dLqdW3fIR6cuH5ib0b5ePA0pZJpmUyqh0KM" />

      {contacts.map((contact, index) => (
        <Card
          key={index}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
