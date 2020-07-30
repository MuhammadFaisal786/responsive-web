import React, {useState} from 'react'

const Contact = () => {
const [data, setData] = useState({
  fullname: '',
  phone: '',
  email: '',
  message: '',
});

const InputEvent = (event) => {
  const { name, value } = event.target;

  setData((preVal) => {
    return {
      ...preVal,
      [name] : value,
    }
  })
};
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, here is what I want to say ${data.message}`
    )
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>

              <div className="form-group">
                <label for="exampleFormControlInput1">FullName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input type="number" className="form-control" id="exa,mpleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;