# &TECH Website

Website for &TECH: company description, outline of programs, etc. MERN Web App with front-end based on [Material Kit React](https://demos.creative-tim.com/material-kit-react)

## Getting Started
To run the website locally on your machine, you would typically need to set up both the backend and the frontend, since this is a full-stack app. However, we are currently mainly developing only the frontend, so just setting this part of the website up is sufficient for contributions now. Setup for the backend to come in the future.

1. In the top right corner of this page, click on the **Code** button in green. Make sure the HTTPS option is selected.
2. Copy the URL provided. It should look something like https://github.com/andtechnology/andtech-website.git
3. In your terminal, navigate to the location on your machine that you want to place this code in.
4. Run ```git clone https://github.com/andtechnology/andtech-website.git```
5. ```cd andtech-website``` to go into the folder you just cloned.
6. ```cd clients``` to go into the **clients** folder, where the frontend is being developed.
7. ```npm install``` to install the frontend dependencies.
8. ```npm start``` to start the frontend of the website.
9. Go to ```http://localhost:3000/``` in your browser to see the website running.

## Contributing
To contribute to the &TECH website, we ask that you create your own branch, make the changes, and then submit a pull request for the team to review.

1. In your terminal, navigate to the main directory of the project, **andtech-website**. You should be on the **main** branch.
2. ```git pull``` to pull down the most updated version of **main** before you branch off of it.
3. ```git checkout -b [name-of-your-branch]```, replacing [name-of-your-branch] to one of the below, to create your own local branch of andtech-website, off of **main**.
> * If you're working on a specific [issue](https://github.com/andtechnology/andtech-website/issues), please name your branch issueID-brief-description-of-task. e.g. 4-add-contributing-guide
> * If you just want to test and play around with the site, feel free to create a personal test branch named yourGitHubUsername-test. e.g. kdreyes-test
4. You can now make the necessary edits to the code in your local branch. Check out the [&TECH GitHub Tutorial](https://github.com/andtechnology/test-me) to learn or refresh on committing changes.
5. If this is your first ```push``` to the remote andtech-website repo, run ```git push -u origin [your-branch-goes-here]```. If this is not your first push to the remote branch, you can omit the ```-u``` and just run ```git push origin [your-branch-goes-here]```.
6. When you're good to go on your contributions and want to submit them for review, submit a pull request [here](https://github.com/andtechnology/andtech-website/pulls).
7. Please request a review of your pull request from Katrina or Chris (or both). Feel free to request a review from others as well. If you're unsure how to do this, check out [this doc](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review).
8. Once everything is tested and good to go, someone will **merge** your branch into **main** and you can delete your branch, if you'd like.
9. Yay! Thanks for contributing to the &TECH website!

# Code Structure [WIP]
The following sections are general documentation of our website structure and the purpose of certain files that render the site. The best way to learn all the detail, though, is to just play around with the code!

### ```andtech-website/client/src/views```
This folder contains all the different pages that make up the website.

### ```andtech-website/client/src/components```
This folder contains code snippets that are re-usable from page to page. In here, you can find the **Header** (which is used in every page), or things like a **Grid** (which you can include throughout the code in multiple pages). For in-depth documentation on the components, visit the [Material Kit UI Documentation](https://demos.creative-tim.com/material-kit/docs/2.0/getting-started/introduction.html).

### ```andtech-website/client/src/assets/img```
This folder contains all the images used in the website. Anytime you need to use an image on the site, drop the image file in this folder (or create a subfolder), and reference it from the place in the code you'd like to include it in.

### ```andtech-website/client/src/assets/jss/material-kit-react/views```
This folder contains the css code for each of the pages. If you'd like to change how a whole page looks, navigate to its file in this folder and make the necessary edits.

## Home Page
### ```andtech-website/client/src/views/LandingPage```
This folder contains all the files needed to render the home page of the website.

### ```andtech-website/client/src/views/LandingPage/LandingPage.js```
This file contains the code to actually display the home page. It renders the header, title, subtitle, and background image. It then includes various sections that make up the rest of the page.

We do this so that we can compartmentalize parts of the website as much as possible, in case we want to make specific changes just to one portion of the site. Plus, it helps *immensely* with organization.

### ```andtech-website/client/src/views/LandingPage/Sections```
This folder contains all the files needed to render the sections of the home page of the website.

## Hackathon Page
### ```andtech-website/client/src/views/HackathonPage```
This folder contains all the files needed to render the Hack&TECH 2021 page.

### ```andtech-website/client/src/views/HackathonPage/HackathonPage.js```
This file contains the code to actually display the Hack&TECH page. It renders the header, title, and background image. It then includes various sections that make up the rest of the page.

### ```andtech-website/client/src/views/HackathonPage/Sections```
This folder contains all the files needed to render the sections of the Hack&TECH page of the website. The registration section will need to be developed as we get closer to April 2021.

## About Page
### ```andtech-website/client/src/views/AboutPage```
This folder contains all the files needed to render the About page.

### ```andtech-website/client/src/views/AboutPage/AboutPage.js```
This file contains the code to actually display the About page. It renders the header, title, and background image. It then includes various sections that make up the rest of the page.

### ```andtech-website/client/src/views/HackathonPage/Sections```
This folder contains all the files needed to render the sections of the About page of the website.