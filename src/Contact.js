import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCaptchaV2 from "react-google-recaptcha";

const defaultForm = {
  from_name: "default",
  preferred_name: "",
  email_address: "",
  github_url: "",
  message: "",
  token: "",
};

function Contact({ title }) {
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading]=useState(false)
  const [feedback, setFeedback]=useState("none")


  const formHtmlRef = useRef();
  const recaptchaRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };


  const sendEmail = (e) => {
    setLoading(true)
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    let templateParams = {
      ...form,
      "g-recaptcha-response": recaptchaValue,
    };
   
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setLoading(false)
          setFeedback("successful")
          console.log(result.text);
        },
        (error) => {
          setLoading(false)
          setFeedback("failed")
          console.log(error.text);
        }
      );
  };

  // Adds the token to the form object
  const handleToken = (token) => {
    console.log("Captcha token:", token);
    setForm((currentForm) => {
      return { ...currentForm, token };
    });
  };

  // Removes the token from the from object
  const handleExpire = () => {
    setForm((currentForm) => {
      return { ...currentForm, token: null };
    });
  };

  return (
    <div className="py-12 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-stone-600 font-semibold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Let's get in touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            If you're interested in collaborating a product together or help
            designing any of your tools or technologies, please reach out to me.
          </p>
        </div>
      </div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <form
              ref={formHtmlRef}
              onSubmit={sendEmail}
              action="?"
              method="POST"
            >
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  {/* Name */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="preferred_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your Preferred Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="preferred_name"
                          id="preferred_name"
                          className="focus:ring-stone-500 focus:border-stone-500 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 px-2"
                          placeholder="Your name"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Github */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="github_url"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your GitHub URL
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          http://
                        </span>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="github_url"
                          id="github_url"
                          className="focus:ring-stone-500 focus:border-stone-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border border-gray-300 px-2"
                          placeholder="github.com/example"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your Email Address
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          onChange={handleChange}
                          type="text"
                          name="email_address"
                          id="email_address"
                          className="focus:ring-stone-500 focus:border-stone-500 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 px-2"
                          placeholder="example@email.com"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        onChange={handleChange}
                        id="message"
                        name="message"
                        rows="3"
                        className="shadow-sm focus:ring-stone-500 focus:border-stone-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-2 py-2"
                        placeholder="Looking for scaling up new initiatives within Microservices and AWS development stacks..."
                      ></textarea>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your project.
                    </p>
                  </div>
                </div>

                <ReCaptchaV2
                  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                  onChange={handleToken}
                />

                <div className="px-4 py-3 bg-stone-50 text-right sm:px-6">
                  <button
                    type="submit"
                   
                    className={`${loading? "disabled:opacity-50 disabled": ""} inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-stone-600 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-200`}
                  >
                    {loading? "...":"Send message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
