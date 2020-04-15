import React from 'react';
import Sky from './images/sky.png';
import Sam from './images/sam.png';
import Love from './images/love.png';
import Toni from './images/toni.png';

function home() {
  return (
    <>
      <div className="mainImageBG" style={ { backgroundImage: `url(${Sky})`, minHeight: '50%' } }> 
        <div className="ptext">
          <span className="border">
            Sam's Poem Generator
          </span>
        </div>
      </div>

      <section className="section section-light">
        <div className="textBox">
          <p>
            <span>This is a tool that you can use to generate ideas for poetry when you are stuck.</span>
          </p>
        </div>
      </section>

      <div className="image3" id="section2" style={ { backgroundImage: `url(${Love})`, minHeight: '50%' }}>
        <div className='ptext'>
          <span className="border trans">Enter poem:</span>
        </div>
      </div>  
      
      <section className="section section-light" id="section1">
        <form onsubmit="selectText()">
            <textarea id="userInputText" cols={90} rows={20} placeholder="Select 'Your Text' in drop down menu. Then, enter your text here"></textarea>
        </form>

        {/* Add some prestored text by a specific poet/artist that appears a drop down: */}
        <select id="textSelect" onchange="disableTextArea()">
          <option value="Your Text">Your Text</option>
          <option value="Toni Morrison">Toni Morrison</option>
          <option value="Maya Angelou">Maya Angelou</option>
          <option value="rupi kaur">rupi kaur</option>
        </select>
        {/* the textbox only appears if the user with diabaled proprty 
        The submit button stores the text in text varible for the markov chain to work:  */}
        <button className="button" type="submit" onClick="selectText()"><span>Submit</span></button>
        {/* This rest buton clears the text area resets text varaibale to empty strings */}
        <button className="button" type="submit" onClick="resetText()"><span>Reset</span></button>
      </section>

      <div className="image2" id="section2" style={ { backgroundImage: `url(${Sam})`, minHeight: '50%' }} >
        <div className='ptext'>
          <span className="border trans">New Poem:</span>
        </div>
      </div>  

      <section className="section section-dark">
        <div className='textBox'>
          <p id="newPoem"></p>
        </div>
      </section>

      <div className="image4" id="section2" style={ { backgroundImage: `url(${Toni})`, minHeight: '80%' }}>
          <div className='ptext'>
          </div>
      </div>  
    </>
  )
}

export default home
