# CSC3100-Eval-Project
A repo to house all the code for the group eval project in CSC3100
Will be treated like his capstone class

Timeline
 - First two weeks login and registration due 24th.
 - Sometime a little bit more than halfway through will merge two groups together once frontend is done.
 - Then starts two week sprints until final grade due date.

Requirements
 - Allow for login and registration
 - Scale of 1-10
 - Private feedback - Sent only to Burchfield
 - Public feedback - Sent to both parties
 - Must store to database
 - SQL lite

More Requirements

Site-wide Experience 
- Static landing page 
- Informational page about the site
  
Instructor Experience 
- Register an account 
- Name (first and last) 
- Email Address (verify .edu, maybe?) 
- Sign into account 
- Email/Password 
- MFA (?, see additional ideas) 
- Password reset ability 
- Sign out 
- Experience 
- Create courses 
- Load students to courses or send code to allow students to ‘enroll’ in course 
- Create teams 
- Create reviews 
- CRUD questions for the review 
- Question types: Likert, multiple choice, or short answer 
- Schedule reviews 
- Review reviews 
- Private review 
- Public review 
- Reports 
- Student average (converted to 100pt scale) 
- Sortable 
- Class metrics

Student Experience 
- Register an account 
- Name 
- Email Address 
- Contact details 
- Mobile 
- Discord 
- Teams 
- Sign into account 
- Email/Password 
- MFA (?, see additional ideas) 
- Password reset ability 
- Sign out 
- Experience 
- Complete pending reviews 
- Reviews should have both public and private feedback options 
- Review score  
- Review public feedback from peers 
- Reports 
- Combined feedback 
- Overall scores


Constraints 
- Email addresses must be valid 
- Passwords must be complex NIST compliance 
- Data must be stored in relational database 
- Must use technology covered in class 
- HTML 
- CSS 
- CSS libraries are encouraged including Bootstrap or Tailwind 
- Javascript 
- jQuery is okay, but not preferred 
- Frontend frameworks are allowed but only if we get to that portion of the material in class 
- Backend must use nodeJS and express 
- Code should be organized similar to the charts example 
- Must be a single page application (SPA) 
- Must include manifest for ‘Add to Home Screen’ capability 
- Must use Github repository w/ branching 
- Must meet accessibility standards 
- Passwords can NOT be stored in plain text in database 
- Secure backend routing 
- Must be responsively designed to look appropriate on mobile or desktop devices while being mobile first. 


Additional ideas 
- Host the application on GCP 
- Custom URL or DuckDNS URL 
- HTTPS 
- CI/CD Pipelines 
- Automated testing with Github Actions 
- Webhook integration for automatic deployments  
- Multi-factor authentication 
- Using a TOTP or email or SMS 
- Passport.js may help 
- Integrate with MariaDB or Postgres 
- Use of JS libraries to improve professionalism of application 
- Include an automated application walk through (IntroJS) 


Prohibitions 
- Although Generative AI is allowed (and encouraged), you may NOT use it to develop a full solution. 
- Existing content management systems (Wordpress/Drupal/Joomla/etc) are strongly prohibited


Useful Tools and Suggestions from the client
- https://introjs.com/
 - Could use 'login with google/apple' option
 - Email / SMS sign on
 - User Info includes all relevant connections, can be both insrtructor and student
 - Would 'hate' to have to sign in more than one time
 - Would 'love' to see all users below a certain thershold, ex: all users below 6 score
 - Can have a check for email addresses to require '.edu' *not required*
 - Have a worklist to send out the forms every two weeks (or whatever the instructor wants to set it to)
 - Student vs Instructor view
 - Make sure to hash the passwords
 - Encourages extra features to secure the 'A' grade
 - If we don't get to it in class you can't use it
