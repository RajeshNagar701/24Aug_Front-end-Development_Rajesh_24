import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Main_contact() {
    return (
        <div>
            <Header title="Contact Page"/>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <Sidebar />
                    <div className="col-sm-8">
                        <h2>Contact</h2>
                        <h5>Contact Us</h5>
                        <form action="/action_page.php">
                            <div className="mb-3 mt-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                            </div>
                            <div className="form-check mb-3">
                                <label className="form-check-label">
                                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main_contact