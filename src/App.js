import './App.css';


const IMAGES = "../img/"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <div className="header_text">3:25</div>
          <div className="header_text">Лекторий 6.29</div>
          <img src={`${IMAGES}/logo.png`} alt="" />
        </div>

        <div className="center">
          <div className="lef_panel">
            <div className="volume">
              <div className="volume_btns">
                <img src={`${IMAGES}/volume_plus.png`} alt="" className="volume_btn" />
                <img src={`${IMAGES}/volume_minus.png`} alt="" className="volume_btn" />
              </div>
              <img src={`${IMAGES}/volume_bar.png`} alt="" className="volume_bar_btn" />
            </div>

            <div className="volume_text">Громкость: 0%</div>
            <img src={`${IMAGES}/mute.png`} alt="" />
            <div className="volume_text">Выкл звук</div>
            <img src={`${IMAGES}/info.png`} alt="" />
          </div>
          <div className="main">
            <div>
              <div className="ring_texts">
                <div className="ring_text">Текущий вызов:</div>
                <div className="ring_text">Имя: N/A</div>
                <div className="ring_text">Номер: N/A</div>
              </div>
              <div className="call_btns">
                <div className="call_btn"><img src={`${IMAGES}/call_green.png`} alt="" /></div>
                <div className="call_btn"><img src={`${IMAGES}/hangup_red.png`} alt="" /></div>
              </div>
              <div className="call_btns">
                <div className="call_btn"><img src={`${IMAGES}/microphone_white.png`} alt="" /></div>
                <div className="call_btn"><img src={`${IMAGES}/camera.png`} alt="" /></div>
                <div className="call_btn"><img src={`${IMAGES}/pip.png`} alt="" /></div>
              </div>
            </div>

            <div><img src={`${IMAGES}/menu_separator.png`} alt="" /></div>

            <div className="right_menu">
              <div className="right_menu_buttons">
                <img src={`${IMAGES}/shedule.png`} alt="" />
                <img src={`${IMAGES}/dial.png`} alt="" />
                <img src={`${IMAGES}/contact.png`} alt="" />
                <img src={`${IMAGES}/conf_camera.png`} alt="" />
                <img src={`${IMAGES}/content.png`} alt="" />
                <img src={`${IMAGES}/remote.png`} alt="" />
              </div>
              <img src={`${IMAGES}/menu_separator (1).png`} alt="" className="separator" />
              <div>
                <img src={`${IMAGES}/remote_panel.png`} alt="" />
              </div>
              <div>
                <img src={`${IMAGES}/arrow_left_white.png`} alt="" />
                <img src={`${IMAGES}/home_white.png`} alt="" />
                <img src={`${IMAGES}/list_white.png`} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <img src={`${IMAGES}/power_btn.png`} alt="" className="footer_btn" />
          <img src={`${IMAGES}/climate.png`} alt="" className="footer_climate_btn" />
          <img src={`${IMAGES}/light.png`} alt="" className="footer_btn" />
          <img src={`${IMAGES}/keyb.png`} alt="" className="footer_btn" />
          <img src={`${IMAGES}/audio.png`} alt="" className="footer_btn" />
          <img src={`${IMAGES}/videowall.png`} alt="" className="footer_btn" />
          <img src={`${IMAGES}/mics.png`} alt="" className="footer_btn" />
          <img src={`${IMAGES}/camera_select_btn.png`} alt="" className="footer_btn" />
        </div>
      </div>
    </div>
  );
}

export default App;
