<p align="center">
  <img src="templates/images/GitCareers_v2.svg" alt="GitCareers Logo" width="400"/>
</p>
<h1 align="center">Find The Right Dev Job Using Your GitHub Username</h1>
<h2 align="center"><a href="https://git-careers.herokuapp.com/" title="Take a look for yourself!">git-careers.herokuapp.com</a></h2>
<h2 id="-about-"><strong>Overview</strong></h2>
<p>This responsive website was made with <strong>Javascript</strong> (<em>Express and Node</em>), <strong>HTML</strong>, <strong>CSS</strong>, and <strong>BootStrap</strong>. Deployed with <a href="https://id.heroku.com/login" title="Heroku Deployment">Heroku</a>.</p>
<p>APIs: <a href="https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api" title="GitHub REST API Docs">GitHub REST API</a> | <a href="https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api" title="Adzuna API Docs">Adzuna API</a> | <a href="https://www.twilio.com/sendgrid/email-api" title="SendGrid Email API Docs">Twilio's SendGrid Email API</a></p>
<p>Logos were designed with <a href="https://www.adobe.com/express/create/logo" title="Adobe Creative Cloud Express Logo Maker">Adobe Creative Cloud's Logo Maker</a>.</p>
<p>GitCareers allows users to:</p>
<blockquote>
<ul>
<li><em><strong>Search</strong></em> any GitHub user's <em>profile</em> and observe their <strong>name</strong>, <strong>top programming language</strong>, <strong>bio</strong>, and <strong>GitHub profile link</strong>.</li>
  <li><em><strong>Apply</strong></em> to <strong><em>full-time/part-time developer jobs</em> or internships</strong> based on the user's <strong>top-language</strong>.
<li><em><strong>Email</strong></em> themselves the jobs from all profiles they viewed (may or may not be their own profile) on the website.</li>
</ul>
</blockquote>
<h2 id="-creativity-">Collaborative Process</h2>
<p align="center">
  <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjvs6obbvrDdHPwskctKJJVmRWUqjsyqo_p-SYACDzeMdnXYhryTwAxVI4ubfJocShqrNT87IpMMdcSp3kZasGF0-ZHQxMVLt9TbkDK0xteFAI_KCm9TtADas2SXo4SYUHoGpTwKV9oYf_SKXJnNG_aiX45B_FK0hkT6oAMTLb8IfCPD35Ps8GOznz9=s2850" alt="Teamwork and Creativity Image"/>
</p>
<p>Using <a href="https://www.figma.com/" title="Figma Site">Figma</a>, the team orchestrated an <strong>online white-board session</strong> to organize everyone's thoughts into one common goal to prevent creative collisions later on. The <em>"How Might We" Wall</em> stirred conversations on potential methods to create page layouts, functionality, and styling, while the <em>Project Map</em> concentrated on specific components and page-flow (application links, and other user-specifications). It also served as various <em>tickets</em> for the team's developers to complete!</p>

<h3>Wireframes</h3>
<p align="center">
  <img src="https://blogger.googleusercontent.com/img/a/AVvXsEgvwlgbQUvZ2gdEJumBl-H3yWOKObtU7o4LO13nwAiCLos4wtt1czBCm_uzhIs6-cyyXn-S0z93wwy2sE5KfNpAuzChB29oto5hX-dQ5ZnPEJLkQ8QBk2e-pAV5UcmiPf08T9KGEY9n4p7PK8X9KfuNPSmgH9Q22qeu-TtOoRXvVeUtZv4IQlJ8z7NC=s2880" alt="Figma Wireframes"/>
</p>
<p>The team's designer made feasible wireframes to pull everything together into a final product. Responsive design was kept in mind throughout the process and tickets for various features were finalized. This helped everyone think about which CSS tools would compliment the design's colour pallet/theme. It also defined our <strong>agile development cycles</strong>.</p>
<h2 id="-lesson-">Lessons Learned</h2>
<p>Although the project was immensely structured, front to back, as the team progressed more and more by developing the features, everyone realized one thing. CSS is hard! 😆 Even after using BootStrap, making a <strong>responsive website (mobile friendly)</strong> wasn't easy. Simple tasks (aka centering divs) took some effort and delayed development. Furthermore, using <strong>ES6 syntax</strong> and organizing the project's file structure with <strong>object-oriented-programming</strong> in mind forced the team to follow best practices, which inevitably increased productivity. Something to keep in mind for future projects!</p>
<h2 id="-improvements-">Bugs & Potential Improvements</h2>
<ul>
  <li>The client-side Javascript does not protect against <strong>cross-site-scripting</strong> because <strong>template strings</strong> are used to create page content. If a user decides to make a username that is a script tag, GitHub's API will find the user and the script will execute. Fortunately, there is no database where that exploitation can have a permanent effect on the user experience. Using Javascript's DOM methods to manually create elements on the page will fix this issue.</li>
  <li>The emails are directed to gmail's <strong>spam folder</strong>. As a result, user's may think they never received the email, and may go back and spam the email api. Showing a warning message to inform users of this issue is a good idea.</li>
  <li>The codebase does not use enough semantic HTML tags. Using them would not only increase accessbility, but also readability as well.</li>
  <li>The "About Us" card headers are not fully spanning the length of the parent card. Perhaps changing the colour could make it look more streamline. CSS...😢</li>
</ul>
<h2 id="-Google Lighthouse-">Lighthouse Scores</h2>
<p>In case users are interested, here is GitCareer's Google Lighthouse evaluation on desktop. Feel free to check the score on mobile. It's around the same. Yep, semantic HTML would've increased the accessiblity score 😔.</p>
<p align="center">
  <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjPM21ct8E96pyjhTMBg3x5hhizFgh0CmEbfhLrW5zz9WI3I2sLdEkbBs2siTqBIpTtbjyXYI5wtP39S9ZBuzl7J43u_b8q8uJHe8q9UQs9aGO4RmePmcHHkUKm4LI6lOyNbN-BO647L4Ls1spkQ5WeWJeZOOmwiYF9Q44kHL7pmL4YJj_kBywUmVMF=s2880" alt="Google Lighthouse Score"/>
</p>
<h2 id="-getstarted-">Get Started</h2>
<p>To try this website on your machine, from the command-line, first <em>clone this repository</em>.</p>
<pre><code class="lang-bash">
<span class="hljs-keyword">#</span> <span class="hljs-comment">clone this repository</span>
<span class="hljs-keyword">$ git clone</span> https://github.com/StarbzYT/GitCareers.git
<span class="hljs-keyword">#</span> <span class="hljs-comment">go into the repository's server file</span>
<span class="hljs-keyword">$ cd</span> GitCareers/server
<span class="hljs-keyword">#</span> <span class="hljs-comment">remove current origin repository</span>
<span class="hljs-keyword">$ cd</span> git remote remove origin
</code></pre>
<p>Install dependencies using <em>NPM</em>:</p>
<pre><code class="lang-bash">
<span class="hljs-keyword">#</span> <span class="hljs-comment">install dependencies</span>
<span class="hljs-keyword">$ npm</span> install
<span class="hljs-keyword">#</span> <span class="hljs-comment">start development server</span>
<span class="hljs-keyword">$ node</span> index.js
</code></pre>
<p>Now, there should be a <em>development server running in your default browser</em></p>
<h2 id="-aboutus-">Meet The Team!</h2>
<p>To learn more about GitCareer's developers (who just made your life simpler), check out the <strong>About Us</strong> page on the website or click <a href="https://git-careers.herokuapp.com/templates/about.html" title="about us">here</a>.</p>
<h3>GitGood, GitCareers!</h3>

