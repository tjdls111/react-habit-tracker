import React, { Component } from "react";
import "../App.css";

class NavBar extends Component {
  render() {
    console.log("navbar");
    return (
      <div className="navbar">
        <h1>Habit Tracker βππ©βπ»</h1>
        <h3>{this.props.habits_cnt}κ°μ μ’μ μ΅κ΄ λ§λ€κΈ°λ₯Ό μ§ν μ€μ΄μμ.</h3>
      </div>
    );
  }
}

export default NavBar;
