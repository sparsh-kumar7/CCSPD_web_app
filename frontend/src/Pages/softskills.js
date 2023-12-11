import React, { useState } from 'react'
import './softskills.css'
import SideNavbar from '../component/SideNavbar'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useHistory } from "react-router-dom";


function SoftSkills() {
    const history = useHistory();
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    
    const questions = [
        {
            text: "Which of the following is an example of a soft skill? ",
            options: [
              { id: 0, text: "Data analysis", isCorrect: false },
              { id: 1, text: "Project management", isCorrect: false },
              { id: 2, text: "Data analysis", isCorrect: false },
              { id: 3, text: "Communication", isCorrect: true },
          ],
        },
        {
          text: "Which of the following is an example of effective communication?",
          options: [
            { id: 0, text: "Asking clarifying questions", isCorrect: true },
            { id: 1, text: "Using technical jargon", isCorrect: false },
            { id: 2, text: "Speaking in a monotone voice", isCorrect: false },
            { id: 3, text: "Interrupting the other person", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is an example of teamwork?",
          options: [
            { id: 0, text: "Collaborating with others to achieve a common goal", isCorrect: true },
            { id: 1, text: "Working alone on a project", isCorrect: false },
            { id: 2, text: "Criticizing other team members", isCorrect: false },
            { id: 3, text: "Taking credit for the team's work", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is an example of emotional intelligence?",
          options: [
            { id: 0, text: "Being stubborn and inflexible", isCorrect: false },
            { id: 1, text: "Showing empathy towards others", isCorrect: true },
            { id: 2, text: "Avoiding conflict at all costs", isCorrect: false },
            { id: 3, text: "Refusing to listen to other people's opinions", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is an example of time management?",
          options: [
            { id: 0, text: "Procrastinating until the last minute", isCorrect: false },
            { id: 1, text: "Making a to-do list and prioritizing tasks", isCorrect: true },
            { id: 2, text: "Working on multiple tasks at the same time", isCorrect: false },
            { id: 3, text: "Ignoring deadlines and due dates", isCorrect: false },
          ],
        },
      ];
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
                    <h4>SOFT SKILLS</h4>
                    <div className='subHeading'>
                        <a href='#introsoft' className='subHeadingText'>Introduction</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#effectivesoft' className='subHeadingText'>Effective Communication</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#teamsoft' className='subHeadingText'>Team Work</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#emotionalsoft' className='subHeadingText'>Emotional Intelligence</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#networkingsoft' className='subHeadingText'>Networking</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#presentationsoft' className='subHeadingText'>Presentation Skills</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#quiz' className='subHeadingText'>Exercise</a>
                    </div>
                </div>

                <div className='contentContainer'>

                    <div className='softContent'>
                        <div className='softHeading'><h2>SOFT SKILLS</h2></div>
                        <br></br>
                        <div id='introsoft'> <h3> INTRODUCTION TO SOFT SKILLS</h3> </div>
                        <p>

                        </p>
                        <br></br>
                        <div id='effectivesoft'> <h3> EFFECTIVE COMMUNICATION</h3> </div>
                        <p>
                            Effective communication is a crucial soft skill that involves conveying a message or information to someone else in a clear, concise, and appropriate manner. Communication can take many forms, including verbal, non-verbal, written, and visual.
                            Active listening is an essential component of effective communication. It involves fully engaging with the person speaking, paying attention to what they are saying, and demonstrating that you understand and value their message. Active listening also involves asking questions, providing feedback, and clarifying information to ensure that you have fully understood the other person's message.
                            Verbal communication involves using words to convey a message. It includes speaking, tone of voice, and language. Clear and concise language is important to ensure that the message is easily understood. Tone of voice is also crucial, as it can convey different meanings and emotions. It's important to use an appropriate tone for the situation, whether it's serious, professional, or casual.
                            Non-verbal communication refers to the use of body language, facial expressions, and gestures to convey a message. Non-verbal cues can often provide important context or additional meaning to a message. For example, a smile can indicate happiness, while a frown can indicate sadness or disappointment.
                            Body language is an important aspect of non-verbal communication. It involves using physical cues to convey a message, such as posture, eye contact, and gestures. Positive body language can help to build trust and rapport with others, while negative body language can create barriers and miscommunications.
                            Empathy is another important component of effective communication. It involves understanding and recognizing the emotions and perspectives of others. When communicating with someone, it's important to try to understand their point of view and respond in a way that demonstrates empathy and understanding.
                            Conflict resolution is also a critical aspect of effective communication. Conflicts can arise in any setting, and it's important to know how to handle them effectively. Effective conflict resolution involves active listening, expressing your own point of view clearly and respectfully, and working together to find a solution that satisfies both parties.
                            In summary, effective communication involves a range of skills, including active listening, verbal and non-verbal communication, body language, empathy, and conflict resolution. By developing these skills, you can communicate more effectively with others and build stronger relationships both in your personal and professional life.

                        </p>
                        <br></br>
                        <div id='teamsoft'> <h3> TEAM WORK</h3> </div>
                        <p>
                            Teamwork is the ability to work collaboratively with others to achieve a common goal. It's a critical soft skill that's highly valued in most workplaces. Effective teamwork requires open communication, trust, respect, and a shared vision of the goals and objectives.
                            Collaboration is an essential aspect of effective teamwork. It involves working together with colleagues to achieve a common goal. Collaborative teams are more productive and efficient, as they can share ideas, resources, and expertise to achieve a common goal. When collaborating, it's important to be respectful of others' opinions and to be open to new ideas and perspectives.
                            Communication is another critical component of effective teamwork. It's essential to communicate clearly and openly with colleagues to ensure that everyone is on the same page. Good communication involves active listening, expressing your ideas and opinions clearly, and being open to feedback from others. Effective communication helps to build trust and rapport with colleagues, which can improve teamwork and productivity.
                            Working towards common goals is another important aspect of effective teamwork. It's essential to have a shared vision of what you want to achieve and to work collaboratively towards achieving those goals. By setting clear objectives and working together towards them, teams can achieve greater success and overcome challenges more effectively.
                            Managing conflicts is also an important skill for effective teamwork. Conflicts can arise in any workplace, and it's essential to know how to handle them effectively. When conflicts arise, it's important to listen to all parties involved, remain calm, and work together to find a solution that satisfies everyone. Effective conflict management can help to build trust and respect among colleagues, which can improve teamwork and productivity.
                            In summary, effective teamwork involves a range of skills, including collaboration, communication, working towards common goals, and conflict management. By developing these skills, you can work more effectively with colleagues, achieve common goals, and improve productivity in your workplace.

                        </p>
                        <br></br>
                        <div id='emotionalsoft'> <h3> EMOTIONAL INTELLIGENCE</h3> </div>
                        <p>
                            Emotional intelligence is the ability to identify, understand, and manage one's own emotions and those of others. It's a critical soft skill that's highly valued in many workplaces. Emotional intelligence involves several key skills, including self-awareness, self-regulation, motivation, empathy, and social skills.
                            Self-awareness is the ability to recognize and understand your own emotions and how they impact your behavior and decisions. It involves being honest with yourself and acknowledging your strengths and weaknesses. Self-awareness allows you to manage your emotions more effectively and to understand how they may impact others.
                            Self-regulation is the ability to manage your emotions and behaviors in different situations. It involves being able to control your impulses and reactions and to respond to situations in a calm and rational manner. Self-regulation allows you to maintain your focus and composure in stressful situations, which can help to build trust and respect among colleagues.
                            Motivation is the ability to set goals and work towards them with energy and enthusiasm. It involves having a sense of purpose and direction, as well as the ability to stay motivated and focused even when faced with obstacles. Motivation allows you to remain committed to your goals and to inspire others to do the same.
                            Empathy is the ability to understand and share the emotions and perspectives of others. It involves being able to put yourself in someone else's shoes and to see things from their point of view. Empathy allows you to communicate more effectively with others, build strong relationships, and manage conflicts more effectively.
                            Social skills are the ability to interact effectively with others in different situations. It involves being able to communicate clearly and openly, to collaborate effectively with others, and to build strong relationships. Social skills allow you to work more effectively in teams and to build a positive work environment.
                            In summary, emotional intelligence is a critical soft skill that involves several key skills, including self-awareness, self-regulation, motivation, empathy, and social skills. By developing these skills, you can improve your ability to manage your emotions, communicate effectively with others, build strong relationships, and work more effectively in teams.

                        </p>
                        <br></br>
                        <div id='networkingsoft'> <h3> NETWORKING</h3> </div>
                        <p>
                            Networking is the art of building relationships with people in your industry or profession. It's a critical soft skill that's highly valued in many workplaces, as it can help you to find new job opportunities, learn about new trends in your industry, and build your personal brand.
                            Building professional relationships is an essential aspect of networking. It involves establishing and maintaining relationships with colleagues, mentors, and other professionals in your industry. You can build relationships by attending industry events, joining professional associations, and participating in online forums and discussions.
                            Networking strategies are also essential for effective networking. It's important to have a clear goal in mind when networking, such as finding a new job or building your personal brand. You can develop a strategy by identifying key people in your industry or profession, attending relevant events, and leveraging online platforms to connect with others.
                            Using social media for networking is another critical skill. Social media platforms such as LinkedIn and Twitter provide an opportunity to connect with colleagues, mentors, and other professionals in your industry. You can use social media to share your expertise, engage in online discussions, and connect with others who share similar interests.
                            Other topics to cover in networking include:
                            <li>Elevator pitch: An elevator pitch is a brief introduction that highlights your skills, experience, and goals. It's an essential tool for networking, as it allows you to quickly and effectively communicate your value to others.
                            </li>
                            <li>Following up: Following up after networking events is essential to maintaining relationships and building trust. You can follow up by sending an email, scheduling a meeting, or connecting on social media.
                            </li>
                            <li>Giving back: Giving back to your industry or profession is an excellent way to build your personal brand and establish yourself as a thought leader. You can give back by volunteering, mentoring, or sharing your expertise online.
                            </li>
                            <p>In summary, networking is a critical soft skill that involves building relationships with people in your industry or profession. By developing networking strategies, using social
                            </p>             </p>
                        <br></br>
                        <div id='presentationsoft'> <h3> PRESENTATION SKILLS</h3> </div>
                        <p>
                            <ol>
                                <li>Preparing Presentation</li>
                                <p>Preparing presentations involves several key steps, including:
                                </p>
                                <ul>
                                    <li>Identifying the purpose and objective of the presentation: This involves understanding what you want to achieve with your presentation, such as informing, persuading, or entertaining your audience.
                                    </li>
                                    <li>Conducting research: This involves gathering information to support your message, such as statistics, case studies, or expert opinions.</li>
                                    <li>Structuring the presentation: This involves organizing the content in a logical and easy-to-follow manner, such as using an outline or storyboard.
                                    </li>
                                    <li>Developing supporting materials: This involves creating visual aids, handouts, or other materials that support your message and make it easier for your audience to understand.
                                    </li>
                                    <li>Rehearsing the presentation: This involves practicing the delivery of the presentation, including the use of visual aids, timing, and pacing.
                                    </li>
                                </ul>
                                <li>Public Speaking Skills</li>
                                <p>Public speaking skills are essential for delivering effective presentations. Some key skills to focus on include:
                                </p>
                                <ul>
                                    <li>Developing a confident speaking style: This involves speaking clearly and confidently, maintaining eye contact, and using appropriate gestures to engage your audience.
                                    </li>
                                    <li>Using vocal variety: This involves using variations in tone, pitch, and volume to emphasize key points, convey emotion, and maintain audience engagement.
                                    </li>
                                    <li>Using body language: This involves using nonverbal cues, such as posture, facial expressions, and hand gestures, to convey confidence, enthusiasm, and engagement.
                                    </li>
                                    <li>Managing nervousness: This involves using techniques such as deep breathing, visualization, and positive self-talk to manage nervousness and stay focused during the presentation.
                                    </li>
                                </ul>
                                <li>Using Visual Aids</li>
                                <p>Visual aids are an effective way to support your message and engage your audience. Some key tips for using visual aids effectively include:
                                </p>
                                <ul>
                                    <li>Using simple and clear designs: This involves using simple and easy-to-read fonts, images, and colors, and avoiding clutter or unnecessary details.
                                    </li>
                                    <li>Limiting the amount of text: This involves using bullet points or short phrases to convey key messages, rather than long paragraphs or sentences.
                                    </li>
                                    <li>Using high-quality images: This involves using high-quality images or graphics that are relevant to your message and help to reinforce your points.
                                    </li>
                                    <li>Avoiding distractions: This involves avoiding visual aids that may be distracting or irrelevant to your message, such as animations or sound effects.
                                    </li>
                                </ul>
                            </ol>
                            Overall, delivering effective presentations involves a combination of careful preparation, strong public speaking skills, and effective use of visual aids. By focusing on these key areas, you can engage your audience, communicate your message effectively, and achieve your presentation goals.

                        </p>
                        <br></br>
                        <div className="quiz" id='quiz'>
                    {/* 1. Header  */}
                    <h1>SOFT SKILLS EXERCISE</h1>

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
                            <button onClick={()=> history.push('/resources')} className='btn btn-warning navButton'>Personality Development</button>
                            <button onClick={() =>history.push('/communication')} className='btn btn-warning navButton'>Communication Skills</button>
                        </div>
                    </div>

                </div>
            </div>


        </React.StrictMode>
    )
}

export default SoftSkills