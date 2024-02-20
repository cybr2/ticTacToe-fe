# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

### Introduction

This project serves as a comprehensive demonstration of ability to conceive, design, and implement a full-stack application. By developing a simple yet engaging tic-tac-toe game, I aimed to showcase proficiency across frontend and backend technologies while adhering practices in software development.

### Objectives

The primary objective of this endeavor was twofold: to showcase adeptness in crafting an interactive user experience through frontend development and to demonstrate competency in architecting backend systems to support seamless gameplay functionality.

### Technologies Employed

The frontend of the application was constructed using React framework employed to facilitate efficient UI development and enhance user interactivity. On the backend, Node.js in conjunction with Express.js provided a robust foundation for handling server-side logic and facilitating communication with the client.

### Core Functionality

The tic-tac-toe game encompasses essential features such as player turn management, move validation to ensure game integrity, and automated determination of game outcomes, whether a win, loss, or draw. The frontend communicates asynchronously with the backend via RESTful API endpoints, enabling real-time updates and ensuring a seamless user experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* REACT
* EXPRESS
* MONGODB
* NODE JS
* PRISMA
* TAILWIND
* FRAMER MOTION
* SHADCN
* ZUSTAND

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<img src="./public/tictactoe-landing-page.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/>
<img src="./public/tictactoe-newgame -modal.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/>
<img src="./public/tictactoe-history-page.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/>
<img src="./public/tictactoe-about-page.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/>
<img src="./public/tictactoe-gameboard-page.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/>
<img src="./public/tictactoe-gameover-modal.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/> 


Creating a Tic-Tac-Toe game using React.js, Framer Motion, and Tailwind CSS for the frontend, and Node.js with Express, Prisma, and MongoDB for the backend involves integrating these technologies to deliver a seamless and visually appealing user experience

### Frontend (React.js, Framer Motion, Tailwind CSS, Zustand , tailwind merge ,):

* Utilize React's component-based architecture to create reusable UI components for the game board, cells, and user interface elements.
*  Implement smooth animations for transitions, user interactions, and game events to enhance the visual appeal and user engagement.
*  Apply responsive and customizable styles to components using Tailwind's utility-first CSS framework, ensuring a consistent and visually appealing design across different screen sizes.

### Backend (Node.js, Express, Prisma, MongoDB):

* Build a RESTful API server using Node.js and Express to handle HTTP requests and responses, including game state updates, user authentication, and data retrieval.

* Integrate Prisma as an ORM (Object-Relational Mapping) tool to interact with the MongoDB database, simplifying database operations such as CRUD (Create, Read, Update, Delete) operations and data modeling.

* Use MongoDB as the database for storing game data, player information, and game statistics, leveraging its flexibility, scalability, and document-based data model for efficient storage and retrieval.

### Deployment (Vercel for frontend, Render for Backend):

* Utilize Vercel's platform for hosting and deploying frontend applications, providing seamless integration with Git repositories and support for React.js applications out of the box.

* Deploy the Node.js backend server on Render, a modern cloud provider that offers managed infrastructure and automatic scaling for web applications.

* Configure CORS policies on the backend server to allow requests from the frontend hosted on Vercel, enabling seamless communication between the client-side and server-side components.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

to get a local copy must have first a mongodb account render account and vercel account

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install -g yarn  yarn add 
  ```

### Installation

setting up just follow the instructions

1. Fork & clone repository:
   ```sh
   git clone https://github.com/cybr2/ticTacToe-fe.git
   ```
2. Install the dependencies:
   ```sh
   yarn or npm install
   ```
3. Run the development server:
   ```
    yarn dev or npm run ev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

This application combines React.js, Framer Motion, and Tailwind CSS for a sleek and interactive frontend experience. On the backend, Node.js, Express.js, Prisma, and MongoDB provide a solid foundation for building RESTful APIs and managing data. With Vercel and Render for deployment, developers can easily showcase their creations. Plus, the classic Tic-Tac-Toe game play ensures both educational and enjoyable experiences for all users. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] low fidelity wireframe
- [x] header 
- [x] landing page 
- [x] new game modal
- [x] game board
- [x] game over modal
- [x] history
- [x] about
- [x] data persistency
- [x] api for getting the game session
- [x] api for saving the game session
- [x] create connection for database
- [x] deployed frontend to vercel
- [x] deployed backend to render

link game view : 

<a href="https://tic-tac-toe-fe-nine.vercel.app/"  > 
    link for tic-tac-toe game
</a>

link back end : 

<a href="https://tictactoe-be-cybr2.onrender.com/"  > 
    link for tic-tac-toe game be
</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

linkedin : [https://www.linkedin.com/in/ydoow/](https://www.linkedin.com/in/ydoow/)

Project Link: [https://github.com/cybr2/ticTacToe-fe.git](https://github.com/cybr2/ticTacToe-fe.git)

Project Link: [[https://github.com/cybr2/ticTacToe-fe.git](https://github.com/cybr2/ticTacToe-be.git)]([https://github.com/cybr2/ticTacToe-fe.git](https://github.com/cybr2/ticTacToe-be.git))


low fidelity wireframe: https://www.figma.com/file/sPcBLdiCS7P3TB03r1J3xy/Untitled?type=design&node-id=0-1&mode=design&t=zYxlIv8objQWkulG


<img src="./public/tictactoe-low-fedelity.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/>


sprint :


<img src="./public/tictactoe-sprint.png" alt="projectIcon" style="width: 400px; height: 400px; object-fit: cover;"/>





<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

giving credits to all the resources i've use to build this project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

