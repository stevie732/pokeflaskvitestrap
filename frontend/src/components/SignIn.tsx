
const SignIn = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4">Sign In</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-danger">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;