export const Contact = () => {
const handleFormSubmit=(e)=>{
e.preventDefault(); // Prevents the form from reloading the page
const formData = new FormData(e.target); // Gets form data
//console.log(formData.entries());
const formInputData = Object.fromEntries(formData.entries());
console.log(formInputData);
}
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                <form onSubmit={handleFormSubmit}>
                    <input type="text" required autoComplete="false" placeholder="Enter your name" name="username" />
                    <input type="email" required autoComplete="false" placeholder="Enter Email" name="email" />
                     <textarea required autoComplete="false" placeholder="Enter your message" name="message"
                     rows="8" ></textarea>
                    <button type="submit" value="send">send</button>
                </form>
            </div>

        </section>
    );
};






// export const Contact = () => {
//     const handleFormSubmit = (e) => {
//     e.preventDefault(); // Prevents the form from reloading the page
//      const formData = new FormData(e.target); // Gets form data
//       const formInputData = Object.fromEntries(formData.entries()); // Converts FormData to an object
//       console.log(formInputData); // Logs the object in the console
//     };
  
//     return (
//       <section className="section-contact">
//         <h2 className="container-title">Contact Us</h2>
  
//         <div className="contact-wrapper container">
//           <form onSubmit={handleFormSubmit}>
//             <input
//               type="text"
//               required
//               autoComplete="off" // Use "off" instead of "false"
//               placeholder="Enter your name"
//               name="username"
//             />
//             <input
//               type="email" // Changed input type to "email" for validation
//               required
//               autoComplete="off"
//               placeholder="Enter Email"
//               name="email"
//             />
//             <textarea
//               required
//               autoComplete="off"
//               placeholder="Enter your message"
//               name="message"
//               rows="8"
//             ></textarea>
//             <button type="submit" value="send">
//               Send
//             </button>
//           </form>
//         </div>
//       </section>
//     );
//   };