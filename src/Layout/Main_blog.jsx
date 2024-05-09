import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

function Main_blog() {
    return (
        <div>
            <Header title="Blog Page"/>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <Sidebar />
                    <div className="col-sm-8">
                        <h2>Blog</h2>
                        <h5>Blog View</h5>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main_blog