
import './App.css';


function App() {
  return (
    <div>
    <div class="row">
    
    <div class="container">
      <div class="column">
        <div class="col align-self-center">
          <h1 class="text-center">Old Data</h1>
          {/* <!-- contact form --> */}
          <form>
           <div class="form-group">
             <textarea
             class="form-control"
             id="email_body"
             rows="10"
             ></textarea>
           </div>

            
          </form>
          <div>
    <button type="submit" class="btn btn-primary">
    View Differences
  </button>
  </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="column">
        <div class="col align-self-center">
          <h1 class="text-center">New Data</h1>
          {/* <!-- contact form --> */}
          <form>
           <div class="form-group">
             <textarea
             class="form-control"
             id="email_body"
             rows="10"
             ></textarea>
           </div>

            
          </form>
        </div>
      </div>
    </div>
    
  </div>
 
  </div>
  );
}
export default App;
