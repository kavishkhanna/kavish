import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Tests whether in real life or programming, doesn't make us slow or weak. Instead they make path for us to become stronger and better than ever.
              </p>
            </div>
          </div>
        </section>
        );
  }
}
