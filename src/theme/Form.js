import React from 'react'

export default (props) => {
	return (
        <form>
            <div className="col-sm-6">
                <label>Your Name:</label>
                <input type="text" name="name" placeholder="Type Name Here" />
            </div>
            <div className="col-sm-6">
                <label>Email Address:</label>
                <input type="email" name="email" placeholder="Email Address" />
            </div>
            <div className="col-sm-12">
                <label>Street Address:</label>
                <input type="text" name="address" placeholder="Street Address" />
                <input type="text" name="suburb" placeholder="Suburb"/ >
                <input type="text" name="state" placeholder="State" />
            </div>
            <div className="col-sm-12">
                <label>Message:</label>
                <textarea name="text" placeholder="Message" rows="4"></textarea>
            </div>
            <div className="col-sm-12">
                <div className="input-checkbox">
                    <div className="inner"></div>
                    <input type="checkbox" name="agree" />
                </div>
                <span>I have read and agree to the <a href="#">terms and conditions</a></span>
            </div>
            <div className="col-sm-4">
                <div className="input-radio">
                    <label>Goji Berries</label>
                    <div className="inner"></div>
                    <input type="radio" name="radio" value="radio1" />
                </div>
            </div>
            <div className="col-sm-4">
                <div className="input-radio">
                    <label>Fennel</label>
                    <div className="inner"></div>
                    <input type="radio" name="radio" value="radio1" />
                </div>
            </div>
            <div className="col-sm-4">
                <div className="input-radio">
                    <label>Flaxseed</label>
                    <div className="inner"></div>
                    <input type="radio" name="radio" value="radio1" />
                </div>
            </div>
            <div className="col-sm-12">
                <div className="input-select">
                    <select>
                        <option selected="" value="Default">Select An Option</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Larger">Large</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-12">
                <button type="submit" className="btn btn--primary">Send Form</button>
            </div>
        </form>
	)
}