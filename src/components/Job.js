import React, { Component } from "react";
export default class Job extends Component {
  render() {
    const { id = "jobs", title= "Jobs", items = [], description = "" } = this.props;
    return (
      <section id={id} className="jobs-container">
        <div className="row portfolio">
          <div className="three columns header-col">
            <h1>
              <span>{title}</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="nine columns main-col">
              <p className="text-title">{description}</p>
              {items &&
                items.map(item => {
                  return (
                    <div className="row item" key={item.id}>
                      <div className="twelve columns">
                        <h3>{item.name}</h3>
                        <p className="info">
                          {item.description}
                        </p>
                        <div className="stat-pills-container">
                          {
                            item.stats && item.stats.map((tech) => {
                              return (
                                <span key={`${id}-technology_${item.id}-${tech}`} className="stat-pill">{tech}</span>
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
