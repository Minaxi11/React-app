import Basic from './Basic';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicFunction from './BasicFunction';
import Style from './Style';
import Condition from './Condition';
import Form from './Form';
import SubmitForm from './SubmitForm';
import List from './List';
import UseState from './UseState';
import Ref from './Ref';
import LifeCycle from './LifeCycle';
function App() {
  return (
    <div className="App">
       <Basic className="Basic-heading" text="Basic"/>
       <Ref />
       {/* <BasicFunction className="Basic-heading" personDetails={{fname:'Minakshi',email:'minakshiwani11@gmail.com'}}/>
       <Style text="Style Function"data={'Style Data'}/> * */}

       {/* <Condition /> */}
       {/* <Form /> */}
       <SubmitForm />
       <List />
       <UseState />
       <LifeCycle />
    </div>
  );
}
export default App;
