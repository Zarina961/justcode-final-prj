import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <>
            <div className='nav-list'>
                <div className='navigation'>
                    <div className='navigation-main-img'>
                        <img src="../../../public/farmer.png" alt="" />
                    </div>
                    <div className='navigation-list'>
                        <tbody>
                            <table>
                                <tr>
                                    <td><img src="../../../public/cloud.svg" alt="" /></td>
                                    <Link className='link' to={'/weather'}><td>Weather</td></Link>
                                </tr>
                                <tr>
                                    <td><img src="../../../public/group.svg" alt="" /></td>
                                    <Link className='link' to={'/chart'}><td>Insight</td></Link>
                                </tr>
                                <tr>
                                    <td><img src="../../../public/table.svg" alt="" /></td>
                                    <Link className='link'to={'/'}><td>News</td></Link>
                                </tr>
                                <tr>
                                    <td><img src="../../../public/vector.svg" alt="" /></td>
                                    <Link className='link' to={'/todolist'}><td>To-do-List</td></Link>
                                </tr>
                            </table>
                        </tbody>
                    </div>
                </div>
                <Outlet/>
            </div>
        </>
    );
}

export default Navigation;