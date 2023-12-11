import React, { useState } from 'react'
import './communication.css'
import SideNavbar from '../component/SideNavbar'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useHistory } from "react-router-dom";


function Communication() {

    const history = useHistory();
    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const questions = [
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
          text: "Which of the following is an example of nonverbal communication?",
          options: [
            { id: 0, text: "Facial expressions", isCorrect: true },
            { id: 1, text: "Written emails", isCorrect: false },
            { id: 2, text: "Phone calls", isCorrect: false },
            { id: 3, text: "Video conferences", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is an example of active listening?",
          options: [
            { id: 0, text: "Paying attention to the speaker's words and body language", isCorrect: true },
            { id: 1, text: "Interrupting the speaker to share your own thoughts", isCorrect: false },
            { id: 2, text: "Focusing only on what you want to hear", isCorrect: false },
            { id: 3, text: "Texting or checking email while the speaker is talking", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is an example of effective feedback?",
          options: [
            { id: 0, text: "Criticizing someone's character rather than their behavior", isCorrect: false },
            { id: 1, text: "Giving specific, actionable feedback focused on behavior", isCorrect: true },
            { id: 2, text: "Providing vague or general feedback", isCorrect: false },
            { id: 3, text: "Withholding feedback altogether", isCorrect: false },
          ],
        },
        {
          text: "Which of the following is an example of cultural sensitivity in communication?",
          options: [
            { id: 0, text: "Assuming everyone understands and shares the same cultural norms", isCorrect: false },
            { id: 1, text: "Taking the time to learn about and respect cultural differences", isCorrect: true },
            { id: 2, text: "Ignoring cultural differences altogether", isCorrect: true },
            { id: 3, text: "Using sarcasm or humor that may be offensive to some cultures", isCorrect: false },
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
                <div className='Headings'>
                    <h4>COMMUNICATION SKILLS</h4>
                    <div className='subHeading'>
                        <a href='#introCommunication' className='subHeadingText'>Introduction</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#verbalCommunication' className='subHeadingText'>Verbal Communication Skills</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#writtenCommunication' className='subHeadingText'>Written Communication Skills</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#nonverbalCommunication' className='subHeadingText'>Non Verbal Communication Skills</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#interpersonalCommunication' className='subHeadingText'>Interpersonal Communication Skills</a>
                    </div>
                    <div className='subHeading'>
                        <a href='#quiz' className='subHeadingText'>Exercise</a>
                    </div>
                    
                </div>
                
            </div>
            <div className='contentContainer'>
            <div className='communicationContent'>
                <div className='communicationHeading'><h2>COMMUNICATION SKILLS</h2></div>
                <br></br>
            <div id='introCommunication'> <h3> INTRODUCTION TO COMMUNICATION SKILLS</h3> </div>
            <p>
            Communication is the process of exchanging information or messages between individuals or groups. It is a fundamental human skill and plays a vital role in our personal and professional lives. Communication skills refer to the ability to express ideas, thoughts, and emotions effectively and clearly to others.
Effective communication skills are essential in building relationships, resolving conflicts, and achieving success in the workplace. Communication can be verbal, nonverbal, or written. Verbal communication refers to the use of words to convey a message, while nonverbal communication includes body language, tone of voice, and facial expressions. Written communication involves conveying a message through written words.
Having good communication skills involves more than just speaking and writing well. It also includes active listening, understanding and interpreting nonverbal cues, and adapting communication style to different situations and audiences.
The importance of communication skills cannot be overstated. In the workplace, effective communication skills are essential for building strong relationships with colleagues, clients, and stakeholders. Poor communication can lead to misunderstandings, conflicts, and even project failures. Communication skills are also important in personal relationships, such as with friends and family, where misunderstandings can lead to hurt feelings and strained relationships.
Overall, developing strong communication skills is crucial for success in both personal and professional life. By improving communication skills, individuals can express themselves more clearly, understand others better, and build stronger relationships.

            </p>
            <br></br>
            <div id='verbalCommunication'> <h3> VERBAL COMMUNICATION SKILLS</h3> </div>
            <p>
            Verbal communication refers to the use of spoken words to convey a message. It is a critical aspect of effective communication and can be improved through practice and awareness.
Active listening is an essential skill in verbal communication. It involves fully engaging with the speaker, paying attention to what they are saying, and asking relevant questions to clarify understanding. By actively listening, individuals can better understand the message being conveyed and respond appropriately.
Speaking clearly and effectively is also essential in verbal communication. This includes using appropriate tone and inflection, using clear and concise language, and adjusting language and tone to suit the audience and context. Individuals with strong verbal communication skills can articulate their ideas and thoughts effectively and persuasively.
Nonverbal communication is an essential aspect of verbal communication as well. It includes body language, facial expressions, and tone of voice. When communicating verbally, individuals should be aware of their nonverbal cues and ensure they are consistent with their verbal message. For example, maintaining eye contact and using appropriate hand gestures can enhance the message being conveyed and help to establish trust and rapport with the listener.
Presentation skills are also crucial in verbal communication. Effective presentations require individuals to communicate their ideas clearly and engagingly to an audience. This includes having a clear structure, using visual aids to support the message, and engaging the audience through active participation and interaction.
Overall, verbal communication skills are essential in both personal and professional life. They are critical for building relationships, expressing ideas and thoughts effectively, and achieving success in the workplace. By developing and improving verbal communication skills, individuals can communicate more effectively, connect with others more meaningfully, and achieve their goals more efficiently.

            </p>
            <br></br>
            <div id='writtenCommunication'> <h3> WRITTEN COMMUNICATION SKILLS</h3> </div>
            <p>
            Written communication skills refer to the ability to convey information and ideas through written words. In today's digital age, written communication has become increasingly important, as it is often the primary means of communication in many professional and personal contexts.
Effective business writing is a critical aspect of written communication. It involves using clear and concise language, structuring information logically, and using appropriate tone and style. Business writing can take many forms, including emails, memos, reports, and proposals. By mastering effective business writing, individuals can communicate their ideas and thoughts clearly and persuasively, establish credibility, and achieve their goals more efficiently.
Writing emails, memos, and reports are essential components of written communication in the workplace. Writing emails requires individuals to be clear and concise while maintaining a professional tone. Memos are often used for internal communication and require a more formal writing style. Reports are used to convey complex information and require careful attention to structure and detail.
Grammar and punctuation are also critical components of written communication. Effective writing requires the use of proper grammar and punctuation to ensure clarity and accuracy. Common mistakes such as misspellings, incorrect punctuation, and grammatical errors can make written communication difficult to understand and undermine the writer's credibility.
In addition to writing for the workplace, written communication skills are also essential in personal life. For example, writing clear and concise emails to friends and family or crafting persuasive social media posts can help individuals communicate effectively and establish meaningful relationships.
Overall, written communication skills are crucial in today's digital age. By mastering effective business writing, using proper grammar and punctuation, and tailoring writing style to suit different audiences and contexts, individuals can communicate their ideas and thoughts clearly and persuasively, establish credibility, and achieve their goals more efficiently.

            </p>
            <br></br>
            <div id='nonverbalCommunication'> <h3> NON VERBAL COMMUNICATION SKILLS</h3> </div>
            <p>
            Nonverbal communication refers to the use of body language, facial expressions, and tone of voice to convey meaning and emotions. It is a critical aspect of effective communication and can often have a more significant impact than verbal communication alone.
Body language is an essential component of nonverbal communication. It includes gestures, posture, and eye contact. For example, crossed arms can indicate defensiveness or a lack of openness, while leaning forward can indicate interest or engagement. Maintaining eye contact can signal attentiveness and establish trust between communicators.
Facial expressions are another critical aspect of nonverbal communication. The expressions on our faces can convey emotions such as happiness, sadness, anger, and surprise. For example, a smile can signal friendliness and warmth, while a furrowed brow can indicate confusion or frustration.
Tone of voice is another essential component of nonverbal communication. It includes factors such as pitch, volume, and pace. A monotone voice can signal boredom or disinterest, while a high-pitched, rapid speech can signal excitement or anxiety.
Nonverbal communication is essential in both personal and professional contexts. In the workplace, strong nonverbal communication skills can help individuals build strong relationships, establish credibility, and communicate effectively with clients and colleagues. In personal life, nonverbal communication can help individuals establish and maintain strong relationships, communicate emotions and intentions more clearly, and navigate social situations more effectively.
Overall, nonverbal communication skills are critical in effective communication. By being aware of and using body language, facial expressions, and tone of voice effectively, individuals can communicate more effectively, establish trust and rapport with others, and achieve their goals more efficiently.
            </p>
            <br></br>
            <div id='interpersonalCommunication'> <h3> INTERPERSONAL COMMUNICATION SKILLS</h3> </div>
            <p>
            Interpersonal communication refers to the exchange of information, ideas, and emotions between individuals. It involves a complex interplay of verbal and nonverbal communication, active listening, and the ability to adapt communication style to suit different audiences and contexts.
Active listening is a crucial aspect of interpersonal communication. It involves fully engaging with the speaker, paying attention to what they are saying, and asking relevant questions to clarify understanding. Active listening also requires individuals to be mindful of nonverbal cues such as body language, facial expressions, and tone of voice.
Adapting communication style to suit different audiences and contexts is also an essential component of interpersonal communication. For example, communicating with a colleague may require a more formal tone, while communicating with a friend may require a more casual and relaxed tone. Being able to adapt communication style to suit different contexts and audiences can help individuals establish trust and rapport with others and communicate more effectively.
Assertiveness is another critical aspect of interpersonal communication. Assertive communication involves expressing oneself clearly and directly while respecting the rights and opinions of others. Being assertive allows individuals to communicate their needs and boundaries effectively while maintaining positive relationships with others.
Conflict resolution is another essential component of interpersonal communication. Conflict can arise in any relationship, and effective communication skills are crucial for resolving conflicts in a positive and productive way. Effective conflict resolution requires active listening, assertiveness, empathy, and the ability to work collaboratively towards a solution.
Overall, interpersonal communication skills are essential in both personal and professional life. By developing and improving interpersonal communication skills, individuals can communicate more effectively, build strong relationships, resolve conflicts in a positive and productive way, and achieve their goals more efficiently.

            </p>
            <br></br>
            <div className="quiz" id='quiz'>
                    {/* 1. Header  */}
                    <h1>COMMUNICATION SKILLS EXERCISE</h1>

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
                    <button onClick={() =>history.push('/resources')} className='btn btn-warning navButton'>Personality Development</button>
            </div>
            </div>
            </div>
        </div>
        
    </React.StrictMode>
  )
}

export default Communication