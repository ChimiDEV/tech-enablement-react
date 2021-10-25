import { Grid, Row, Column } from 'carbon-components-react';
import '../../styles/timeline.css';
import profile from '../../images/profile.jpeg';
import mentor from '../../images/mentor.png';
import aws from '../../images/aws_architect.png';
import designThinking from '../../images/design_thinking.png';

const WhoAmI = ({ setToast }) => {
  const onBachelorClick = () => {
    setToast({
      kind: 'success',
      title: 'Bachelor Thesis',
      subtitle:
        'My bachelor thesis had the title "Cognitive Customer Profiling in the Automotive Industry"',
      caption: '',
      onClose: () => setToast({}),
      onCloseButtonClick: () => setToast({}),
    });
  };

  return (
    <>
      <Grid>
        <Row>
          <Column>
            <div className="who-am-i-header">
              Welcome! Let me introduce you into{' '}
              <span className="profile-card-title-name">React</span>
            </div>
            <div className="profile-card-container">
              <img
                className="profile-card-picture"
                src={profile}
                alt="Profile"
              />
              <h1 className="profile-card-title">
                Hi! I'm{' '}
                <span className="profile-card-title-name">Tim Walter</span>
              </h1>
              <div className="profile-card-job">
                Cloud Engineer@IBM Client Engineering
              </div>
              <div className="profile-card-description">
                <span className="profile-card-description-title">
                  Enthusiast
                </span>
                <br />
                for innovative technology and mobility trends
                <br />
                <span className="profile-card-description-title">
                  5+ Years of
                </span>
                <br />
                hands-on experience in software engineering
              </div>
              <div className="profile-card-badges">
                <img
                  className="profile-card-badge"
                  src={mentor}
                  alt="Mentor Badge"
                />
                <img className="profile-card-badge" src={aws} alt="AWS Badge" />
                <img
                  className="profile-card-badge"
                  src={designThinking}
                  alt="Design Thinking Badge"
                />
              </div>
            </div>
          </Column>
          <Column>
            <ul className="timeline">
              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Abitur</span>
                    <span className="time-wrapper">
                      <span className="time">2012 - 2015</span>
                    </span>
                  </div>
                  <div className="desc">
                    Focused on "Design and Media Technology"
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">Cooperative Student</span>
                    <span className="time-wrapper">
                      <span className="time">2015 - 2018</span>
                    </span>
                  </div>
                  <div className="desc">
                    Started to work for IBM.
                    <br />I studied applied computer science.
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">IBM Lab: Böblingen</span>
                    <span className="time-wrapper">
                      <span className="time">PE1</span>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">IBM GTS: Hannover</span>
                    <span className="time-wrapper">
                      <span className="time">PE2</span>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">IBM Lab: Hannover</span>
                    <span className="time-wrapper">
                      <span className="time">PE3</span>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">IBM GBS: Munich</span>
                    <span className="time-wrapper">
                      <span className="time">PE4</span>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">IBM Global Markets: Ehningen</span>
                    <span className="time-wrapper">
                      <span className="time">PE5</span>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span
                      className="flag interactive-flag"
                      onClick={onBachelorClick}
                    >
                      Bachelor Thesis
                    </span>
                    <span className="time-wrapper">
                      <span className="time">PE6</span>
                    </span>
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">IBM Consulting</span>
                    <span className="time-wrapper">
                      <span className="time">2018 - 2021</span>
                    </span>
                  </div>
                  <div className="desc">
                    I joined IBM Consulting (formerly known as GBS) full-time as
                    <span className="bold">
                      {' '}
                      Associate Cognitive Consultant
                    </span>
                    .
                    <br />
                    After around 1 1/2 years I graduated from the associate
                    programm and got promoted to a{' '}
                    <span className="bold">
                      Senior Consultant working as Solution Architect
                    </span>
                    .
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Project: RSE</span>
                    <span className="time-wrapper">
                      <span className="time">Oct 2018 - Dec 2018</span>
                    </span>
                  </div>
                  <div className="desc">
                    Short time project in automotive industry
                  </div>
                </div>
              </li>
              <li>
                <div className="direction-r">
                  <div className="flag-wrapper">
                    <span className="flag">Project: DB IoT Cloud</span>
                    <span className="time-wrapper">
                      <span className="time">Dec 2018 - Aug 2021</span>
                    </span>
                  </div>
                  <div className="desc">
                    Worked at Deutsche Bahn at their IoT Cloud.
                  </div>
                </div>
              </li>

              <li>
                <div className="direction-l">
                  <div className="flag-wrapper">
                    <span className="flag">IBM Client Engineering</span>
                    <span className="time-wrapper">
                      <span className="time">Sep 2021 - Present</span>
                    </span>
                  </div>
                  <div className="desc">
                    I joined the IBM Client Engineering team
                    <br />
                    <span className="bold">as Cloud Engineer (Industrial)</span>
                    .
                  </div>
                </div>
              </li>
            </ul>
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default WhoAmI;
