import React from "react";
import Swal from "sweetalert2";

const Contact = ({theme}) => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a2d635f8-180a-4099-bfe2-d90200be721f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
          });
        }
      };
    return (
        
        <section className = {`${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800"} flex justify-center min-h-[80vh]`}>
            <div className = {`${theme === "dark" ? "bg-gray-700" : "bg-white"} rounded-2xl shadow-lg p-10 w-full max-w-2xl m-10`}>
                <form onSubmit={onSubmit} className = "w-full max-w-2xl p-10 space-y-6">
                    <h2 className = "text-center text-4xl font-extrabold">Contact Form</h2>
                    <div className = "flex flex-col space-y-2">
                        <label>Full Name</label>
                        <input type="text" className ='bg-white text-black p-2' placeholder ='Enter your name' required name="name" />
                    </div>
                    <div className = "flex flex-col space-y-2">
                        <label>Email Address</label>
                        <input type="email" className ='bg-white text-black p-2' placeholder ='Enter your email' required name="email" />
                    </div>
                    <div className = "flex flex-col space-y-2">
                        <label>Your Message</label>
                        <textarea name="message"className ='bg-white text-black p-2 pb-15' placeholder = 'Enter your message' required></textarea>
                    </div>
                    <div className ="text-center ">
                        <button className = "border rounded-full p-2 cursor-pointer hover:bg-gray-200 hover:text-gray-800 transition-colors duration-300" type = 'submit'>Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        
     )
    };

export default Contact

