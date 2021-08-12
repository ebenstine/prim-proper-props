import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PartyLeader from '../PartyLeader/PartyLeader';
import GuestForm from '../GuestForm/GuestForm';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies'

function App() {
  let [guestList, setGuestList] = useState([]);


  //On load, get guests
  useEffect(() => {
    getGuests()
  }, [])

  const getGuests = () => {
    axios.get('/guests')
      .then(response => {
        setGuestList(response.data)

      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }


  const addGuest = (newGuest) => {
    console.log(newGuest)
    axios.post('/guests', newGuest)
      .then(response => {
        getGuests();
      })
      .catch(err => {
        alert('Error Adding Guest');
        console.log(err);
      })
  };


  return (
    <div className="App">
      <Header />
      <PartyLeader guestList={guestList}/>
      <GuestForm addGuest={addGuest} />
      <GuestList guestList={guestList} />
      <DinnerSupplies count={guestList.length} />
      <Footer />
    </div>
  );
}

export default App;
