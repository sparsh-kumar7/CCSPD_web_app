import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import './pastEvents.css'
import axios from 'axios';

let Carousals = [];
let pastEvents_val = [];

function temp_data(){
    return(
        <div>
        {pastEvents_val.map((favorite) =>(
            <div className='cardContainer'>
                    console.log(favorite);
                    <div>{favorite}
                    </div>
                </div>
            ))}
    </div>
    )
}

function PastEvents(props) {
    const[favorites,setFavorites] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pastEvents').then(res => {
            
            console.log(res.data)
            // console.log(data)
            setFavorites(res.data)
        })
    }, []);

    var firstCarousels = [
        {
            imgSrc: require("./../component/images/G-20 Programme_CCSPD (1).png")
        },
        {
            imgSrc: require("./../component/images/IMG-20230320-WA0004.jpg")
        },
        {
            imgSrc: require("./../component/images/IMG-20230320-WA0008.jpg")
        }
    ]

    var secondCarousels = [
        {
            imgSrc: require("./../component/images/DSC00999.jpg")
        },
        {
            imgSrc: require("./../component/images/DSC01016.jpg")
        },
        {
            imgSrc: require("./../component/images/DSC_0296.jpg")
        }
    ]

    var thirdCarousels = [
        {
            imgSrc: require("./../component/images/CHA00767.jpg")
        },
        {
            imgSrc: require("./../component/images/Spotlight2.jpeg")
        }
    ]

    var fourthCarousels = [
        {
            imgSrc: require("./../component/images/CHA00739.jpg")
        },
        {
            imgSrc: require("./../component/images/CHA00946.jpg")
        }
    ]

    return (
        <div className='mainContainer'>
            {favorites.map((favorite) =>(
            <div className='cardContainer'>
                
                    <div className='textContainer'>
                    <div className='heading'><p className='headingText'>{favorite.heading}</p></div>
                    <div className='content'><p className='contentText'>
                        {favorite.description}</p></div>
                </div>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            favorite.images.map((item,id) => <Item key={id} item={item.image} />)
                        }
                    </Carousel>
                </div>
                </div>
            ))}
            {/* <div className='cardContainer'>
                <div className='textContainer'>
                    <div className='heading'><p className='headingText'>THE SCRIBBLED STORIES</p></div>
                    <div className='content'><p className='contentText'>The workshop aimed at improving writing skills and
                        provide information based on content writing on social media
                        platforms. The event began with
                        the scribbled stories Co-founder
                        Mr. Mohit Kumar sharing his
                        experience on writing short and

                        crisp write-ups that gather
                        engagement on social media
                        platforms. This was followed by
                        an interactive session in which
                        the audience could participate and
                        ask questions. Later, more serious
                        writing formats like novels,
                        storybooks etc. were discussed
                        with insightful information on the same.</p></div>
                </div>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            secondCarousels.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>

            </div>

            <div className='cardContainer'>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            thirdCarousels.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>
                <div className='textContainer'>
                    <div className='heading'><p className='headingText'>SPOTLIGHT</p></div>
                    <div className='content'><p className='contentText'>As the cultural festival, Vivacity, began, LNMIIT students were treated to an exhilarating event named "SPOTLIGHT," which was organised by MEDIA CELL and C-CSPD on February 17, 2023. SPOTLIGHT is a forum where both novice and professional artists may try to present their art/gig in front of an audience, thus giving them a platform to polish and exemplify their abilities.

The chosen individuals delivered with zeal and devotion. Stand-up comedy, musical acts, and poetry were all performed during the event. Every performance was met with applause. Each participant was certainly the greatest and most gifted in their particular skills.
                    </p>
                    </div>
                </div>
            </div>

            <div className='cardContainer'>
                <div className='textContainer'>
                    <div className='heading'><p className='headingText'>THE OPEN DISCUSSION</p></div>
                    <div className='content'><p className='contentText'>Topic of discussion was “Entertainment based censorship is justified or not?”. In the start of the discussion each participant was given 2 minutes to clear their point on the topic followed by a cross questioning round. In the end 1 minute was allotted to each participant to provide conclusion based on the speeches of other participants and discussion followed by them.</p></div>
                </div>
                <div className='imageContainer'>
                    <Carousel animation='slide' interval={4000} cycleNavigation='true' autoPlay='true' indicators={false}>
                        {
                            fourthCarousels.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </div>

            </div> */}

        </div>
    )
}

function Item(props) {
    // console.log(props.item)
    const src_image = props.item.split('/src/')
    console.log(src_image[1])
    let img_src = require("./../"+src_image[1])

    return (
        <Paper>
            <img className='imageBox' src={img_src} style={{height:"327px"}}></img>
        </Paper>
    )
}
export default PastEvents