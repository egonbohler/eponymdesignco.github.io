import React from 'react'

const ContactForm = () => (
  <div className="contact-form">
    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" aria-hidden="true"/>
      <p class="hidden" aria-hidden="true">
       <label aria-hidden="true">Don’t fill this out if you're human: <input name="bot-field" aria-hidden="true"/></label>
      </p>
      <p>
      <label for="name">Hi! My name is</label>
       <input type="text" name="name" placeholder="your name is" required/>
      </p>
      <p>
       <label for="business-name">And I'm with</label>
       <input type="text" placeholder="company name" name="business-name" required/>
      </p>
      <p>
       <label for="message">I'm looking for a team to help me with</label>
       <textarea name="message" placeholder="short project description" required></textarea>
      </p>
      <p>
        <label for="budget">I have a budget of</label>
        <select name="budget" required>
          <option value="< $500">Less than $500</option>
          <option value="$500 - $1,000">$500 - $1,000</option>
          <option value="$1,000 - $2,000">$1,000 - $2,000</option>
          <option value="> $2,000">More than $2,000</option>
        </select>
      </p>
      <p>
       <label for="timeline">And a timeframe of</label>
       <input type="text" name="timeline" placeholder="end date or number of weeks" required></input>
      </p>
      <p>
       <label for="email">You can reach me at</label>
       <input type="email" name="email" placeholder="email" required/>
      </p>
      <p>
       <button type="submit" className="form-button" aria-label="Submit Form">Send</button>
      </p>
    </form>
  </div>
)
export default ContactForm;
