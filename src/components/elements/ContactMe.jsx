import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

const ContactMe = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex flex-col gap-6 p-6 shadow rounded-2xl bg-base-200 text-tertiary">
          <h1 className="text-3xl font-bold">REACH ME OUT</h1>
          <p>Jakarta, Indonesia</p>
          <h1>
            <FontAwesomeIcon icon={faEnvelope} /> Rmaulana12321@gmail.com
          </h1>
          <div className="flex justify-center gap-2 ">
            <Link
              to="/"
              className="btn"
            >
              LinkedIn
            </Link>
            <Link
              to="https://github.com/rizkimaula"
              target="_blank"
              className="btn"
            >
              Github
            </Link>
          </div>
        </div>
        <div className="p-10 flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-4">
            {' '}
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Your Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="example@site.com"
              />
            </label>
          </div>
          <textarea
            placeholder="Write Message Here"
            className="textarea textarea-bordered textarea-lg w-full"
          ></textarea>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
