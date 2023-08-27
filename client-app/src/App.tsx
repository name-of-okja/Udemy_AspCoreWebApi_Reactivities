import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Button, Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(res => {
      setActivities(res.data);
    })
  },[]);

  return (
    <div>
        <Header as='h2' icon='users' content='Reactivities'/>
        <List>
          {activities?.map((item:any)=> (
              <List.Item key={item.id}>
                {item.title}
              </List.Item>
            ))}
        </List>
        <Button content="Test"/>
    </div>
  );
}

export default App;
