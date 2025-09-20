import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "e9d876ca-05a9-4ab8-8997-73e0b6877a1e"); // ✅ your own key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms response:", data); // 🔍 log full response

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
        setTimeout(() => {
          setResult("");
        }, 2000);
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-4 sm:px-[8%] lg:px-[12%] py-16 scroll-mt-20 bg-background"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo text-muted-foreground">
        Connect With Me
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-foreground">
        Get in touch
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base text-muted-foreground">
        I am a MERN stack developer from India. I have completed multiple
        projects and specialize in creating beautiful, responsive websites with
        modern features and clean UI/UX designs. My services include full-stack
        web development using React, Node.js, MongoDB, and Express.js, as well
        as building custom APIs, integrating Firebase, deploying applications,
        and designing user-friendly interfaces using Tailwind CSS and Figma.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="w-full p-3 outline-none border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <input
            className="w-full p-3 outline-none border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        <textarea
          className="w-full min-h-[150px] p-3 outline-none border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground"
          rows="6"
          placeholder="Enter your message"
          name="message"
          required
        ></textarea>

        <div className="flex flex-col items-center gap-4 mt-8">
          <button
            className="py-3 px-8 flex items-center gap-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all duration-300"
            type="submit"
          >
            Submit
            <Image
              src={assets.right_arrow_white}
              alt=""
              className="w-4 h-4"
            />
          </button>
          <p className="text-center text-sm font-medium text-primary">
            {result}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
