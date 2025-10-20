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
        <section className={`${theme === "dark" 
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" 
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800"} 
          min-h-screen flex justify-center items-center relative overflow-hidden py-16`}>
          
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className={`absolute top-20 left-10 w-72 h-72 ${theme === "dark" ? "bg-blue-600" : "bg-blue-400"} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}></div>
            <div className={`absolute bottom-20 right-10 w-96 h-96 ${theme === "dark" ? "bg-purple-600" : "bg-purple-400"} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000`}></div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 ${theme === "dark" ? "bg-pink-600" : "bg-pink-400"} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500`}></div>
          </div>

          <div className={`relative ${theme === "dark" 
            ? "bg-gray-800/50 backdrop-blur-xl border-gray-700/50" 
            : "bg-white/70 backdrop-blur-xl border-gray-200/50"} 
            rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-2xl mx-6 border`}>
            
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${theme === "dark" ? "from-white via-blue-200 to-purple-200" : "from-gray-800 via-blue-600 to-purple-600"} bg-clip-text text-transparent`}>
                Let's Connect
              </h2>
              <div className={`w-24 h-1 mx-auto rounded-full bg-gradient-to-r ${theme === "dark" ? "from-blue-500 to-purple-500" : "from-blue-600 to-purple-600"} mb-4`}></div>
              <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"} leading-relaxed`}>
                Have a question or want to work together? I'd love to hear from you!
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="group">
                  <label className={`block text-sm font-semibold mb-3 ${theme === "dark" ? "text-gray-200" : "text-gray-700"} group-focus-within:text-blue-500 transition-colors duration-200`}>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-4 rounded-xl border-2 ${theme === "dark" 
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700" 
                      : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:bg-white"} 
                      backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-lg`}
                    placeholder="Enter your name" 
                    required 
                    name="name" 
                  />
                </div>

                <div className="group">
                  <label className={`block text-sm font-semibold mb-3 ${theme === "dark" ? "text-gray-200" : "text-gray-700"} group-focus-within:text-blue-500 transition-colors duration-200`}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-4 rounded-xl border-2 ${theme === "dark" 
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700" 
                      : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:bg-white"} 
                      backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-lg`}
                    placeholder="Enter your email" 
                    required 
                    name="email" 
                  />
                </div>

                <div className="group">
                  <label className={`block text-sm font-semibold mb-3 ${theme === "dark" ? "text-gray-200" : "text-gray-700"} group-focus-within:text-blue-500 transition-colors duration-200`}>
                    Your Message
                  </label>
                  <textarea 
                    name="message"
                    rows="6"
                    className={`w-full px-4 py-4 rounded-xl border-2 ${theme === "dark" 
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:bg-gray-700" 
                      : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:bg-white"} 
                      backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-lg resize-none`}
                    placeholder="Tell me about your project or just say hello!" 
                    required
                  ></textarea>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] ${theme === "dark" 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl focus:shadow-xl" 
                    : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl focus:shadow-xl"} 
                    focus:outline-none focus:ring-4 focus:ring-blue-500/20 relative overflow-hidden group`}
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-300/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-gray-700/30" : "bg-gray-100/50"} backdrop-blur-sm`}>
                  <h4 className={`font-semibold mb-2 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
                    Response Time
                  </h4>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    Usually within 24 hours
                  </p>
                </div>
                <div className={`p-4 rounded-xl ${theme === "dark" ? "bg-gray-700/30" : "bg-gray-100/50"} backdrop-blur-sm`}>
                  <h4 className={`font-semibold mb-2 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}>
                    Let's Collaborate
                  </h4>
                  <p className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    Always open to new opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

export default Contact

