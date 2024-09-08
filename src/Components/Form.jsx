import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChangeName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (user.name.trim().length > 5 && regexEmail.test(user.email)) {
      setShow(true);
      setError(false);
      console.log(user);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          onChange={handleChangeName}
        />
        <input type="text" placeholder="Email" onChange={handleChangeEmail} />
        <button>Send</button>
      </form>
      {error ? (
        <p className="errorMessage centered">
          ⚠ Por favor verifique su información nuevamente
        </p>
      ) : (
        false
      )}
      {show ? (
        <p className="centered">
          Gracias {user.name}, te contactaremos cuando antes vía mail
        </p>
      ) : (
        false
      )}
    </div>
  );
};

export default Form;
