import React, { useState } from 'react'
import './resources.css'
import SideNavbar from '../component/SideNavbar'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useHistory } from "react-router-dom";


function Resources() {
    const history = useHistory();
    const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which of the following is an important trait for personality development?",
      options: [
        { id: 0, text: "Apathy", isCorrect: false },
        { id: 1, text: "Arrogance", isCorrect: false },
        { id: 2, text: "Introversion", isCorrect: false },
        { id: 3, text: "Humility", isCorrect: true },
      ],
    },
    {
      text: "Which of the following is an example of positive self-talk?",
      options: [
        { id: 0, text: "I'm going to give it my best shot", isCorrect: true },
        { id: 1, text: "I'm not good enough for this", isCorrect: false },
        { id: 2, text: "I can't do this, it's too hard", isCorrect: false },
        { id: 3, text: "I'll never be successful", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is an example of a growth mindset?",
      options: [
        { id: 0, text: "Believing that intelligence is fixed and cannot be improved", isCorrect: false },
        { id: 1, text: "Believing that failure is a reflection of personal worth", isCorrect: true },
        { id: 2, text: "Believing that challenges are opportunities for growth and learning", isCorrect: false },
        { id: 3, text: "Believing that success is based solely on luck", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is an example of assertiveness?",
      options: [
        { id: 0, text: "Allowing others to take advantage of you", isCorrect: false },
        { id: 1, text: "Being overly aggressive and confrontational", isCorrect: true },
        { id: 2, text: "Standing up for yourself in a respectful and confident manner", isCorrect: true },
        { id: 3, text: "Avoiding conflict at all costs", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <React.StrictMode>
        <div className='resources_main'>
            <div className='sideNavBar'>
                
                <div className='Headings'>
                    <h4>PERSONALITY DEVELOPMENT</h4>
                    <div className='subHeading'>
                        <a href = '#intropersonality' className='subHeadingText'>Introduction</a>
                    </div>
                    <div className='subHeading'>
                        <a href = '#selfpersonality' className='subHeadingText'>Self-awareness</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#emotionalpersonality' className='subHeadingText'>Emotional Intelligence</a>
                    </div>
                    <div className='subHeading'>
                        <a href = '#communicationpersonality' className='subHeadingText'>Communication Skills</a>
                    </div>
                    <div className='subHeading'>
                        <a href = '#mindsetpersonality' className='subHeadingText'>Mindset and Attitude</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#leadershippersonality' className='subHeadingText'>Leadership Skills</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#quiz' className='subHeadingText'>Exercise</a>
                    </div>
                </div>
            </div>
            <div className='contentContainer'>
            
            
            <div className='PersonalityContent'>
                <div className='PersonalityHeading'><h2>PERSONALITY DEVELOPMENT</h2></div>
                <br></br>
                <div id='intropersonality'> <h3> INTRODUCTION TO PERSONALITY DEVELOPMENT</h3> </div>
                <p>
                Personality development refers to the process of enhancing and improving one's personality traits, behaviors, attitudes, and values over time. It involves conscious efforts to develop and improve oneself, leading to personal and professional growth. Personality development is a continuous process that occurs throughout an individual's lifetime.
Personality development is essential for personal growth because it helps individuals to identify their strengths and weaknesses and work towards improving themselves. It allows individuals to gain a better understanding of themselves, their emotions, and their behaviors. As a result, they can make positive changes in their lives, develop healthier relationships, and achieve personal goals.
In addition, personality development is essential for professional growth because it helps individuals to develop the skills and qualities needed to succeed in their careers. Employers look for individuals who are self-aware, emotionally intelligent, and possess strong interpersonal and leadership skills. Personality development helps individuals to develop these qualities and become more effective in their jobs.
Moreover, personality development can also lead to increased self-confidence and self-esteem, which can positively impact an individual's personal and professional life. When individuals feel confident in their abilities, they are more likely to take risks and pursue their goals, leading to greater success and fulfillment.
Overall, personality development is crucial for personal and professional growth as it enables individuals to become their best selves, achieve their goals, and live a fulfilling life.

                </p>
                <br></br>
                <div id='selfpersonality'> <h3> SELF-AWARENESS</h3> </div>
                <p>
                Self-awareness is the ability to recognize and understand one's thoughts, feelings, and behaviors. It involves being conscious of one's emotions, strengths, weaknesses, and values, as well as how these factors affect oneself and others. Self-awareness is a crucial component of personality development because it enables individuals to identify areas for improvement and make positive changes in their lives.
Developing self-awareness requires individuals to reflect on their thoughts, emotions, and behaviors. One way to do this is through journaling, which involves writing down one's thoughts and feelings on a regular basis. Journaling can help individuals to gain a better understanding of their emotions and behaviors and identify patterns or triggers that may be contributing to negative thoughts or behaviors.
Meditation is another effective tool for developing self-awareness. Meditation involves focusing one's attention on the present moment and becoming aware of one's thoughts and feelings without judgment. This can help individuals to become more mindful and develop a greater sense of self-awareness.
Self-reflection is also essential for developing self-awareness. This involves taking time to reflect on one's experiences, thoughts, and emotions, and considering how they have impacted oneself and others. Self-reflection can help individuals to gain insight into their beliefs and behaviors and identify areas for improvement.
Overall, self-awareness is critical for personality development because it enables individuals to recognize their strengths and weaknesses, understand their emotions and behaviors, and make positive changes in their lives. Developing self-awareness requires individuals to engage in tools and techniques such as journaling, meditation, and self-reflection, which can help them gain insight into their thoughts, emotions, and behaviors.

                </p>
                <br></br>
                <div id='emotionalpersonality'> <h3> EMOTIONAL INTELLIGENCE</h3> </div>
                <p>
                Emotional intelligence (EI) is the ability to understand and manage one's emotions and those of others. It involves being aware of one's own feelings and those of others, using emotions to guide thinking and behavior, and effectively managing emotions to achieve personal and professional goals. Emotional intelligence is a vital aspect of personality development because it helps individuals to develop stronger relationships, make better decisions, and navigate challenging situations more effectively.
There are several components of emotional intelligence, including self-awareness, self-regulation, empathy, and social skills. Self-awareness involves understanding one's own emotions, values, and strengths and weaknesses. This includes being able to identify one's emotional triggers and regulate emotional responses. Self-regulation involves the ability to manage one's emotions, thoughts, and behaviors in a healthy and productive manner, even in stressful or challenging situations.
Empathy involves understanding and being sensitive to the emotions of others. This includes being able to accurately perceive and interpret the emotions of others and respond appropriately. Empathy helps individuals to build stronger relationships, resolve conflicts, and communicate effectively.
Social skills involve the ability to communicate, interact, and collaborate effectively with others. This includes being able to communicate clearly and assertively, resolve conflicts, and work effectively in a team. Social skills are essential for building strong relationships and achieving personal and professional goals.
Overall, emotional intelligence is a vital aspect of personality development because it helps individuals to develop stronger relationships, make better decisions, and navigate challenging situations more effectively. The different components of emotional intelligence, such as self-awareness, self-regulation, empathy, and social skills, all contribute to an individual's ability to understand and manage their emotions and those of others. By developing emotional intelligence, individuals can enhance their personal and professional growth and achieve greater success and fulfillment.

                </p>
                <br></br>
                <div id='communicationpersonality'> <h3> COMMUNICATION SKILLS</h3> </div>
                <p>
                Effective communication is a critical aspect of personality development because it enables individuals to express their thoughts, ideas, and emotions in a clear and concise manner. Good communication skills are essential for building strong relationships, resolving conflicts, and achieving personal and professional goals.
One key aspect of effective communication is active listening. This involves paying attention to what others are saying, asking clarifying questions, and responding appropriately. Active listening helps individuals to understand others' perspectives and communicate more effectively.
Nonverbal communication is also important for effective communication. Nonverbal cues, such as facial expressions, body language, and tone of voice, can convey meaning and emotion. Being aware of one's nonverbal communication and using it effectively can help individuals to communicate more clearly and build stronger relationships.
Assertiveness is another crucial aspect of effective communication. Assertive communication involves expressing one's thoughts, feelings, and needs in a clear and direct manner while respecting others' opinions and boundaries. Being assertive can help individuals to communicate more effectively, build self-confidence, and set healthy boundaries in their relationships.
To improve communication skills, individuals can practice active listening by paying attention to what others are saying, asking questions, and providing feedback. They can also work on improving their nonverbal communication by using eye contact, open body language, and a clear tone of voice. Finally, individuals can practice assertive communication by expressing their needs and opinions clearly and respectfully.
Overall, effective communication is a critical aspect of personality development because it enables individuals to build strong relationships, resolve conflicts, and achieve personal and professional goals. By practicing techniques such as active listening, nonverbal communication, and assertiveness, individuals can improve their communication skills and enhance their personal and professional growth.

                </p>
                <br></br>
                <div id='mindsetpersonality'> <h3> MINDSET AND ATTITUDE</h3> </div>
                <p>
                Mindset and attitude play an essential role in personality development. They shape how individuals perceive themselves and the world around them, and influence their thoughts, behaviors, and emotions.
A growth mindset is the belief that one's abilities and intelligence can be developed and improved over time through hard work and dedication. In contrast, a fixed mindset is the belief that one's abilities and intelligence are fixed and cannot be changed. Cultivating a growth mindset is important for personality development because it helps individuals to embrace challenges, persist through obstacles, and achieve their goals.
To cultivate a growth mindset, individuals can focus on the process rather than the outcome, embrace challenges as opportunities for growth, and seek feedback to learn and improve. They can also practice self-compassion, recognize and challenge limiting beliefs, and surround themselves with supportive and encouraging people.
A positive attitude is also essential for personality development. It helps individuals to cope with stress, build resilience, and maintain a sense of optimism and hope. To develop a positive outlook, individuals can practice gratitude by focusing on the good things in their life, engage in activities that bring them joy and fulfillment, and reframe negative thoughts into more positive ones. They can also practice self-care by taking care of their physical, emotional, and mental health, and develop a sense of purpose and meaning in their life.
Overall, mindset and attitude play a crucial role in personality development. By cultivating a growth mindset and a positive attitude, individuals can enhance their personal and professional growth, overcome obstacles, and achieve greater success and fulfillment.

                </p>
                <br></br>
                <div id='leadershippersonality'> <h3> LEADERSHIP SKILLS</h3> </div>
                <p>
                Leadership skills are an essential aspect of personality development because they enable individuals to inspire, motivate, and guide others towards a common goal. Strong leadership skills can help individuals to achieve personal and professional success, build stronger relationships, and make a positive impact in their communities.
Effective communication is a key component of leadership skills. Leaders must be able to communicate their vision, goals, and expectations clearly and concisely to their team members. They must also be able to listen actively to their team members, provide feedback and support, and resolve conflicts in a constructive manner.
Delegation is another important leadership skill. Leaders must be able to delegate tasks and responsibilities effectively to their team members, based on their strengths and abilities. Delegation enables leaders to free up their own time and focus on high-priority tasks, while empowering their team members to develop their skills and take ownership of their work.
Decision-making is also a critical leadership skill. Leaders must be able to make informed and timely decisions based on available information, weighing the risks and benefits of each option. They must also be able to adapt to changing circumstances and take responsibility for the outcomes of their decisions.
To develop leadership skills, individuals can seek out leadership opportunities and challenges, such as leading a team project or organizing a community event. They can also seek out mentorship and coaching from experienced leaders, read books and articles on leadership, and attend workshops and seminars on leadership development. Additionally, individuals can practice effective communication, delegation, and decision-making in their personal and professional relationships, and seek feedback to learn and improve.
Overall, leadership skills are a critical aspect of personality development. By developing effective communication, delegation, and decision-making skills, individuals can become more effective leaders and make a positive impact in their personal and professional lives.

                </p>
                <br></br>
                <div className="quiz" id='quiz'>
                    {/* 1. Header  */}
                    <h1>PERSONALITY DEVELOPMENT EXERCISE</h1>

                    {/* 2. Current Score  */}
                    <h2>Score: {score}</h2>

                    {/* 3. Show results or show the question game  */}
                    {showResults ? (
                        /* 4. Final Results */
                        <div className="final-results">
                        <h1>Final Results</h1>
                        <h2>
                            {score} out of {questions.length} correct - (
                            {(score / questions.length) * 100}%)
                        </h2>
                        <button className='btn btn-warning' onClick={() => restartGame()}>Restart game</button>
                        </div>
                    ) : (
                        /* 5. Question Card  */
                        <div className="question-card">
                        {/* Current Question  */}
                        <h2>
                            Question: {currentQuestion + 1} out of {questions.length}
                        </h2>
                        <h3 className="question-text">{questions[currentQuestion].text}</h3>

                        {/* List of possible answers  */}
                        <ul>
                            {questions[currentQuestion].options.map((option) => {
                            return (
                                <li
                                key={option.id}
                                onClick={() => optionClicked(option.isCorrect)}
                                >
                                {option.text}
                                </li>
                            );
                            })}
                        </ul>
                        </div>
                    )}
                    </div>
                    <br></br>
                    <br></br>
                <div className='buttonBox'>
                    <button onClick={()=> history.push('/softskills')} className='btn btn-warning navButton'>Soft Skills</button>
                    <button onClick={() =>history.push('/communication')} className='btn btn-warning navButton'>Communication Skills</button>
                </div>
                </div>
            </div>
        </div>
        
    </React.StrictMode>
  )
}

export default Resources