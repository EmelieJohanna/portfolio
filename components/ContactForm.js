import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data", formData);
    alert("Thank you for your message!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-56  border-2 p-4 ">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-border p-2 text-slate-800"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-border p-2 text-slate-800"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-border p-2 text-slate-800"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className=" px-4 border border-transparent shadow-md  rounded-md bg-indigo-500"
        >
          Send
        </button>
      </div>
    </form>
  );
}
