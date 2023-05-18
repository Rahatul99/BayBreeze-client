import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1464589578935-4a23731e7292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")`}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content w-[100%] flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-[40%] shadow-2xl glass">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Registration</h1>
            <form onSubmit={() => {}}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-block" type="submit" value="Register" />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an account?{' '}
              <Link className="text-violet-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
