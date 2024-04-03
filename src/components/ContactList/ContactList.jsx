import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ users, deleteUser }) => {
  return (
    <ul className={css.contacts_list}>
      <Contact users={users} deleteUser={deleteUser} />
    </ul>
  );
};

export default ContactList;
