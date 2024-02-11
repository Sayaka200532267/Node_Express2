
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'My portfolio', 
  background: 'I am a student of Georgian College, and I\'m taking the course of Web Development. I am from Japan, (Not From China!!) and I had worked as an administrative assistant. However, I want to explore the world and learn English and web development, so I came to Canada to seek out the adventure.', 
  backgroundImg: 'images/home.png',
  Interests: 'My interests in the coding fields are making webpages using React and Node.js', Goals: 'My goal is to become a front end developer. Also, I would like to know about AI in the future,  since AI is evolving and I think it will be a big industry, and might replace to the developers.'});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', about: 'I am currently studying web development at Georgian College, Interactive Media Design - web and have a strong grasp of HTML, CSS, and JavaScript. My interest lies in the frontend technologies, and I am motivated by the creativity and visual impact of coding.I am willing to learn new technologies since I will be a junior developer, and require a lot of learning.',
  backgroundImg: 'https://images.unsplash.com/photo-1690382285917-73dfd2a22d07?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
});
})
router.get('/skills', function(req, res, next){
  res.render('Skills', 
  {backgroundImg: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Skills',
    skills: [
      { type: 'Programming Languages', lang: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'JSON', 'SQL', 'SASS', 'LESS', 'jQuery', '.Net', 'C#', 'PHP'] },
      { type: 'Additional Skills', lang: ['Express', 'RESTful API', 'MongoDB', 'Git', 'GitHub', 'Bootstrap', 'VSCode', 'Adobe Photoshop', 'Adobe Illustrator', 'Jira'] },
      { type: 'Soft Skills', lang: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management', 'Adaptability'] }
    ]});
});

router.get('/contact', function(req, res, next){
  res.render('Contact', {title: 'Contact', 
  backgroundImg: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  pic: 'images/avatar.png',
  contact: 'Please contact me at: (705)716-3492 or email me at: sayakaohara@outlook.com'})
})
router.get('/resume', function(req, res, next){
  res.render('Resume', {
    title: 'Resume',
    content: {
      education: [
        {
          school: 'Georgian College',
          location: 'Barrie, ON',
          major: 'Interactive Media Design - Web',
          year: '2022-2024'
        },
        {
          school: 'Tokyo Woman\'s Christian University',
          location: 'Tokyo, Japan',
          major: 'Bachelor of Arts in Linguistic',
          year: '2012-2016'
        }
      ],
      experiences: [
        {
          title: 'Web Development Assistant',
          location: 'Toronto, ON',
          year: '2023',
        },
        {
          title: 'Administrative Assistant',
          location: 'Tokyo, Japan',
          year: '2020-2022',
           },
        {
          title: 'Administrative Assistant',
          location: 'Tokyo, Japan',
          year: '2016-2019',
         }
      ],
      backgroundImg: 'images/resume.png',
    }
  });
});
module.exports = router;
