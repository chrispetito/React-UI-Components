import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <div className='footer'>
        <a href='#'><i id='comment'className="far fa-comment"></i></a>
        <a href='#'><i id='retweet'class="fas fa-retweet"></i></a>
        <p class = 'retweetCount'>6</p>
        <a href='#'><i id ='heart'class="far fa-heart"></i></a>
        <p class = 'likeCount'>4</p>
        <a href='#'><i id ='mail'class="far fa-envelope"></i></a>
        </div>
    )
}

export default Footer;

// let retweetButton = document.querySelectorAll(".fas fa-retweet");

// let retweetNumber = 0;

// // function addRetweet() {
// //     retweetNumber ++;
// // 

// // retweetButton.addEventListener('click', addRetweet());

// let retweetCount = document.querySelectorAll('.footer').
// retweetCount.innerHTML = retweetNumber;