
import './App.css';

function App() {
  return (
   <div className='App'>
    <div className='logo-box'>
      <img src="./logo.png" alt="logo" className='logo' />
      <h2>Sign in to Twitter</h2>
      <button>
      <img src="./google.png" alt="logo" />
      sign in with Google
      </button>
      <button>
      <img src="./apple.png" alt="logo"/>
      sign in with Google
      </button>
      <hr></hr>
      <span>or</span>
      <form>
      <input type='text' placeholder='phone email or username' />
      <button>Next</button>
      </form>

      <button> Forget Password</button>
       <p>Don't Have an Account <a>Sign up</a>
       </p>      
    </div>

   </div>

  );
}

export default App;
