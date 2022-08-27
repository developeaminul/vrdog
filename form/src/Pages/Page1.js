import * as React from 'react';
import Grid from '@mui/material/Grid';
import Game from './Game';
import { AppContext } from '../context';
import Loading from '../Loading';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const demoTimes = [
    {
        "date": "2022-08-29T14:00:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T14:15:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T14:30:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T14:45:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T15:00:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T15:15:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T15:30:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T15:45:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T16:00:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T16:15:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T16:30:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T16:45:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T17:00:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T17:15:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T17:30:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T17:45:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T18:00:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T18:15:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T18:30:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T18:45:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T19:00:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T19:15:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T19:30:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T19:45:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    },
    {
        "date": "2022-08-29T20:00:00-04:00",
        "minStations": 1,
        "maxStations": 6,
        "minPlayers": 1,
        "maxPlayers": 6
    }
]
const demoDates = [
    {
        "date": "2022-08-26T20:31:40+06:00",
        "open": true
    },
    {
        "date": "2022-08-27T20:31:40+06:00",
        "open": true
    },
    {
        "date": "2022-08-28T20:31:40+06:00",
        "open": true
    },
    {
        "date": "2022-08-29T20:31:40+06:00",
        "open": true
    },
    {
        "date": "2022-08-30T20:31:40+06:00",
        "open": true
    },
    {
        "date": "2022-08-31T20:31:40+06:00",
        "open": true
    },
    {
        "date": "2022-09-01T20:31:40+06:00",
        "open": true
    }
]
const convertDate = (date) => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date(date);
    return { day: days[now.getDay()], month: months[now.getMonth()], date: now.getDate() }
}
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
};
const timeSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
};
const Page1 = () => {

    const [loading, setLoading] = React.useState(false)
    const [dates, setDates] = React.useState([])
    const [times, setTimes] = React.useState([])
    const [cuurentDate, setCurrentDate] = React.useState(null)
    const [cuurentTime, setCurrentTime] = React.useState(null)
    const { games, selectedGame, dispatch } = React.useContext(AppContext);
    React.useEffect(() => {
        if (games && games?.length > 0) {
            return
        }
        setLoading(true)
        fetch('https://api.springboardvr.com/v1/public/widget/f8f42930-5d9c-11ec-aa4a-3db00c01fc40')
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                console.log(data);
                dispatch('ADD_GAMES', data?.experiences || []);
            })
            .catch(e => setLoading(false))
    }, [])

    const handleSelectGame = (value) => {
        dispatch('SET_GAME', value);
        console.log(selectedGame);
        setDates(demoDates)
    }
   
    const handleDateClick = (item, index) => {
        setCurrentDate(index)
        dispatch('SET_DATE', item)
        setTimes(demoTimes)
    }

  const handleTimeClick = (item, index)=>{
    setCurrentTime(index)
    dispatch('SET_TIME', item)
  }
    const renderDates = () =>
        dates.map((item, index) => {
            const current = convertDate(item.date);
            return <div className={`date-card ${cuurentDate === index ? 'selected' : ''}`} onClick={() => handleDateClick(item.date, index)}>
                <div className="date">
                    <h6 className='current-day'>{current.day}</h6>
                    <h6 className='current-date'>{current.date}</h6>
                    <h6 className='current-month'>{current.month}</h6>
                </div>
            </div>
        })
    const renderTimes = () =>
        times.map((item, index) => {
            const time = new Date(item.date).toLocaleTimeString();
            return <div className={`time-card ${cuurentTime === index ? 'selected' : ''}`} onClick={() => handleTimeClick(item.date, index)}>
                <div className="time">
                    <h6 className='current-time'>{time}</h6>
                    <h6 className='current-stations'>{item.maxStations} Stations Available</h6>
                </div>
            </div>
        })
    return (
        <div>
            <Grid container spacing={2} className="games-list">
                {
                    loading ?
                        <Loading />
                        :
                        games?.map(game => (
                            <Grid item xs={12} sm={6} md={4} onClick={() => handleSelectGame(game)} className={selectedGame?.id === game.id ? 'selected' : ''}>
                                <Game title={game.title} img={game.imageUrl} description={game.description} persons="1 person per station" />
                            </Grid>
                        ))
                }

            </Grid>
            {selectedGame && <div className="select-date-container">
                <h6>Select a date</h6>
                <div>
                    <Slider {...settings}>{renderDates()}</Slider>
                </div>
            </div>}
            {cuurentDate && <div className="select-time-container">
                <h6>Select a time</h6>
                <div>
                <Slider {...timeSettings}>{renderTimes()}</Slider>
                </div>
            </div>}
        </div>
    )
}

export default Page1