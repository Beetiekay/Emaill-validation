import "../Email/Email.css";


const Email = () =>{
    return(
     <>
     <section className="body">
        <div className="container">
            <label For="" className="email">Email validation</label>

           <div className="form">
               <input type="email" name="email" placeholder="Enter Email"/>
               <span></span>
           </div>
            <button type="submit" className="btn">Submit</button>
        </div>
        
     </section>
     </>
    )
};

export default Email;