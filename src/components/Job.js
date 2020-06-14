import React, { Component } from "react";
export default class Job extends Component {
  render() {
    const { resumeData } = this.props;
    return (
      <section id="jobs">
        <div className="row portfolio">
          <div className="three columns header-col">
            <h1>
              <span>Jobs</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="nine columns main-col">
              <p className="text-title">{resumeData.portfolioDescription}</p>
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div className="row item" key={item.id}>
                      <div className="twelve columns">
                        <h3>{item.name}</h3>
                        <p className="info">
                          {item.description}
                        </p>
                        <div className="stat-pills-container">
                          {
                            item.technologies && item.technologies.map((tech) => {
                              return (
                                <span key={`job-technology_${item.id}-${tech}`} className="stat-pill">{tech}</span>
                              );
                            })
                          }
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
