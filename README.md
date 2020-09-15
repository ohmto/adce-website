<!-- ![ADCE Logo](https://adce.ae/en/Images/logo_tcm34-98878.jpg "ADCE Logo")

# ADCE Styles ~~and Scripts~~ repo
<p>This is the styles automation generator for Abu Dhabi Commercial Properties Revamped Website.<br/>
These files need to be downloaded on you local machine.</p>


## Requirements
<ul>
 <li>Node.js (i was using node v8.9.0), you can <a href="https://nodejs.org/en/download/">download Nodejs</a></li>
 <li>Terminal (you will use terminal to handle js packages by <a href="https://npmjs.com/">npm</a>)
  <p> you will need to intiate npm package in website folder, lets say you will create a folder called "ADCE-website", and you will paste the repo content in it so we can start the below steps.</p>
<pre>
 <code>
  npm install
  npm init
  npm start
 </code>
</pre>
 </li>
 </ul>

### Dependencies:
<pre><code>npm install bootstrap-sass d3 flickity jquery owl.carousel</code></pre>

#### Dev.Dependencies:
<pre>
<code>
 npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-rtlcss del
</code>
</pre>



### Generating CSS files
<p>For developing and testing, you can use the Watch task in gulp as following</p>
<pre>
  <code>
   gulp watch
  </code>
</pre>
<p>For Production and exporting, you can use the Watch task in gulp as following</p>
<pre>
  <code>
   gulp build
  </code>
</pre>

After running the gulp tasks you will be generated the following css files to take them to tradion CMS
 <pre>
  <code>
   styles/toolkit-en.css
   styles/toolkit-ar.css
  </code>
</pre>
 -->
