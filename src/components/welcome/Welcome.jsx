import './Welcome.scss';
import Countdown from "react-countdown";

const Welcome = () => {
  return (
    <div className="welcome_main">
      <div className='welcome_main_opacity'>
      <div className="welcome_main_border_div">
        <div className="welcome_content">

          <div className='names'>
          <p className="people_name" style={{marginBottom: '100px'}}>
            Վրեժ 
          </p>
          <p className="people_name">
            Սյուզի
          </p>
          </div>
          <div className="timer_block">
            <p className="timer_block_title">Հարսանիքին մնաց․․․</p>
            <p className="timer_block_coutndown">
              <Countdown date={new Date('Junest 01, 2025 18:30:00').getTime()} />
            </p>

            <div className="timer_parent">
              <div className="timer_name">
                <span className="day">օր</span> : <span className="hour">ժամ</span> : <span className="minute">րոպե</span> : <span className="second">վրկ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Welcome;