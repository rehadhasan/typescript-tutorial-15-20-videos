import {UserContextProvider} from "./components/UserContext.tsx";
import User from "./components/User.tsx";
import {DomRef} from "./components/ref/DomRef.tsx";
import {MutableRef} from "./components/ref/MutableRef.tsx";
import {Counter} from "./components/class/Counter.tsx";
import {Private} from "./components/auth/Private.tsx";
import {Profile} from "./components/auth/Profile.tsx";
import List from "./components/generic/List.tsx";
import RandomNumber from "./components/restriction/RandomNumber.tsx";

const App = () => {
  return(
      <div>
          {/*Pass future value using useContext*/}
          <UserContextProvider>
              <User/>
          </UserContextProvider>

          {/*useRef hook*/}
          <DomRef/>
          <MutableRef/>

          {/*Class component*/}
          <Counter message='The count value is '/>

          {/*Component props*/}
          <Private isLoggedIn={true} component={Profile}/>

          {/*Generic props*/}
          {/*<List*/}
          {/*    items={['Batman', 'Superman', 'Wonder Women']}*/}
          {/*    onClick={(item)=>console.log(item)}*/}
          {/*/>*/}

          {/*<List*/}
          {/*    items={[1,2,3]}*/}
          {/*    onClick={(item)=>console.log(item)}*/}
          {/*/>*/}

          <List
              items={[
                  {
                      id: 1,
                      firstName: 'Rehad',
                      LastName: 'Hasan'
                  },
                  {
                      id: 2,
                      firstName: 'Rabbil',
                      LastName: 'Hasan'
                  },
                  {
                      id: 3,
                      firstName: 'Showrov',
                      LastName: 'Bowra'
                  }
              ]}
              onClick={(item)=>console.log(item)}
          />

          {/*Restricting props*/}
          <RandomNumber value={9} isNegative/>
      </div>
  )
}

export default App;