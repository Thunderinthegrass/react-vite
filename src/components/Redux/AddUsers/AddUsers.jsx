import { useDispatch, useSelector } from 'react-redux';
import { addText, addUser } from '../../../state/usersSlice';
import styles from "./AddUsers.module.scss";
import ListItem from './ListItem';
// import { useState } from 'react';

const AddText = () => {

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // const [newUser, setNewUser] = useState('');

  const onAddText = (e) => {
    
    dispatch(addText(e.target.value));
  }

  const addNewUser = () => {
    if (users.text) {
      dispatch(addUser(users.text));
      dispatch(addText(''));
    }
  }


  const usersList = users.list.map(item => <ListItem key={item.id} name={item.name} id={item.id} />)

  return (
    <div>
      <h2>AddText</h2>
      <p>Здесь появится текст: {users.text}</p>
      <input type="text" onChange={onAddText} value={users.text} placeholder='Введите текст' />
      <button onClick={addNewUser}>Отправить</button>
      <div className={styles.listWrapper}>
        {usersList}
      </div>
    </div>
  )
}

export default AddText;